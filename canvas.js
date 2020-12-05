window.addEventListener('load', () => { 
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d"); 

    const blackButton = document.querySelector(".black");
    const redButton = document.querySelector(".red");
    const blueButton = document.querySelector(".blue");
    const yellowButton = document.querySelector(".yellow");
    const greenButton = document.querySelector(".green");
    const clearButton = document.querySelector(".clear");

    //Resizing
    canvas.height = window.innerHeight; 
    canvas.width = window.innerWidth;

    //variables and functions
    let drawing = false; 
    let strokeColour = "black"; 

    //When mouse is clicked, drawing becomes true allowing user to draw
    function startPosition(e){
        drawing = true; 
        draw(e);
    }

    //When mouse is not clicked, drawing becomes false stopping the drawing
    function finishedPosition() { 
        drawing = false; 
        ctx.beginPath();
    }
    
    function draw (e) { 
        if(!drawing) { 
            return;  
        }

        ctx.lineWidth = 10; 
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX, e.clientY); 
        ctx.stroke();
        ctx.strokeStyle = strokeColour;
        ctx.beginPath(); 
        ctx.moveTo(e.clientX, e.clientY);
    }

    function changeToBlack () { 
        strokeColour = "black";
    }

    function changeToRed () { 
        strokeColour = "red";
    }

    function changeToBlue () { 
        strokeColour = "blue";
    }

    function changeToYellow () { 
        strokeColour = "yellow";
    }

    function changeToGreen () { 
        strokeColour = "green";
    }

    //clears canvas when the erase button is pressed
    function eraseCanvas () { 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    //event listeners
    //Drawing event listeners
    canvas.addEventListener("mousedown", startPosition); 
    canvas.addEventListener("mouseup", finishedPosition); 
    canvas.addEventListener("mousemove", draw); 

    blackButton.addEventListener("click", changeToBlack);
    redButton.addEventListener("click", changeToRed);
    blueButton.addEventListener("click", changeToBlue);
    yellowButton.addEventListener("click", changeToYellow);
    greenButton.addEventListener("click", changeToGreen);
    clearButton.addEventListener("click", eraseCanvas);
}); 
