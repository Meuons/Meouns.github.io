
   function slideRight(){
   let x = document.getElementsByClassName('current');
for (i = 0; i < x.length; i++) {
  let id = x[i].id
 let number = parseInt(id);
 if (number == 4){
    number = 0;
 }
 let newNum = number + 1
 let newId = newNum.toString();
  document.getElementById(id).classList.remove('current');
  document.getElementById(newId).classList.add('current');
}
}
   
