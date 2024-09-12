document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector("#mobile_nav");
  const nav = document.querySelector("nav");
  //   const dropdown = document.querySelector(".dropdown");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    // dropdown.classList.remove("active");
  });

  //   dropdown.addEventListener("click", () => {
  //     dropdown.classList.toggle("active");
  //   });
});
