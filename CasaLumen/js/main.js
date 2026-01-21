const form = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");
const year = document.querySelector("#year");

document.body.classList.add("is-ready");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (form && formNote) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent =
      "Gracias. Tu reserva fue enviada. Te confirmaremos pronto.";
    form.reset();
  });
}
