const formData = {
  email: "",
  message: "",
};

const storageKey = "feedback-form-state";

const formRefs = {
  form: document.querySelector(".feedback-form"),
  input: document.querySelector('input[type="email"]'),
  message: document.querySelector("textarea"),
};

 


// 1. Збереження даних форми в localStorage
function saveFormDataToLocalStorage() {
 
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

//2. Оновлення значення email
function onFormInput(event) {
  event.preventDefault();
  formData.email = event.target.value.trim();
  saveFormDataToLocalStorage();
}

// 3. Оновлення значення повідомлення
function onTextareaInput(event) {
  formData.message = event.target.value.trim();
  saveFormDataToLocalStorage();
}


formRefs.input.addEventListener("input", onFormInput);
formRefs.message.addEventListener("input", onTextareaInput);


// 4. Відправлення форми
function onFormSubmit(event) {
  event.preventDefault();
  // Перевіряємо, чи заповнені всі поля
  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return; // Зупиняємо виконання функції
  }
//Після того як ми засабмітили формуб дані відправились, виводим в консольку.
console.log(formData);
console.log('✅ Data send successfully');



//5. очищаємо форму
event.currentTarget.reset();
// у форми є метод ресет, який дозволяє очистити поля

// 6. Після відправилення видаляємо повідомлення зі сховища.
localStorage.removeItem(storageKey);

}

formRefs.form.addEventListener("submit", onFormSubmit); 


const rawData = localStorage.getItem(storageKey);
if (rawData){
    const data = JSON.parse(rawData);
    formRefs.input.value = data.email;
    formRefs.message.value = data.message;
}






























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