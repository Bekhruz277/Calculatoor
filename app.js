const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('button'));

// console.log(buttons);

buttons.map(button => {
  button.addEventListener('click', (e) => {
    // console.log(e.target.innerText);

    switch(e.target.innerText) {
      case 'c':
        display.innerText = '';
        break;
      case '=':
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Ошибка"
        }
        break;
      case '←':
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }

  })
})