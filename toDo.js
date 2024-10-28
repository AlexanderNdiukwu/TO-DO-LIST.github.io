//code for the side bar
let SideBar = document.querySelector('.sidebar');
let body = document.getElementsByTagName('body')
let displaySideBar = document.querySelector('.span');
let hideSideBar = document.querySelector('.cancel');
let searchBar = document.querySelector('.btn')
displaySideBar.addEventListener('click',()=>{
SideBar.style.display = 'block';
body[0].style.overflow = 'hidden'})
hideSideBar.addEventListener('click',()=>{
SideBar.style.display = 'none' ;  
body[0].style.overflow = 'visible'});
let allContainer = document.querySelectorAll('.list')

let u = document.getElementsByClassName('section')

//this is the code for the time component 

function show(){
let startTime = new Date();
let Minute = startTime.getMinutes();
let Sec = startTime.getSeconds();
let displayedHour = document.querySelector('.hours');
let displayedMiunte = document.querySelector('.minutes');
let displayedSec = document.querySelector('.sec');
let Hour = startTime.getHours();
// console.log(Hour,'this is the code ')
// console.log(typeof Hour)
// if (Hour == 0){
//   console.log( 'it is one ')
//   let displayedHour = document.querySelector('.hours');
//   console.log( displayedHour.textContent,'this is the one i have to taste ')
//     displayedHour.textContent = '12';
//     console.log( displayedHour.textContent ,'this is the lower form of the code ')
    

//      displayedHour.textContent= 'what is going' ;

// }
if (Hour == 0 ){
    displayedHour.textContent = '12'
   console.log(displayedHour.textContent)

}
if (Hour > 12 ){
    let calHour = Hour - 12 ;


displayedHour.textContent = calHour ;


if (calHour.toString().length < 2 ){
    let addZero = `0${calHour}`
    displayedHour.textContent = addZero ;
}

}
else {
     displayedHour.textContent = '12';
     console.log( displayedHour.textContent,'i think this the mother fucker that was messing uip my codde ')
//  if (Hour === 0){
// let displayedHour = document.querySelector('.hours');

// displayedHour.textContent = '12' ;
// console.log (displayedHour.textContent,'thsi si the code ')
//  }
 // this code adds zero to a single digit if it is a simgle digit
 if (Hour.toString().length < 2 ){
    let addZero = `0${Hour}`
    displayedHour.textContent = addZero ;
}

}
//to concat two zeros if there is one zero in sec
if (Sec.toString().length < 2 ){
    let addZero = `0${Sec}`
    displayedSec.textContent = addZero ;
}
else{
    displayedSec.textContent = Sec ;
}
//to concat two zeros if there is one zero in miunte

if (Minute.toString().length < 2 ){
    let addZero = `0${Minute}`
    displayedMiunte.textContent = addZero ;
}
else{
    displayedMiunte.textContent = Minute ;

}



}  
setInterval(show, 1000 )



// this is the code for the date component 
function getCurrentFormattedDate() {
    let dateDis = document.querySelector('.date');
    const date = new Date();
    
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months starts from zero , so added  1 
    const year = date.getFullYear();
    
    // Format the date as MM/DD/YYYY
    const formattedDate = `${day}/${month}/${year}`;
    dateDis.textContent = formattedDate;
    
}


getCurrentFormattedDate(); 




// creating a list for sunday

let addTodo = document.querySelector('.inputDisplay');
let parentlist = document.querySelector('.parent');

   
addTodo.addEventListener('click' , () => {
    let y = document.getElementsByClassName("noText")
    
    y[0].style.display = 'none'
   
       //creates a list and append it to the parent tag  
        
    let createList = document.createElement('li');
    createList.className = 'list sunday'
        
    let createList2 = document.createElement('input');
    createList2.type = 'checkbox'
    let createList3 = document.createElement('p');
    createList3.setAttribute('contenteditable','true');
    createList3.className = 'tex1'
    
    let createListForCheckBox = document.createElement('span');
    createListForCheckBox.className = 'checkBox'
    // createListForCheckBox.textContent = 'checkBox'
    // let createListForDel = document.createElement('span');
    let createDel = document.createElement('img');
    createDel.className = 'deleteimg'
    createDel.src = '/image/delete icon.png'
    createListForCheckBox.appendChild(createList2)
    // createListForDel.appendChild(createDel)
    createList.append(createListForCheckBox)
    createList.append(createList3)
    createList.append(createDel)
    parentlist.appendChild(createList);
    //for the counter to count 
    //currently updating the counter
    let count = document.querySelector('.counter')
    let p = document.getElementsByClassName("list sunday")
 
   
    count.textContent = p.length
    // updated()

        
})

parentlist.addEventListener('click', function(e) {
    
    if (e.target.tagName === 'IMG'){
     e.target.parentElement.remove()
     //this is the code which updates the latest substraction of the list created
    let p = document.getElementsByClassName("list sunday")
    let count = document.querySelector('.counter')
    count.textContent = p.length
    if (p.length === 0 ){
        let y = document.getElementsByClassName("noText")
    
        y[0].style.display = 'block'
       
    }
    else {
        let y = document.getElementsByClassName("noText")
    
        y[0].style.display = 'none'
       
    }

    }
    if (e.target.tagName === 'INPUT'){
        e.target.parentElement.parentElement.classList.toggle('listCancel')
    }
    updated()
 
})



// creating a list on monday
//change the addtodo selector 
let addTodo1 = document.querySelector('.one');
let parentlist1 = document.querySelector('.parent1');



   
addTodo1.addEventListener('click' , () => {
    let q = document.getElementsByClassName("noText")
    // console.log(y[0])
    q[1].style.display = 'none'
   
       //creates a list and append it to the parent tag  
        //  change the li class to the day 
    let createList = document.createElement('li');
    createList.className = 'list monday'
        
    let createList2 = document.createElement('input');
    createList2.type = 'checkbox'
    let createList3 = document.createElement('p');
    createList3.setAttribute('contenteditable','true');
    createList3.className = 'tex1'
    
    let createListForCheckBox = document.createElement('span');
    createListForCheckBox.className = 'checkBox'
    let createListForDel = document.createElement('span');
    let createDel = document.createElement('img');
    createDel.className = 'deleteimg'
    createDel.src = '/image/delete icon.png'
    createListForCheckBox.appendChild(createList2)
    // createListForDel.appendChild(createDel)
    createList.append(createListForCheckBox)
    createList.append(createList3)
    createList.append(createDel)
    parentlist1.appendChild(createList);
    //for the counter to count 
    // it started at 0 so one has to be added to it 
    //change thecounter 
    let count = document.querySelector('.count1')
    let p = document.getElementsByClassName("list monday")
 

    count.textContent = p.length
    // saveMyData()   

})

parentlist1.addEventListener('click', function(e) {
    
    if (e.target.tagName === 'IMG'){
     e.target.parentElement.remove()
     //this is the code which updates the latest substraction of the list created
    let p = document.getElementsByClassName("list monday")
    let count = document.querySelector('.count1')
    count.textContent = p.length
    if (p.length === 0 ){
        let y = document.getElementsByClassName("noText")
    
        y[1].style.display = 'block'
       
    }
    else {
        let y = document.getElementsByClassName("noText")
    
        y[1].style.display = 'none'
       
    }

    }
    if (e.target.tagName === 'INPUT'){
        e.target.parentElement.parentElement.classList.toggle('listCancel')
    }
    // saveMyData()

})


// creating a list on tuesday
//cahnge the addtodo selector 
let addTodo2 = document.querySelector('.two');
let parentlist2 = document.querySelector('.parent2');



   
addTodo2.addEventListener('click' , () => {
    let q = document.getElementsByClassName("noText")
    // console.log(y[0])
    q[2].style.display = 'none'
   
       //creates a list and append it to the parent tag  
        //  change the li class to the day 
    let createList = document.createElement('li');
    createList.className = 'list tuesday'
        
    let createList2 = document.createElement('input');
    createList2.type = 'checkbox'
    let createList3 = document.createElement('p');
    createList3.setAttribute('contenteditable','true');
    createList3.className = 'tex1'
    
    let createListForCheckBox = document.createElement('span');
    createListForCheckBox.className = 'checkBox'
    let createListForDel = document.createElement('span');
    let createDel = document.createElement('img');
    createDel.className = 'deleteimg'
    createDel.src = '/image/delete icon.png'
    createListForCheckBox.appendChild(createList2)
    // createListForDel.appendChild(createDel)
    createList.append(createListForCheckBox)
    createList.append(createList3)
    createList.append(createDel)
    parentlist2.appendChild(createList);
    //for the counter to count 
    // it started at 0 so one has to be added to it 
    //change thecounter 
    let count = document.querySelector('.count2')
    let p = document.getElementsByClassName("list tuesday")
 

    count.textContent = p.length
    // saveMyData()
})

parentlist2.addEventListener('click', function(e) {
    
    if (e.target.tagName === 'IMG'){
     e.target.parentElement.remove()
     //this is the code which updates the latest substraction of the list created
    let p = document.getElementsByClassName("list tuesday")
    let count = document.querySelector('.count2')
    count.textContent = p.length
    if (p.length === 0 ){
        let y = document.getElementsByClassName("noText")
    
        y[2].style.display = 'block'
       
    }
    else {
        let y = document.getElementsByClassName("noText")
    
        y[2].style.display = 'none'
       
    }

    }
    if (e.target.tagName === 'INPUT'){
        e.target.parentElement.parentElement.classList.toggle('listCancel')
    }
    // saveMyData()
})


// creating a list on wednesday
//cahnge the addtodo selector 
let addTodo3 = document.querySelector('.three');
let parentlist3 = document.querySelector('.parent3');



   
addTodo3.addEventListener('click' , () => {
    let q = document.getElementsByClassName("noText")
    // console.log(y[0])
    q[3].style.display = 'none'
   
       //creates a list and append it to the parent tag  
        //  change the li class to the day 
    let createList = document.createElement('li');
    createList.className = 'list wednesday'
        
    let createList2 = document.createElement('input');
    createList2.type = 'checkbox'
    let createList3 = document.createElement('p');
    createList3.setAttribute('contenteditable','true');
    createList3.className = 'tex1'
    
    let createListForCheckBox = document.createElement('span');
    createListForCheckBox.className = 'checkBox'
    let createListForDel = document.createElement('span');
    let createDel = document.createElement('img');
    createDel.className = 'deleteimg'
    createDel.src = '/image/delete icon.png'
    createListForCheckBox.appendChild(createList2)
    // createListForDel.appendChild(createDel)
    createList.append(createListForCheckBox)
    createList.append(createList3)
    createList.append(createDel)
    parentlist3.appendChild(createList);
    //for the counter to count 
    // it started at 0 so one has to be added to it 
    //change thecounter 
    let count = document.querySelector('.count3')
    let p = document.getElementsByClassName("list wednesday")
 

    count.textContent = p.length
    // saveMyData()    
})

parentlist3.addEventListener('click', function(e) {
    
    if (e.target.tagName === 'IMG'){
     e.target.parentElement.remove()
     //this is the code which updates the latest substraction of the list created
    let p = document.getElementsByClassName("list wednesday")
    let count = document.querySelector('.count3')
    count.textContent = p.length
    if (p.length === 0 ){
        let y = document.getElementsByClassName("noText")
    
        y[3].style.display = 'block'
       
    }
    else {
        let y = document.getElementsByClassName("noText")
    
        y[3].style.display = 'none'
       
    }

    }
    if (e.target.tagName === 'INPUT'){
        e.target.parentElement.parentElement.classList.toggle('listCancel')
    }
    // saveMyData()

})



// creating a list on thursday
//cahnge the addtodo selector 
let addTodo4 = document.querySelector('.four');
let parentlist4 = document.querySelector('.parent4');



   
addTodo4.addEventListener('click' , () => {
    let q = document.getElementsByClassName("noText")
    // console.log(y[0])
    q[4].style.display = 'none'
   
       //creates a list and append it to the parent tag  
        //  change the li class to the day 
    let createList = document.createElement('li');
    createList.className = 'list thursday'
        
    let createList2 = document.createElement('input');
    createList2.type = 'checkbox'
    let createList3 = document.createElement('p');
    createList3.setAttribute('contenteditable','true');
    createList3.className = 'tex1'
    
    let createListForCheckBox = document.createElement('span');
    createListForCheckBox.className = 'checkBox'
    let createListForDel = document.createElement('span');
    let createDel = document.createElement('img');
    createDel.className = 'deleteimg'
    createDel.src = '/image/delete icon.png'
    createListForCheckBox.appendChild(createList2)
    // createListForDel.appendChild(createDel)
    createList.append(createListForCheckBox)
    createList.append(createList3)
    createList.append(createDel)
    parentlist4.appendChild(createList);
    //for the counter to count 
    // it started at 0 so one has to be added to it 
    //change thecounter 
    let count = document.querySelector('.count4')
    let p = document.getElementsByClassName("list thursday")
 

    count.textContent = p.length
    // saveMyData()
})

parentlist4.addEventListener('click', function(e) {
    
    if (e.target.tagName === 'IMG'){
     e.target.parentElement.remove()
     //this is the code which updates the latest substraction of the list created
    let p = document.getElementsByClassName("list thursday")
    let count = document.querySelector('.count4')
    count.textContent = p.length
    if (p.length === 0 ){
        let y = document.getElementsByClassName("noText")
    
        y[4].style.display = 'block'
       
    }
    else {
        let y = document.getElementsByClassName("noText")
    
        y[4].style.display = 'none'
       
    }

    }
    if (e.target.tagName === 'INPUT'){
        e.target.parentElement.parentElement.classList.toggle('listCancel')
    }
    // saveMyData()
})



// creating a list on friday
//cahnge the addtodo selector 
let addTodo5 = document.querySelector('.five');
let parentlist5 = document.querySelector('.parent5');



   
addTodo5.addEventListener('click' , () => {
    let q = document.getElementsByClassName("noText")
    // console.log(y[0])
    q[5].style.display = 'none'
   
       //creates a list and append it to the parent tag  
        //  change the li class to the day 
    let createList = document.createElement('li');
    createList.className = 'list friday'
        
    let createList2 = document.createElement('input');
    createList2.type = 'checkbox'
    let createList3 = document.createElement('p');
    createList3.setAttribute('contenteditable','true');
    createList3.className = 'tex1'
    
    let createListForCheckBox = document.createElement('span');
    createListForCheckBox.className = 'checkBox'
    let createListForDel = document.createElement('span');
    let createDel = document.createElement('img');
    createDel.className = 'deleteimg'
    createDel.src = '/image/delete icon.png'
    createListForCheckBox.appendChild(createList2)
    // createListForDel.appendChild(createDel)
    createList.append(createListForCheckBox)
    createList.append(createList3)
    createList.append(createDel)
    parentlist5.appendChild(createList);
    //for the counter to count 
    // it started at 0 so one has to be added to it 
    //change thecounter 
    let count = document.querySelector('.count5')
    let p = document.getElementsByClassName("list friday")
 

    count.textContent = p.length
    // saveMyData()
})

parentlist5.addEventListener('click', function(e) {
    
    if (e.target.tagName === 'IMG'){
     e.target.parentElement.remove()
     //this is the code which updates the latest substraction of the list created
    let p = document.getElementsByClassName("list friday")
    let count = document.querySelector('.count5')
    count.textContent = p.length
    if (p.length === 0 ){
        let y = document.getElementsByClassName("noText")
    
        y[5].style.display = 'block'
       
    }
    else {
        let y = document.getElementsByClassName("noText")
    
        y[5].style.display = 'none'
       
    }

    }
    if (e.target.tagName === 'INPUT'){
        e.target.parentElement.parentElement.classList.toggle('listCancel')
    }
    // saveMyData() 
})



// creating a list on saturday
//change the addtodo selector 
let addTodo6 = document.querySelector('.six');
let parentlist6 = document.querySelector('.parent6');



   
addTodo6.addEventListener('click' , () => {
    let q = document.getElementsByClassName("noText")
    // console.log(y[0])
    q[6].style.display = 'none'
   
       //creates a list and append it to the parent tag  
        //  change the li class to the day 
    let createList = document.createElement('li');
    createList.className = 'list saturday'
        
    let createList2 = document.createElement('input');
    createList2.type = 'checkbox'
    let createList3 = document.createElement('p');
    createList3.setAttribute('contenteditable','true');
    createList3.className = 'tex1'
    
    let createListForCheckBox = document.createElement('span');
    createListForCheckBox.className = 'checkBox'
    let createListForDel = document.createElement('span');
    let createDel = document.createElement('img');
    createDel.className = 'deleteimg'
    createDel.src = '/image/delete icon.png'
    createListForCheckBox.appendChild(createList2)
    // createListForDel.appendChild(createDel)
    createList.append(createListForCheckBox)
    createList.append(createList3)
    createList.append(createDel)
    parentlist6.appendChild(createList);
    //for the counter to count 
    // it started at 0 so one has to be added to it 
    //change thecounter 
    let count = document.querySelector('.count6')
    let p = document.getElementsByClassName("list saturday")
 

    count.textContent = p.length
    // saveMyData() 
})

parentlist6.addEventListener('click', function(e) {
    
    if (e.target.tagName === 'IMG'){
     e.target.parentElement.remove()
    //this is the code which updates the latest substraction of the list created
    let p = document.getElementsByClassName("list saturday")
    let count = document.querySelector('.count6')
    count.textContent = p.length
    if (p.length === 0 ){
        let y = document.getElementsByClassName("noText")
    
        y[6].style.display = 'block'
       
    }
    else {
        let y = document.getElementsByClassName("noText")
    
        y[6].style.display = 'none'
       
    }

    }
    if (e.target.tagName === 'INPUT'){
        e.target.parentElement.parentElement.classList.toggle('listCancel')
    }
  
})





// CODE FOR THE SEARCHBAR TO SEARCH FOR A WORD
let  searchbar = document.querySelector('.btn')

searchBar.addEventListener('click', ()=>{
    searchBtn()
})




// this is for the search btn to search things 
let hide = document.getElementsByClassName('lastMemory')

let undone = document.getElementsByClassName('undone')
let hidesmall = document.getElementsByClassName('small')

for (let i = 0 ; i < 5 ; i++){
    hide[i].style.display = 'none'
    hidesmall[0].style.display = 'none'
    hidesmall[1].style.display = 'none'
    hidesmall[2].style.display = 'none'
    undone[0].style.display = 'none'

}

let listOfSearches = [];
let father = document.getElementsByClassName('list')
let clickToHistory = document.getElementsByClassName('conSearchBarMemory')
let editPro = document.getElementsByClassName('changePro')
let namePro = document.getElementsByClassName('top')
let Prog = document.getElementsByClassName('progs')
// console.log(namePro[0].textContent,'try to work ')

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
// END OF CODE 

// THIS CODE RETRIVE TEXTCONTEXT FROM THE SEARCH HISTORY WHEN TAPPED TO REUSE IT AS A SEARCH.VALUE CONTENT 
clickToHistory[0].addEventListener('click',(e)=>{
    let search = document.querySelector('.input');
    if (e.target.tagName === 'P'){
        search.value = e.target.textContent
    }
})
// END OF CODE 

// THIS IS THE CODE TO REVERSE AFTER THE SEARCH CODE HAS HIGHLIGHTED IT .. TO HOW IT WAS BEFORE 
undone[0].addEventListener('click',()=>{
    let search = document.querySelector('.input');
    let loop = document.getElementsByClassName('text');
    let week1 = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']
    let week = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
   
    for (let y = 0 ; y <= week1.length-1;y++){
    loop[y].textContent = `${week1[y]}`
    loop[y].style.background = 'white'
    }
    for (let y = 0 ; y <= week.length-1;y++){
        let se = document.getElementsByClassName( `list ${week[y]}`)
        for (let i = 0 ;i < se.length ; i++){

          se[i].style.background = 'white'
          se[i].style.color = 'black'
         } }
             search.value = '';
             undone[0].style.display = 'none'
})
// END OF CODE 

// THIS SECTION SEARCHES FOR WORDS AND I MADE IT toUpperCase SO THAT IT WILL SEARCH IT IN THE SAME CONTEXT
function sear(search){
let week1 = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']
let week = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
let changeHeadText = document.getElementsByClassName('text')
const searchWord = search;
console.log(searchWord)



 for (let y = 0 ; y <= week.length-1;y++){
    let se = document.getElementsByClassName( `list ${week[y]}`)
    for (let i = 0 ;i < se.length ; i++){
        let contex = se[i].textContent.toUpperCase()
        count = 0 
        if (contex.includes(searchWord.toUpperCase())) {
            count += 1 
             changeHeadText[y].style.background = 'red'
    //  THIS COMMENTED WORKS THE SAME WAY BUT IT MAKES THE textContent SMALLER WHEN I WANTED IT IN CAPITAL
    // changeHeadText[y].textContent = `${week[y]} (${i+1})`
    changeHeadText[y].textContent = `${week1[y]} (${i+1})`
    se[i].style.background = 'black'
    se[i].style.color = 'white'
    undone[0].style.display = 'block'



}
}}}
// END OF MY CODE 

// THIS SECTION IS TO CLEAR THE SEARCH HISTORY 
hidesmall[1].addEventListener('click', ()=>{
    let search = document.querySelector('.input');
    listOfSearches = []
    console.log(listOfSearches)
    if (listOfSearches.length == 0 ){
        for (let i = 0 ; i < 5 ; i++){
            hide[i].style.display = 'none'
            hidesmall[0].style.display = 'none'
            hidesmall[1].style.display = 'none'
            hidesmall[2].style.display = 'none'
        }
        search.value = ''
    }
})
// END OF THE SECTION 

// THIS SECTION IS TO MAKE A HISTORY OF SEARCHES OF length(5) AND UPDATE THE RECENT ONE 
function unift(){
            listOfSearches.pop()   
}

function searchBtn(){
    let search = document.querySelector('.input').value
    let innerList = document.getElementsByClassName('lastMemory')
 
    if (listOfSearches.length != 5 && search != '' ) {
        hidesmall[0].style.display = 'block' 
        hidesmall[1].style.display = 'block'
        innerList[listOfSearches.length].style.display = 'block'
        listOfSearches.unshift(search)
        console.log(listOfSearches)
        for (let i =0 ; i < listOfSearches.length ; i++){
            innerList[i].textContent = listOfSearches[i]
        }

      
        if (listOfSearches.length > 3 ){
        hidesmall[2].style.display = 'block'
        }
    }
    if (listOfSearches.length == 5 && search != '' ){
        unift()

}

if (search != ''){
    sear(search)
}

}


// function testing(){
//     let text = document.getElementsByTagName('li')
//     let saved = document.getElementsByTagName('p')


//     // console.log(u[0].textContent)
//     // console.log(i[2].textContent)
//     // for (let q = 0 ; q < text.length; q++){
//     //     console.log(text[q].textContent,'this is to get the li')
//     //     localStorage.setItem('saved',)
//     // }
//     // for (let q = 0 ; q < saved.length; q++){
//     //     console.log(saved[q].textContent,'this is to get the p')
//     // }
  
// }




// Array of 10 sentences
// const sentences = [
//     "The quick brown fox jumps over the lazy dog",
//     "JavaScript is a versatile programming language",
//     "Learning to code is very rewarding",
//     "The sky is blue and the grass is green",
//     "The cat sleeps all day long",
//     "I enjoy hiking in the mountains",
//     "Coding requires patience and practice",
//     "He is reading a book about algorithms",
//     "She loves solving puzzles in her free time",
//     "It is important to stay hydrated"
// ];

// // Word to search for
// const searchWord = "satz";

// // Check if the word is in each sentence
// sentences.forEach((sentence, index) => {
//     // console.log (index)
//     if (sentence.includes(searchWord)) {
//         console.log(`Sentence ${index + 1}: "${sentence}" contains the word "${searchWord}".`);
//     } else {
//         console.log(`Sentence ${index + 1}: "${sentence}" does not contain the word "${searchWord}".`);
//     }
// });

// const searchWord = "is";

// // Get all <p> elements
// const paragraphs = document.querySelectorAll('p');

// // Loop through each <p> and check if it contains the search word
// sentences.forEach((paragraph, index) => {
//     if (paragraph.textContent.includes(searchWord)) {
//         console.log(`Found in <p> tag ${index + 1}: "${paragraph.textContent}"`);
//         paragraph.style.color = "red";  // You can highlight the matching <p> if needed
//     }
// });




// let par = document.getElementsByClassName('conSearchBarMemory')
// par[0].addEventListener('click', function(e) {
//     let search = document.querySelector('.input').value
    
//     if (e.target.tagName === 'P'){
//        search.textContent = p
//         //  e.target.parentElement.remove()
//         console.log('this shit is working ')
    
//     }
// }
// )





        
// let target= document.getElementsByClassName('searchBarLMemory')
// let target5= document.getElementsByClassName('conSearchBarMemory')
// let target1 = document.getElementsByClassName('lastMemoryrow')
// t=0
// function searchBtn(){
// let search = document.querySelector('.input').value
// let p = document.getElementsByClassName('lastMemory')
// // let p1 = document.getElementsByClassName('lastMemory')

       
//             if (p.length <= 2 && search != ''){
            
//             console.log(p.length)
       
//             let create = document.createElement('p')
//             let createImg = document.createElement('img')
//             let createspan = document.createElement('span')
//             createspan.setAttribute('class','spanContent')
//             createImg.src = "/image/cancel.webp"
//             createImg.setAttribute('class','imgcancel')
//             create.setAttribute('class','lastMemory')

//             create.textContent = search
//             create.append(createspan)
//             create.append(createImg)
//             target[0].appendChild(create)

//             // console.log(p.length)
      
//             }
        
    
//             if (t < 2 && p.length > 2 && search != '' ){
//                 console.log(t,'and this the also the inner part of the code ')
//                 console.log(p.length,'this is the inner most apart of the code ')
           
//                 t += 1 

//         let create = document.createElement('p')
//         let createImg = document.createElement('img')
//         let createspan = document.createElement('span')
        
//         createspan.setAttribute('class','spanContent')
//         createImg.src = "/image/cancel.webp"
//         createImg.setAttribute('class','imgcancel')
//         create.setAttribute('class','lastMemory')
//         create.textContent = search
        
//              create.append(createspan)
        
//             create.append(createImg)
//             target1[0].appendChild(create)
        
//             }
         
         
    
  
    
// }
// target5[0].addEventListener('click', function(e) {
            
//     if (e.target.tagName === 'IMG'){
//          e.target.parentElement.remove()
//         //  e.target.parentElement.remove()
//         console.log('this shit is working ')
    
//     }
// }
// )


