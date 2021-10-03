$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

window.addEventListener("load", () => {
  new jBox("Modal", {
    attach: "#watchButton",
    content: $("#watchModal"),
  });

  new jBox("Modal", {
    attach: "#infoButton",
    getTitle: "data-title",
    content: $("#infoModal"),
  });
});
