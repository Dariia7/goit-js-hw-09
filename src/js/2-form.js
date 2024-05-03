const formData = {
  email: "",
  message: "",
};

const STORAGE_KEY = "feedback-form-state";

const formRefs = {
  form: document.querySelector(".feedback-form")
};

const {email, message} = formRefs.form.elements;

formRefs.form.addEventListener("input", onFormInput);
 formRefs.form.addEventListener("submit", onFormSubmit); 


const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData){
    const data = JSON.parse(savedData);
    email.value = data.email;
    message.value = data.message;
    formData.email = data.email;   // 1 рядок formData
    formData.message = data.message;
}
 
// Оновлення значення email
function onFormInput(event) {

formData[event.target.name] = event.target.value.trim();

saveFormDataToLocalStorage(STORAGE_KEY, formData);
}


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
formRefs.form.reset()
// очищаємо форму
// console.log(formRefs.form === event.target); // і там і там посилання на об*єкт

// очищаємо сторедж
localStorage.removeItem(STORAGE_KEY);

formData.email = "";
formData.message = ""; 

}

//  Збереження даних форми в localStorage
function saveFormDataToLocalStorage(key, data) {
 
  localStorage.setItem(key, JSON.stringify(data));
}
