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