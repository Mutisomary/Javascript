function game(selector) {
    const buttongame = document.querySelector(selector);
     if (!buttongame.classList.contains('is-toggled')) {
        prevgame();
         buttongame.classList.add('is-toggled')
     } else {
         buttongame.classList.remove('is-toggled');
     }
 }
 function prevgame() {
    const prevbutton = document.querySelector('.is-toggled')
    if (prevbutton) {
        prevbutton.classList.remove('is-toggled')
    };
 }