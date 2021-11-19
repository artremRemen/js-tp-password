document.documentElement.classList.add("js-enabled");
const input =  document.querySelector('#password');
const button = document.querySelector('.showPass');
let flipflop = 0;
button.addEventListener('click', (event)=>{
    if (flipflop === 0) {
        input.setAttribute('type','text');
        flipflop = 1;
    }
    else{
        input.setAttribute('type','password');
        flipflop = 0;
    }
});