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
    if (!gallery) return;
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
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
