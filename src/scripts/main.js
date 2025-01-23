import { handleFormSubmission } from "./ajax";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM загружен");
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (event) => {
    handleFormSubmission(event, form);
  });
});
