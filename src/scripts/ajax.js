import { validateForm, showError, clearErrorFromFields } from "./validation.js";

//имитация ответа с сервера
async function mockServerResponse(form) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const validationResult = validateForm(form);

      console.log(validationResult);

      if (!validationResult.isValid) {
        resolve({ status: "error", fields: validationResult.errors });
      } else {
        resolve({ status: "success", msg: "Ваша заявка успешно отправлена" });
      }
    }, 1000);
  });
}

//так бы ваглядел вызов без использования axios
// async function sendFForm(data) {
//   const response = await fetch("/api/submit", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   if (!response.ok) {
//     const errorData = await response.json();
//     return { status: "error", fields: errorData.errors };
//   }

//   const resultData = await response.json();
//   return { status: "success", msg: resultData.message };
// }

export async function handleFormSubmission(event, form) {
  event.preventDefault();
  // clearErrorFromFields(form);

  const preloader = document.getElementById("preloader");
  preloader.style.display = "flex";

  try {
    const data = await mockServerResponse(form);
    if (data.status === "success") {
      const successMsg = document.getElementById("successMessage");
      form.reset();
      successMsg.textContent = data.msg;
    } else {
      Object.keys(data.fields).forEach((field) => {
        const inputElement = document.getElementById(field);
        if (inputElement) {
          showError(inputElement, data.fields[field]);
        }
      });
    }
  } catch (error) {
    console.error("Ошибка при отправке формы:", error);
  } finally {
    preloader.style.display = "none";
  }
}
