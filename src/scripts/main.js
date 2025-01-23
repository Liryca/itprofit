import { handleFormSubmission } from "./ajax";
import "./modal.js";
import "./validation.js";
import "./ajax.js";

window.addEventListener("load", () => {
  console.log("DOM загружен");
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (event) => {
    console.log(event);
    handleFormSubmission(event, form);
  });
});
