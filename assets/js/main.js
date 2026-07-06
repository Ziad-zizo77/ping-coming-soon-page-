const form = document.querySelector("#form");
const input = document.querySelector("#form .email");
const msgError = document.querySelector("#form .msg-error");
const button = document.querySelector("#submitBtn");
const emailRe = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

function submitError() {
  Swal.fire({
    icon: "error",
    title: "Oops!",
    text: "Failed to send your message. Please try again.",
    confirmButtonText: "OK",
    width: 350,
    height: 300,
  });
  input.classList.add("email-error");
  input.placeholder = "email@example.com";
  msgError.style.display = "block";
}
function submitSuccess() {
  Swal.fire({
    icon: "success",
    title: "Success!",
    text: "Your message has been sent successfully.",
    confirmButtonText: "OK",
    width: 350,
    height: 300,
  });
  input.placeholder = "Your email address";
  input.classList.remove("email-error");
  msgError.style.display = "none";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (emailRe.test(input.value)) {
    submitSuccess();
  } else {
    submitError();
  }
});
