function enterApp() {
  localStorage.setItem("apmUserVerified", "true");
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
}

window.onload = function () {
  if (localStorage.getItem("apmUserVerified") === "true") {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
  }

  const coll = document.getElementsByClassName("collapsible");
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
};
