
let InternetRunnerForm = document.querySelector('.InternetRunnerForm');

let street = document.querySelector('.street');
let house = document.querySelector('.house');
let corpus  = document.querySelector('.corpus');
let input = document.querySelector('.input');
let input_nums = document.querySelector('.input-nums');
let textarea = document.querySelector('.textarea');
let spisok = document.querySelector('.spisok');
let btn = document.querySelector('.btn');


btn.onclick = function (event){
  // отменяем отправку формы
  event.preventDefault();
  // достаем инпут для добавления 
  let text_street = street.value;
  let text_house = house.value;
  let text_corpus = corpus.value;
  let text_input = input.value;
  let text_input_nums = input_nums.value;
  let text_textarea = textarea.value;

  
// формируе разметку для новой задачи 
     const listHTML = 
            `<div class="add--info">
            <select name="street_tvo">
                <option value="1">${text_street}</option>
            </select>
            <select name="house">
            <option value="1">${text_house}</option>
            </select>
            <select name="corpus">
                <option value="0">${text_corpus}</option>
            </select>
            <select name="input">
                <option value="Чердак">${text_input}</option>
            </select>
            <select name="input-nums">
                <option value="1">${text_input_nums}</option>
            </select> 
            <textarea cols="30" rows="1">${text_textarea}</textarea>       
            <!-- style="display: none;" -->           
        </div>`
        ;
        
     // добавим на страницу задачу
     spisok.insertAdjacentHTML('beforeend', listHTML)
}
