const links = document.querySelectorAll("#landing>div>a");

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.classList.add("fancy");
  });
  link.addEventListener("mouseleave", () => {
    link.classList.remove("fancy");
  });
});
