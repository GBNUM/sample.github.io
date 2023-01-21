let container = document.querySelector('.container')

let isGameOver= false
let intro = document.querySelector('.intro')


 let scoreCounter = 0

let startButton = document.querySelector('.startButton')
startButton.addEventListener('click', play)

startButton.addEventListener('click', playMusic)
function playMusic(){
    intro.play()
}

//play the game
function play(){
if (isGameOver){
startAgain()
return
}

let instruction = document.querySelector('.instruction')
instruction.style.display = 'none'
startButton.style.display = 'none'

intro.play()

let birdBottom = 400
let birdLeft = 60

function generatePipe(){
if(isGameOver){
 play()
    return 
}
let pipeBot = document.createElement('div')
let pipeTop = document.createElement('div')
pipeBot.classList.add('pipeBot')
pipeTop.classList.add('pipeTop')
let botHeight = Math.random()*300+100
let topHeight = 500 - botHeight 
//set pipe height and left property
pipeBot.style.height = botHeight+ 'px';
pipeBot.style.left = '100px'
pipeTop.style.height = topHeight + 'px'
pipeTop.style.left = '100ppx'

//set pie images
let pipeImageTop = document.createElement('img')
pipeImageTop.src = 'pipe.png'
pipeImageTop.style.cssText = 'height: inherit; width: inherit; '

let pipeImageBot = document.createElement('img')
pipeImageBot.src = 'pipe.png'
pipeImageBot.style.cssText = 'height: inherit; width: inherit'

//flex pipes or set inside the body
document.body.appendChild(pipeBot)
pipeBot.append(pipeImageBot)
document.body.appendChild(pipeTop)
pipeTop.append(pipeImageTop)

pipeBot.addEventListener('click', ()=>{
    jump()
})
pipeTop.addEventListener('click', ()=>{
    jump()
})
 
//.0001 interval in calling movePipe function
let pipeLeft = 400
 
 //move pipe to the left
function movePipe(){
let top = pipeTop.getBoundingClientRect()
let bot = pipeBot.getBoundingClientRect()
let bird2 = bird.getBoundingClientRect()
if(isGameOver){
    return 
}
    pipeLeft -= 1.5
    pipeTop.style.left = pipeLeft + 'px'
    pipeBot.style.left = pipeLeft + 'px'

//remove pipes on left=0    

 
        let scoreText = document.querySelector('.score')
        scoreText.innerText = 'Score: ' + scoreCounter
      if (Math.floor(pipeLeft) == 35){
      scoreCounter++
          
      }
  
      if (Math.floor(pipeLeft) == -50){
        pipeBot.remove()
        pipeTop.remove()
    }
      
    

    



     
requestAnimationFrame(movePipe)
 
}//movePipeClosing
requestAnimationFrame(movePipe)








}//generatePipeClosing

//2.6 seconds before generating new pipes 
let generateTimer = setInterval(generatePipe, 2500)

//get bird
let bird = document.querySelector('.bird')
bird.src = 'gb.png'


const gravity = 2
bird.style.left = birdLeft + 'px'
bird.style.bottom = '0'

//apply bird gravity 
 function birdGravity(){
 if(isGameOver){
     return
 }
     birdBottom -= gravity
     if(birdBottom <=0 ){
         bird.style.bottom = '0'   
     }
     else{
     bird.style.bottom = birdBottom + 'px'    
     }
 }
 
 //call birdGravity every second
  setInterval(birdGravity, 10)


//event listner that will trigger jump onclick
container.addEventListener('click', ()=>{
    requestAnimationFrame(jump)
})

let counter = 0
//jump of bird 
function jump(){
if(isGameOver){
    return 
}
function jumpDetail(){
if (birdBottom<600){
    birdBottom += 5
    bird.style.bottom = birdBottom + 'px'
    counter++
    if(counter==15){
        clearInterval(jumpTimer)
        counter = 0
          
    }
    
    }
    

  else{
      bird.style.bottom = '600px'
  }
  
}
let jumpTimer =  setInterval(jumpDetail, 10)
}

}//playClosing


function startAgain(){
    startButton.style.display = 'flex'
    isGameOver = false
}


























