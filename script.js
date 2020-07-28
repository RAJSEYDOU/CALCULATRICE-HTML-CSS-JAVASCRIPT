// get element


const allbtn= document.querySelectorAll(".btn")
const screen= document.querySelector(".screen")
const resultat= document.querySelector(".result")
const equals= document.querySelector(".equals")

const clear= document.querySelector('.clear')
const del= document.querySelector('.del')



for (i=0;i<allbtn.length;i++){
allbtn[i].addEventListener('click',getKey)

}

function getKey(){

	screen.append(this.value)
	
}



equals.addEventListener('click',calcul)
function calcul(){
	let calc=eval(screen.innerHTML)
	if(calc){
		resultat.innerHTML=calc
	}
	

}
// Wipe screen

clear.addEventListener('click',wipe)
function wipe(){
	resultat.innerHTML=""
	screen.innerHTML=""

}
// Delete

del.addEventListener('click',deleteScreen)


function deleteScreen(){
	let val=screen.innerHTML;
	 let short =val.substr(0,val.length- 1)
	 screen.innerHTML=short


}
