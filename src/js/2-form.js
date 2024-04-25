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

