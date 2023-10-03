// document.getElementById("toggleMenuBtn").addEventListener("click", function () {
//   var forms = document.querySelectorAll(".custom-form");

//   forms.forEach(function (form) {
//     if (form.classList.contains("hidden")) {
//       form.classList.remove("hidden");
//     } else {
//       form.classList.add("hidden");
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("toggleMenuBtn");
  var searchForm = document.getElementById("searchForm");
  var iconsForm = document.getElementById("iconsForm");

  toggleButton.addEventListener("click", function () {
    searchForm.style.display = "none";
    iconsForm.style.display = "none";
  });

  document
    .getElementById("navbarElement")
    .addEventListener("hidden.bs.collapse", function () {
      searchForm.style.display = "block";
      iconsForm.style.display = "block";
    });
});
