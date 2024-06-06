let button = document.querySelector('#btn1');
let greeting = document.querySelector('#greeting');
let input = document.querySelector('#name-input')
button.addEventListener('click', () => {
    greeting.textContent = "Hello " + input.value;
})
input.addEventListener('input', () => {
    let inputValue = input.value;
    console.log("input field changed. new value: " + inputValue);
}); 
