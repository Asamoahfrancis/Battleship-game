
const thinLine = document.getElementById("thinLine");
const thinButton = document.getElementById("myBut");
const playerButtonn = document.getElementById("playerButtonn");
const playerSelection = document.getElementById("playerSelection");
const two = document.getElementById("two");
const one = document.getElementById("one");
const three = document.getElementById("three");
const middlebMain = document.getElementById("middle-bMain");
const playerName = document.getElementById("Playename");
const inputUsername = document.getElementById("username");


inputUsername.addEventListener("keyup", function (e) {

    playerName.textContent = inputUsername.value;
})

thinButton.addEventListener("click", function (e) {
    thinLine.style.display = "none";
});
playerButtonn.addEventListener("click", function (e) {
    playerSelection.style.display = "none";
});
let count = 0;
let justCount = 0;
two.scrollIntoView(true);
const allTarget = [];
    const secondTarget = [];



two.addEventListener("click", function (e) {
    count++;
    justCount++;
    console.log("count is ",count);
    let getTargeted = e.target;


const getBomb = document.getElementById("mysvg");
const getPlane = document.getElementById("animationPlane");
console.log(getPlane);
  getBomb.style.left = `${getTargeted.offsetLeft}px`;
  getPlane.style.marginLeft = `${getTargeted.offsetLeft}%`;



    if (count % 2 === 0) {
        one.scrollIntoView({ behavior: 'smooth' });
        allTarget.push(getTargeted);
        console.log(allTarget);

        getTargeted.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bullseye" color="lightblue" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
        <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
      </svg>`

    } else {

        three.scrollIntoView({ behavior: 'smooth' });
        secondTarget.push(getTargeted);
        console.log(secondTarget);
        getTargeted.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bullseye" color="red" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
        <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
      </svg>`
    }

    setTimeout(function () {
         if( (justCount  >= 3 )&& (justCount %2===1)){
                console.log("am 0ne")
                for (const iterator of secondTarget) {
                    iterator.innerHTML = "";
                }
                for (const iterator of allTarget) {
                    iterator.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bullseye" color="lightblue" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                    <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  </svg>`
                }
                
                middlebMain.style.boxShadow =`0px 0px 20px 10px lightblue`;
               
             }
            
         else{
            if((justCount  >= 2) && (justCount%2===0)){
                for (const iterator of allTarget) {
                    iterator.innerHTML = "";
    
                }
                console.log("odd",getTargeted);
                for (const iterator of secondTarget) {
                    iterator.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bullseye" color="red" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                    <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  </svg>`
                }
                middlebMain.style.boxShadow =`0px 0px 20px 10px red`;

            }else{
                getTargeted.innerHTML= "";
            }
         }
        
        two.scrollIntoView({ behavior: 'smooth' });

    }, 5000);

});


/*
const getOuter = document.getElementsByClassName("bi-bullseye")[0];
let target = 0;
window.setInterval(function(){
    console.log(target)
    getOuter.style.transform = `rotate(${++target}deg)`;
    if(target === 360)
    target = 0;
});
*/


/*
*/


