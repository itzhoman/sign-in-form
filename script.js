const container = document.querySelector('.container');
const signUpLink = document.querySelector('.signup-link');
const signinLink = document.querySelector('.signin-link');

signUpLink.addEventListener("click", () => {
  container.classList.add("navigate");
});

signinLink.addEventListener("click", () => { 
  container.classList.remove("navigate");
});
