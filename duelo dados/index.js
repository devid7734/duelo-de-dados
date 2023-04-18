p1.onclick = function DUELO() {
    
 

    let bt1 = document.getElementById('p1');
    let numero = Math.floor(Math.random() * 6) + 1;
    let resultado= document.getElementById('N');
   

    resultado.innerHTML= "O NUMERO DO DADO É:" + numero + ".";
    
   
}
p2.onclick = function DUELO2() {
 

    let bt2 = document.getElementById('p2');
    let numero = Math.floor(Math.random() * 6) + 1;
    let resultado2= document.getElementById('L');

  
    resultado2.innerHTML= "O NUMERO DO DADO É:" + numero + ".";

   
}

