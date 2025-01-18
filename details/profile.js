let editPro = document.getElementsByClassName('changePro')
let namePro = document.getElementsByClassName('top')
let Prog = document.getElementsByClassName('progs')






// THIS SECTION IS TO SAVE AND EDIT THE PROFILE background
let numClick = 0 
editPro[0].addEventListener('click',()=>{
    // console.log(Prog.textContent)
    numClick = numClick+1
   let i = editPro[0]


// THIS LOGIC WAS SIMPLE , I HAD TO MAKE SURE THAT WHEN YOU CLICK EDIT IT WILL BE ONCE AND ANYTIME YOU CLICK IT AGAIN IT IS TO SAVE IT 
   if (i.textContent == 'Edit' && numClick%2 != 0  ){
 
       for(let u = 0 ; u < namePro.length ; u++ ){
           namePro[u].setAttribute('contenteditable','true')
           namePro[u].style.background = 'rgba(255, 255, 255, 0.4)'
           namePro[u].style.color = 'black'
       }
       i.textContent = 'save'
       i.style.backgroundColor = 'red'
       Prog[0].textContent = 'Editing in progress.......  NAME SPACE MUST BE FILLED '
       Prog[0].style.color = 'red'
       Prog[0].style.display = 'block'

   }
   editPro[0].addEventListener('click',()=>{
      let i = editPro[0] 
   if (i.textContent == 'save' && numClick%2 == 0 && namePro[0].textContent != ''  ){
    for(let u = 0 ; u < namePro.length ; u++ ){
        namePro[u].setAttribute('contenteditable','false')
         namePro[u].style.background = 'rgba(255, 255, 255, 0.1)'
         namePro[u].style.color = 'white'
        }
        i.textContent = 'Edit'
       i.style.backgroundColor = 'white'

       Prog[0].style.display = 'NONE'

// THIS IS TO MAKE THE SAVED NAME , TO BE SAVED IN A CAPITAL LETTER 
        let bigi = namePro[0].textContent
        namePro[0].textContent = bigi.toUpperCase()
        
   }
   
   })
})