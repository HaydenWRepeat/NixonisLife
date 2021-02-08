function nixonButton(){
    numNixonVotes.innerText = Number(numNixonVotes.innerText) + 1;
}
nixonVote.addEventListener("click", nixonButton)

function mcGovernButton(){
    numNixonVotes.innerText = Number(numNixonVotes.innerText) + 5;
    violatedLaw.play();
    popUp();
}
mcGovernVote.addEventListener("click", mcGovernButton)

const violatedLaw = new Audio("stop.mp3")

//Cursor
let cursor = document.createElement("div")

cursor.classList.add("cursor")

document.body.appendChild(cursor)

window.addEventListener("mousemove", function(event){
    cursor.style.top = event.clientY + "px";
    cursor.style.left = event.clientX + "px";
})

function popUp(){
    for(let i = 0; i < 3; i++){
        let newelem = document.createElement("img");
        newelem.src = "nixon.jpg";
        newelem.style.position = 'absolute';
        newelem.style.top = Math.random()*500 + 100;
        newelem.style.left = Math.random()*500 + 100;
        newelem.style.width = "100px"
        newelem.style.height = "100px"
        body.appendChild(newelem)
    }
}

mcGovernButton.add






//