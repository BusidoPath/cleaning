let popup = document.querySelector('.popup__overlay'),
  button= document.querySelectorAll('.button'),
  close = document.querySelectorAll('.close'),
  buttonContent = document.querySelectorAll('.content-text-right-button');
  
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.remove("hidden");
  });
};


popup.addEventListener("click", function (event) {
  e = event || window.event
  if (e.target == this) {
    popup.classList.add("hidden");
  }
});


