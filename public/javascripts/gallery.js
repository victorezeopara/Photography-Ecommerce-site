document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery-scroll");
  const leftBtn = document.getElementById("scrollLeft");
  const rightBtn = document.getElementById("scrollRight");
  const scrollAmount = 300; // Adjust this value to change scroll distance

  leftBtn.addEventListener("click", () => {
    gallery.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  rightBtn.addEventListener("click", () => {
    gallery.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });

  // Optional: Infinite scroll effect
  gallery.addEventListener("scroll", () => {
    if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth) {
      gallery.scrollLeft = 0;
    } else if (gallery.scrollLeft <= 0) {
      gallery.scrollLeft = gallery.scrollWidth - gallery.clientWidth;
    }
  });
});
