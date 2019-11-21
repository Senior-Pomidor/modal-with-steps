var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
}




// var options = document.querySelectorAll(".option");

// options[i].addEventListener('click', function() {
//   panel.classList.toggle('flex');
// })
let panels = document.querySelectorAll('.panel');

for (let l = 0; l<panels.length; l++) {
  let panel = panels[l];
  let options = panel.children;
  for (let o = 0; o < options.length; o++) {
    options[o].addEventListener('click', function (e) {
      this.parentElement.previousElementSibling.innerHTML = this.dataset.value;
      if (panel.style.display === "flex") {
        panel.style.display = "none";
      } else {
        panel.style.display = "flex";
      }
      /* alert(e.target.dataset.value);  */
    })
  }
}

