//declare the counter items

let counter=document.querySelector('#counter')
let counterMinus=document.querySelector('#minus')
let counterPlus=document.querySelector('#plus')
let counterPause=document.querySelector('#pause')
let counterLiker=document.querySelector('#heart')
let countreset=document.querySelector('#start')


const myCounter= setInterval((countTimer),1000)

let count=0

function countTimer(){
    count++
    updateDisplay()  
   
}


//code to increment the counter when button is clicked
counterPlus.addEventListener("click",()=>
{
    count++
    updateDisplay()
})
//code to decrement the counter when button is clicked
counterMinus.addEventListener("click",()=>
{
    count--
    updateDisplay()
    
})
countreset.addEventListener("click",()=>{
    // startTimer();
    setInterval(countTimer, 1000);
})

//code for the pause button
counterPause.addEventListener("click",()=>{
    //disable all the buttons
    document.getElementById("minus").disabled = true;
    document.getElementById("plus").disabled = true;
    document.getElementById("heart").disabled = true;
    
    //pause the counter   &&    change the text of the button to reset after click
    clearInterval(myCounter)
    counterPause.textContent="reset"
    
}
)

///function to update the display
function updateDisplay(){

    counter.innerHTML=count
}
///to update Like
counterLiker.addEventListener("click", (e)=>{
    let p=document.createElement('h4')
   console.log( e.target.counter.value)
    console.log(p)

})

// let myVar = setInterval(myTimer, 1000);

