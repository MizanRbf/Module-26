// Option 2 for event handler
function makeRed(){
  document.body.style = 'background: red';
}
function makeGreen(){
  document.body.style = 'background: green';
}

// Option 3 for event handler
const btnLast = document.getElementById('btn-last');
btnLast.onclick = function makeBlue(){
  document.body.style.background = 'blue';
}

// Option 4 for event handler
const btnMakePurple = document.getElementById('btn-make-purple');

   btnMakePurple.onclick = makePurple;

   function makePurple(){
    document.body.style.background = 'purple';
   }

  //  document.getElementById().addEventListener('event type', handler)
   document.getElementById('btn-listen').addEventListener('click', 
    function makeYellow(){
     document.body.style.background = 'yellow';
    })
