function slideLeft(){
    let x = document.getElementsByClassName('current');
  for (i = 0; i < x.length; i++) {
   let id = x[i].id
  let number = parseInt(id);
  if (number == 1){
     number = 5;
  }
  let newNum = number - 1
  let newId = newNum.toString();
   document.getElementById(id).classList.remove('current');
   document.getElementById(newId).classList.add('current');
  }
  }
    