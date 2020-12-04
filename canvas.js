window.addEventListener('load', () => { 
    //console.log("Hello World"); 
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d"); 

    //Resizing
    canvas.height = window.innerHeight; 
    canvas.width = window.innerWidth;

    //variables and functions
    let drawing = false; 

    //When  mouse is clicked, drawing becomes true allowing user to draw
    function startPosition(e){
        drawing = true; 
        draw(e);
    }

    //When  mouse is not clicked, drawing becomes false stopping the drawing
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
        ctx.beginPath(); 
        ctx.moveTo(e.clientX, e.clientY);
    }

    //event listeners
    canvas.addEventListener("mousedown", startPosition); 
    canvas.addEventListener("mouseup", finishedPosition); 
    canvas.addEventListener("mousemove", draw); 
}); 


