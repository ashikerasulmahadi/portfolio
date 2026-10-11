(() => {
  const images = [
    ["identity-direction-01.jpg", "Brand identity"],
    ["identity-direction-02.jpg", "Brand identity"],
    ["identity-direction-03.jpg", "Brand identity"],
    ["identity-direction-04.png", "Brand identity"],
    ["identity-direction-05.png", "Brand identity"],
    ["identity-direction-06.png", "Brand identity"],
    ["identity-direction-07.jpg", "Brand identity"],
    ["business-Card-01.jpg", "Business card"],
    ["business-card-02.png", "Business card"],
    ["campaign-creative-01.png", "Campaign creative"],
    ["product-label-01.png", "Product label"],
    ["product-label-02.jpeg", "Product label"],
    ["product-promotion-01.png", "Product promotion"],
    ["product-promotion-02.jpeg", "Product promotion"],
    ["product-promotion-03.jpeg", "Product promotion"],
    ["product-promotion-04.jpeg", "Product promotion"],
    ["product-promotion-05.jpeg", "Product promotion"]
  ];
  const init = () => {
    const gallery = document.querySelector("#work .demo-gallery");
    if (gallery) {
      gallery.innerHTML = "";
      gallery.classList.add("uploaded-artwork-wall");
      images.forEach(([file, label]) => {
        const figure = document.createElement("figure");
        figure.className = "uploaded-artwork-item";
        const img = document.createElement("img");
        img.src = "assets/Gallery/" + file;
        img.alt = label;
        img.loading = "lazy";
        img.decoding = "async";
        img.onerror = () => figure.remove();
        figure.appendChild(img);
        gallery.appendChild(figure);
      });
    }
    if (!document.querySelector(".floating-behance-link")) {
      const link = document.createElement("a");
      link.className = "floating-behance-link";
      link.href = "https://www.behance.net/ashikrmahadi";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("aria-label", "Open Behance portfolio");
      link.innerHTML = '<span class="floating-behance-icon">Bē</span><span class="floating-behance-label">Behance Portfolio</span><span class="floating-behance-arrow">↗</span>';
      Object.assign(link.style, {
        position: "fixed", right: "22px", bottom: "22px", zIndex: "9999",
        display: "flex", alignItems: "center", gap: "11px", padding: "12px 17px 12px 12px",
        borderRadius: "999px", color: "#fff", textDecoration: "none",
        background: "linear-gradient(120deg,#1769ff,#0044d4)",
        boxShadow: "0 9px 28px rgba(0,76,230,.3), inset 0 1px 0 rgba(255,255,255,.25)",
        border: "1px solid rgba(255,255,255,.3)", font: "700 13px/1 'DM Sans',sans-serif",
        transition: "transform .25s ease,box-shadow .25s ease", backdropFilter: "blur(10px)"
      });
      const icon = link.querySelector(".floating-behance-icon");
      Object.assign(icon.style, {display:"grid",placeItems:"center",width:"30px",height:"30px",borderRadius:"50%",background:"rgba(255,255,255,.18)",font:"800 15px/1 'Space Grotesk',sans-serif"});
      link.querySelector(".floating-behance-arrow").style.fontSize = "16px";
      link.addEventListener("mouseenter", () => { link.style.transform = "translateY(-4px)"; link.style.boxShadow = "0 14px 34px rgba(0,76,230,.42),inset 0 1px 0 rgba(255,255,255,.25)"; });
      link.addEventListener("mouseleave", () => { link.style.transform = "none"; link.style.boxShadow = "0 9px 28px rgba(0,76,230,.3),inset 0 1px 0 rgba(255,255,255,.25)"; });
      const mobile = document.createElement("style");
      mobile.textContent = "@media(max-width:600px){.floating-behance-link{right:12px!important;bottom:12px!important;padding:10px 12px 10px 10px!important;gap:8px!important;font-size:12px!important}.floating-behance-icon{width:27px!important;height:27px!important}.floating-behance-label{display:inline!important}}";
      document.head.appendChild(mobile);
      document.body.appendChild(link);
    }
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();