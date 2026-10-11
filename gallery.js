(() => {
  const images = [
    ["identity-direction-01.jpg", "Brand identity"],
    ["identity-direction-02.jpg", "Brand identity"],
    ["identity-direction-03.jpg", "Brand identity"],
    ["identity-direction-04.png", "Brand identity"],
    ["identity-direction-05.png", "Brand identity"],
    ["business-Card-01.jpg", "Business card"],
    ["business-card-02.png", "Business card"],
    ["product-promotion-01.png", "Product promotion"],
    ["product-promotion-02.jpeg", "Product promotion"],
    ["product-promotion-03.jpeg", "Product promotion"],
    ["product-promotion-04.jpeg", "Product promotion"],
    ["product-promotion-05.jpeg", "Product promotion"]
  ];
  const init = () => {
    const gallery = document.querySelector("#work .demo-gallery");
    if (!gallery) return;
    gallery.innerHTML = "";
    gallery.classList.add("uploaded-artwork-wall");
    images.forEach(([file, label]) => {
      const img = document.createElement("img");
      img.src = "assets/Gallery/" + file;
      img.alt = label;
      img.loading = "lazy";
      img.decoding = "async";
      img.onerror = () => { img.closest("figure")?.remove(); };
      const figure = document.createElement("figure");
      figure.className = "uploaded-artwork-item";
      figure.appendChild(img);
      gallery.appendChild(figure);
    });
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();