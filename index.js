
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('mouseover', function (e) {
    console.log(e);
    console.log(e.target);
    // if (e.target.id === 'red') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'green') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'blue') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'pinks') {
    //   body.style.backgroundColor = e.target.id;
    // }


    //using switch
    const expr = e.target.id;
    switch(expr){
        case 'red':
            body.style.backgroundColor = e.target.id;
            break;
        
        case 'green':
            body.style.backgroundColor = e.target.id;
            break;

        case 'blue':
            body.style.backgroundColor = e.target.id;
            break;

        case 'pink':
            body.style.backgroundColor = e.target.id;
            break;
    }
    
  });
});

