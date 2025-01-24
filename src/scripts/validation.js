import Inputmask from "inputmask";
import "../styles/main.scss";

const EMAIL_ERROR = "Введите корректный адрес электронной почты.";
const EMPTY_ERROR = "Поле обязательно для заполнения";
const MASK = "999 (99) 999-99-99";
const REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const setInputMask = () => {
  const phoneInput = document.getElementById("phone");
  const im = new Inputmask({
    mask: MASK,
    placeholder: " ",
  });
  im.mask(phoneInput);
};

const validateEmail = (email) => {
  return REGEX.test(email);
};

const validateField = (input) => {
  let isValid = true;
  let errorMessage = "";

  if (input.id === "email") {
    if (input.value.trim() === "") {
      errorMessage = EMPTY_ERROR;
      isValid = false;
    } else if (!validateEmail(input.value)) {
      errorMessage = EMAIL_ERROR;
      isValid = false;
    }
  } else {
    if (!input.value.trim()) {
      errorMessage = EMPTY_ERROR;
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

document.addEventListener("DOMContentLoaded", () => {
  setInputMask();
});
