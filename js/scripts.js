document.querySelector(".header__trigger").onclick = function () {
  open();
};

function open() {
  document.getElementById("menu").classList.toggle("header__show");
  document.getElementById("trigger").classList.toggle("change");
}

let links = document.querySelectorAll('a[href*="#"]');

for (let link of links) {
  link.addEventListener("click", function (clickedLink) {
    clickedLink.preventDefault();

    let id = link.getAttribute("href").substr(1);
    console.log(id);
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("btnToTop").classList.add("block");
  } else {
    document.getElementById("btnToTop").classList.remove("block");
  }
}

// When the user clicks on the button, scroll to the top of the document
function toTop() {
  document.getElementById('header').scrollIntoView({
    behavior: "smooth",
    block: "start",
  });// For Chrome, Firefox, IE and Opera
}
