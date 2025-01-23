import { handleFormSubmission } from "./ajax";
import "./modal.js";
import "./validation.js";
import "./ajax.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM загружен");
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (event) => {
    handleFormSubmission(event, form);
  });
});
