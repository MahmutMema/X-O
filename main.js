var box=document.querySelector(".box")
 createTable()

var boxes= document.querySelectorAll(".xo")

 var symbol="O"

 var lines=[
[boxes[0],boxes[1],boxes[2]],
[boxes[3],boxes[4],boxes[5]],
[boxes[6],boxes[7],boxes[8]],
[boxes[0],boxes[3],boxes[6]],
[boxes[1],boxes[4],boxes[7]],
[boxes[2],boxes[5],boxes[8]],
[boxes[0],boxes[4],boxes[8]],
[boxes[2],boxes[4],boxes[6]]

 ]

 for(let i = 0; i<boxes.length; i++){

    boxes[i].addEventListener("click",insertSymbol)
}






function createTable(){
var text=""

for(let i = 0 ;i < 9; i++){
 text += "<div class ='xo'></div>"   
 }
 box.innerHTML=text
}

 function insertSymbol(){
 
symbol == "O" ? symbol ="X" : symbol = "O"  

    

  
this.innerHTML=symbol
checkLines()
 }

 function checkLines(){
for(let i = 0; i < lines.length;i++ ){
    var line = lines[i]
if(line[0].innerHTML==line[1].innerHTML &&line[0].innerHTML==line[2].innerHTML&&line[0].innerHTML != ""){
for(let k = 0; k < line.length; k++){
    line[k].style.color="red"
    line[k].style.background="chocolate"
    line[k].style.border = "2px solid #000000"
}

}
}

 }