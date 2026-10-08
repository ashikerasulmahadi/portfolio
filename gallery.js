(() => {
  const init = () => {
    const modal = document.getElementById('portfolioGallery');
    const main = document.getElementById('galleryMainArt');
    const thumbs = document.getElementById('galleryThumbs');
    const counter = document.getElementById('galleryCounter');
    if (!modal || !main || !thumbs) return;

    const cards = Array.from(document.querySelectorAll('.demo-card'));
    let items = [];
    let index = 0;

    const makeItems = (card) => {
      const title = card.querySelector('strong')?.textContent?.trim() || 'Design Work';
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
      const fallback = card.querySelector('.demo-art')?.innerHTML || '';
      return Array.from({length:8}, (_,i) => ({
        title, fallback,
        src: 'assets/gallery/' + slug + '-' + String(i+1).padStart(2,'0') + '.jpg'
      }));
    };

    const show = (n) => {
      if (!items.length) return;
      index = (n + items.length) % items.length;
      const item = items[index];
      main.innerHTML = item.fallback;
      const img = new Image();
      img.alt = item.title + ' image ' + (index + 1);
      img.onload = () => { main.innerHTML=''; main.appendChild(img); };
      img.src = item.src;
      counter.textContent = String(index+1).padStart(2,'0') + ' / 08';
      thumbs.querySelectorAll('.gallery-thumb').forEach((b,i)=>b.classList.toggle('active',i===index));
    };

    const open = (card) => {
      items = makeItems(card);
      const title = card.querySelector('strong')?.textContent?.trim() || 'Design Work';
      const heading = modal.querySelector('.gallery-top strong');
      if (heading) heading.textContent = title;
      thumbs.innerHTML = '';
      items.forEach((item,i)=>{
        const b=document.createElement('button');
        b.type='button'; b.className='gallery-thumb';
        const img=document.createElement('img'); img.alt=''; img.src=item.src;
        img.onerror=()=>{b.innerHTML=item.fallback;};
        b.appendChild(img);
        b.addEventListener('click',()=>show(i));
        thumbs.appendChild(b);
      });
      show(0);
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden','false');
      document.body.classList.add('gallery-open');
    };

    const close=()=>{
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden','true');
      document.body.classList.remove('gallery-open');
    };

    cards.forEach(card=>card.addEventListener('click',e=>{
      if(e.target.closest('a,button')) return;
      e.preventDefault();
      e.stopPropagation();
      open(card);
    }));
    modal.querySelectorAll('[data-gallery-close]').forEach(el=>el.addEventListener('click',close));
    modal.querySelector('.gallery-prev')?.addEventListener('click',()=>show(index-1));
    modal.querySelector('.gallery-next')?.addEventListener('click',()=>show(index+1));
    document.addEventListener('keydown',e=>{
      if(!modal.classList.contains('is-open')) return;
      if(e.key==='Escape') close();
      if(e.key==='ArrowLeft') show(index-1);
      if(e.key==='ArrowRight') show(index+1);
    });
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
  else init();
})();