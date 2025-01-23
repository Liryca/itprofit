import Inputmask from "inputmask";
import "../styles/main.scss";

const emailError = "Введите корректный адрес электронной почты.";
const emptyError = "Поле обязательно для заполнения";

const setInputMask = () => {
  const phoneInput = document.getElementById("phone");
  const im = new Inputmask({
    mask: "999 (99) 999-99-99",
    placeholder: " ",
  });
  im?.mask(phoneInput);
};

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validateField = (input) => {
  let isValid = true;
  let errorMessage = "";

  if (input.id === "email") {
    if (input.value.trim() === "") {
      errorMessage = emptyError;
      isValid = false;
    } else if (!validateEmail(input.value)) {
      errorMessage = emailError;
      isValid = false;
    }
  } else {
    if (!input.value.trim()) {
      errorMessage = emptyError;
      isValid = false;
    }
  }

  return { isValid, errorMessage };
};

const clearError = (input) => {
  const errorDiv = document.getElementById(`${input.id}Error`);
  if (errorDiv) {
    errorDiv.textContent = "";
  }

  input.classList.remove("form__input-error");
};

export const validateForm = (form) => {
  let isValid = true;
  const errors = {};

  Array.from(form.elements).forEach((input) => {
    if (input.tagName === "INPUT" || input.tagName === "TEXTAREA") {
      const { isValid: fieldIsValid, errorMessage } = validateField(input);
      if (!fieldIsValid) {
        isValid = false;
        errors[input.id] = errorMessage;
      }
    }
  });

  return { isValid, errors };
};

export const showError = (input, message) => {
  const errorDiv = document.getElementById(`${input.id}Error`);

  if (errorDiv) {
    errorDiv.textContent = message;
  }
  input.classList.add("form__input-error");
};

export const clearErrorFromFields = (form) => {
  Array.from(form.elements).forEach((input) => {
    if (input.tagName === "INPUT" || input.tagName === "TEXTAREA") {
      clearError(input);
    }
  });
};

window.addEventListener("load", () => {
  setInputMask();
});
