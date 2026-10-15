// typing text hero
const typed = new Typed(".typing-text", {
    strings: ["Business Analyst", "UI/UX Designer", "Content Creator"],
    loop: true,
    typeSpeed: 55,
    backSpeed: 25,
    backDelay: 500,
  });
  
  // auto hide navbar click
  $(".click-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });
  
  // automatic transparent navbar
  const navBar = document.getElementsByTagName("nav")[0];
  window.addEventListener("scroll", function () {
    console.log(window.scrollY);
    if (window.scrollY > 1) {
      navBar.classList.replace("bg-transparent", "navbar-color");
    } else if (this.window.scrollY <= 0) {
      navBar.classList.replace("navbar-color", "bg-transparent");
    }
  });
  
  const detailModal = document.querySelector("#detail-modal");
  const detailModalTitle = document.querySelector("#detail-modal-title");
  const detailModalContent = document.querySelector("#detail-modal-content");

  function openDetail(card) {
    const template = document.getElementById(`${card.dataset.detail}-detail`);
    if (!(template instanceof HTMLTemplateElement)) {
      console.error(`Missing detail template for "${card.dataset.detail}".`);
      return;
    }

    detailModalTitle.textContent = template.dataset.title;
    detailModalContent.replaceChildren(template.content.cloneNode(true));
    detailModal.showModal();
  }

  document.querySelectorAll(".detail-card[data-detail]").forEach((card) => {
    card.addEventListener("click", () => openDetail(card));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDetail(card);
      }
    });
  });

  document.querySelector(".detail-modal-close").addEventListener("click", () => {
    detailModal.close();
  });

  detailModal.addEventListener("cancel", (event) => {
    event.preventDefault();
    detailModal.close();
  });

  detailModal.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      detailModal.close();
    }
  });

  detailModal.addEventListener("click", (event) => {
    if (event.target === detailModal) {
      detailModal.close();
    }
  });
  
  // loadmore button
  const loadmore = document.querySelector(".loadmore-btn");
  
  let currentItems = 3;
  loadmore.addEventListener("click", () => {
    const elementList = [
      ...document.querySelectorAll(".certification .content .box"),
    ];
  
    for (let i = currentItems; i < currentItems + 3; i++) {
      if (elementList[i]) {
        elementList[i].classList.add("d-block");
      }
    }
    currentItems += 3;
  
    if (currentItems >= elementList.length) {
      loadmore.classList.add("d-none");
    }
  });
  
  // animate on scroll (AOS)
  AOS.init();
  
  // disable inspect element or dev mode
  document.addEventListener("contextmenu", function(e){
    e.preventDefault();
  });
  
  document.onkeydown = function (e) {
    if (e.ctrlKey && e.shiftKey && ["I", "C", "J"].includes(e.key.toUpperCase())) {
      return false;
    }
    if (e.ctrlKey && e.key.toUpperCase() === "I") {
      return false;
    }
  };
  
  // Scrollspy botstrap
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: ".navbar",
  });
  
  // scroll reveal animation content
  const srtop = ScrollReveal({
    origin: "top",
    distance: "90px",
    duration: 1000,
    reset: true,
  });
  
  srtop.reveal(".home .content .intro h3", { delay: 300 });
  srtop.reveal(".home .content .intro p", { delay: 300 });
  srtop.reveal(".home .content .intro a", { delay: 400 });
  
  srtop.reveal(".home .image", { delay: 600 });
  srtop.reveal(".home .linkedin", { interval: 600 });
  srtop.reveal(".home .github", { interval: 600 });
  srtop.reveal(".home .instagram", { interval: 600 });
  
  srtop.reveal(".about .cv-btn", { delay: 200 });