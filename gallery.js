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


    // Auto-rotate each card's uploaded gallery images in its thumbnail preview.
    // If no real image exists for a card yet, keep its built-in SVG artwork.
    const initCardSlideshows = () => {
      cards.forEach(card => {
        const art = card.querySelector('.demo-art');
        if (!art || art.dataset.slideshowReady === '1') return;
        art.dataset.slideshowReady = '1';
        const title = card.querySelector('strong')?.textContent?.trim() || 'Design Work';
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
        const base = 'https://ashikerasulmahadi.github.io/portfolio/assets/gallery/';
        const extensions = ['.jpg','.jpeg','.png','.webp'];
        const candidates = [];
        for (let i=1;i<=8;i++) {
          const n=String(i).padStart(2,'0');
          extensions.forEach(ext => candidates.push(base+slug+'-'+n+ext));
          if (slug === 'identity-direction') extensions.forEach(ext => candidates.push(base+'dentity-direction-'+n+ext));
        }
        const loaded = [];
        let pending = candidates.length;
        const finish = () => {
          if (pending !== 0 || !loaded.length || art.dataset.slideshowStarted === '1') return;
          art.dataset.slideshowStarted = '1';
          loaded.sort((a,b) => Number(a.slot)-Number(b.slot));
          const unique = [];
          const seen = new Set();
          loaded.forEach(item => { if (!seen.has(item.src)) { seen.add(item.src); unique.push(item); } });
          if (!unique.length) return;
          let current = 0;
          const image = document.createElement('img');
          image.className = 'demo-auto-slide';
          image.alt = title + ' portfolio preview';
          image.loading = 'lazy';
          image.src = unique[0].src;
          art.appendChild(image);
          art.classList.add('has-auto-slides');
          if (unique.length > 1) {
            window.setInterval(() => {
              current = (current + 1) % unique.length;
              image.classList.add('is-changing');
              window.setTimeout(() => {
                image.src = unique[current].src;
                image.classList.remove('is-changing');
              }, 220);
            }, 3200);
          }
        };
        candidates.forEach(src => {
          const probe = new Image();
          probe.onload = () => { loaded.push({src, slot: src.match(/-(\d{2})\.(?:jpe?g|png|webp)$/i)?.[1] || '01'}); pending--; finish(); };
          probe.onerror = () => { pending--; finish(); };
          probe.src = src;
        });
      });
    };

    const makeItems = (card) => {
      const title = card.querySelector('strong')?.textContent?.trim() || 'Design Work';
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
      const fallback = '<div class="gallery-empty-slot"><span>UPLOAD IMAGE</span><small>Replace this slot in assets/gallery</small></div>';
      return Array.from({length:8}, (_,i) => {
        const number = String(i+1).padStart(2,'0');
        const base = 'https://ashikerasulmahadi.github.io/portfolio/assets/gallery/';
        const extensions = ['.jpg','.jpeg','.png','.webp'];
        const sources = extensions.map(ext => base + slug + '-' + number + ext);
        // Accept the earlier uploaded "dentity-direction" spelling as well.
        if (slug === 'identity-direction') {
          extensions.forEach(ext => sources.push(base + 'dentity-direction-' + number + ext));
        }
        return { title, fallback, src: sources };
      });
    };

    const show = (n) => {
      if (!items.length) return;
      index = (n + items.length) % items.length;
      const item = items[index];
      main.innerHTML = item.fallback;
      const img = new Image();
      img.alt = item.title + ' image ' + (index + 1);
      img.onload = () => { main.innerHTML=''; main.appendChild(img); };
      let extIndex = 0;
      img.onerror = () => { extIndex++; if (extIndex < item.src.length) img.src = item.src[extIndex]; };
      img.src = item.src[0];
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
        const img=document.createElement('img'); img.alt='';
        let extIndex = 0;
        img.onerror=()=>{ extIndex++; if (extIndex < item.src.length) img.src=item.src[extIndex]; else b.innerHTML=item.fallback; };
        img.src=item.src[0];
        b.appendChild(img);
        b.addEventListener('click',()=>show(i));
        thumbs.appendChild(b);
      });
      show(0);
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden','false');
      document.body.classList.add('gallery-open');
    };

    initCardSlideshows();

    const close=()=>{
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden','true');
      document.body.classList.remove('gallery-open');
    };

    // Continuous image wall: cards no longer open a separate modal gallery.
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