const formData = {
  email: "",
  message: ""
};
const storageKey = "feedback-form-state";
// Функція оновлення formData
function formUpdate() {
  formData.email = document.querySelector('input[name="email"]').value;
  formData.message = document.querySelector('textarea').value;

  // Зберігаємо оновлений formData в локальне сховище
  localStorage.setItem(storageKey, JSON.stringify(formData));

  // Заповнюємо форму збереженими даними
  document.querySelector('input[name="email"]').value = formData.email;
  document.querySelector('textarea').value = formData.message;
}

// Делегування події input для відстеження змін у формі
const form = document.querySelector('.feedback-form');
form.addEventListener('input', formUpdate);

// Завантаження даних форми
window.addEventListener("load", () => {
  const jsonData = localStorage.getItem(storageKey); // отримує значення з локального сховища
  if (jsonData) {
    const data = JSON.parse(jsonData); // перетворює JSON у JS об'єкт
    document.querySelector('input[name="email"]').value = data.email; // Доступ до поля вводу email за name
    document.querySelector('textarea').value = data.message; // Доступ до поля вводу повідомлення за селектором
  }
});

// Додаємо слухача події submit до форми
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Запобігає відправці форми за замовчуванням

  // Перевіряємо, чи заповнені всі поля
  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return; // Зупиняємо виконання функції
  }

  // Виводимо formData в консоль
  console.log(formData);

  // Очищаємо локальне сховище
  localStorage.removeItem(storageKey);

  // Очищаємо formData та поля форми
  formData.email = "";
  formData.message = "";
  document.querySelector('input[name="email"]').value = "";
  document.querySelector('textarea').value = "";

  // Додаткові дії (якщо потрібно)

  // Дозволяємо відправлення форми
  event.target.submit();
});




/*
const storageKey = "feedback-form-state";
const formRefs = {
  form: document.querySelector(".feedback-form"),
  input:document.querySelector('input[type="email"]'),
  message:document.querySelector("textarea"),
};

  /*
  Це об'єкт, де:

Ключі - це рядки, які відповідають назвам властивостей.
Значення - це посилання на DOM-елементи, знайдені за допомогою document.querySelector.

  */

/**
 * - Скасовуємо стандартну поведінку ✅
 * - Очищуємо форму ✅
 */

/*
function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
 
}
formRefs.form.addEventListener("submit",onFormSubmit);// при сабміті скасовуєм стандартну поведінку і очищуєм


// TEXRAREA
// Отримаємо значення поля;
// Зберігаємо його у сховище;
function onTextareaInput(event) {
  console.log(event.currentTarget.value);
  localStorage.setItem(storageKey, event.currentTarget.value)
}

formRefs.message.addEventListener("input", onTextareaInput)  // отримаємо посилання на textarea і за доп input прослуховуєм подію введення і реагувати на введення користувача


// EMAIL
function EmailInput(event) {
  console.log(event.currentTarget.value);
  localStorage.setItem(storageKey,event.currentTarget.value)
}
formRefs.input.addEventListener("input", EmailInput);
*/





























/*
const formData = {
    email: "", 
    message: "" 
}

const storageKey = "feedback-form-state";
const form = document.querySelector(".feedback-form");


function readFormData(form) {
    const email = form.email.value;
    const message = form.message.value; 
    return {
        email,
        message
    }

}

window.addEventListener("load", () => {
    const jsonData = localStorage.getItem(storageKey); // отримує з.ння з локального сховища
    if (jsonData) {
      const data = JSON.parse(jsonData);// перетворює JSON у JS об*єкт
      form.email.value = data.email;
      form.message.value = data.message; // чому навпаки не працюэ?
 
    }
  });
  // Функція, що надається як аргумент, буде виконана після того, як сторінка буде повністю завантажена. Це робить load.



form.addEventListener("submit", (event) => {  // ця функ.отримує об*єкт події event як аргумент. 
    event.preventDefault(); // запобігає стандартному надсиланню форми.
    const data = readFormData(event.currentTarget);// викликаєм ф-цію, передаючи їй event.currentTarget як аргумент, щоб отримати дані, введені користувачем.
    console.log(data);


    if (data.email && data.message) { // Якщо обидва значення істині, код у блоці if буде виконано. 
        console.log(data);
        localStorage.removeItem(storageKey); // Цей рядок коду видаляє значення з локального сховища за ключем storageKey.
        // Це робиться для того, щоб очистити збережені дані форми, якщо користувач успішно надіслав її.
        formData.email = "";
        formData.message = "";
        form.email.value = "";
        form.message.value = "";
      } else {
        alert("Fill please all fields");
      }




    const jsonData = JSON.stringify(data);
    localStorage.setItem(storageKey, jsonData);
})


*/