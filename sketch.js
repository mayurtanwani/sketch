var container = document.getElementById("container");
var rows= document.querySelector("input");
var create = document.querySelector(".create");
var black = document.querySelector(".black");
var random = document.querySelector(".random");
var colorcode =0;
var resetButton = document.querySelector(".reset");

black.classList.add("selected");
black.style.color = "white";


black.addEventListener("click", function(){
        colorcode = 0;
        black.classList.add("selected");
        random.classList.remove("selected");
        black.style.color = "white";
        random.style.backgroundColor = "white";


 
})


random.addEventListener("click", function(){

        colorcode = 1;
        black.classList.remove("selected");
        random.style.backgroundColor = color();
        black.style.color = "black";

})



for(var j=0;j<10;j++){
        
        var newRow = document.createElement("div");
        container.appendChild(newRow);
        newRow.classList.add("row");
    
            for(var i=0; i<10; i++){
    
                    var newElement = document.createElement("div");
                    newRow.appendChild(newElement);
                    newElement.classList.add("pixel");
            }
        
    }
    
    container.style.gridTemplateColumns = "repeat(" + 10 + ", 1fr)";

    var square = document.querySelectorAll(".pixel");

    for( var i=0; i<100; i++){
    
    square[i].addEventListener("mouseover", function(){
    
        if( colorcode == 1 ){

            this.style.backgroundColor = color();
            this.classList.remove("clicked");    


        }else{

            this.classList.add("clicked");    
        }


    })
    
    }    
create.addEventListener("click", function(){

        reset();
        var rowNumber = rows.value;
        for(var j=0;j<rows.value;j++){
        
                var newRow = document.createElement("div");
                container.appendChild(newRow);
                newRow.classList.add("row");
            
                    for(var i=0; i<rows.value; i++){
            
                            var newElement = document.createElement("div");
                            newRow.appendChild(newElement);
                            newElement.classList.add("pixel");
                    }
                
            }
            
            container.style.gridTemplateColumns = "repeat(" + rows.value + ", 1fr)";

            var square = document.querySelectorAll(".pixel");

            for( var i=0; i<rows.value*rows.value; i++){
            
            square[i].addEventListener("mouseover", function(){
            
                if( colorcode == 1 ){

                    this.style.backgroundColor = color();
                    this.classList.remove("clicked");    


                }else{

                    this.classList.add("clicked");    
                }

        
            })
            
            }    
        
})


resetButton.addEventListener("click", function(){
    rows.value = "10";

    reset();

    for(var j=0;j<10;j++){
        
        var newRow = document.createElement("div");
        container.appendChild(newRow);
        newRow.classList.add("row");
    
            for(var i=0; i<10; i++){
    
                    var newElement = document.createElement("div");
                    newRow.appendChild(newElement);
                    newElement.classList.add("pixel");
            }
        
    }
    
    container.style.gridTemplateColumns = "repeat(" + 10 + ", 1fr)";

    var square = document.querySelectorAll(".pixel");

    for( var i=0; i<100; i++){
    
    square[i].addEventListener("mouseover", function(){
    
        if( colorcode == 1 ){

            this.style.backgroundColor = color();
            this.classList.remove("clicked");    


        }else{

            this.classList.add("clicked");    
        }


    })
    
    }    
create.addEventListener("click", function(){
        reset();

        var rowNumber = rows.value;
        for(var j=0;j<rows.value;j++){
        
                var newRow = document.createElement("div");
                container.appendChild(newRow);
                newRow.classList.add("row");
            
                    for(var i=0; i<rows.value; i++){
            
                            var newElement = document.createElement("div");
                            newRow.appendChild(newElement);
                            newElement.classList.add("pixel");
                    }
                
            }
            
            container.style.gridTemplateColumns = "repeat(" + rows.value + ", 1fr)";

            var square = document.querySelectorAll(".pixel");

            for( var i=0; i<rows.value*rows.value; i++){
            
            square[i].addEventListener("mouseover", function(){
            
                if( colorcode == 1 ){

                    this.style.backgroundColor = color();
                    this.classList.remove("clicked");    


                }else{

                    this.classList.add("clicked");    
                }

        
            })
            
            }    
        
})

})

function reset(){
    var myNode = document.getElementById("container");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }  


}

function color(){

var red = Math.floor(Math.random()*256);
var green = Math.floor(Math.random()*256);
var blue = Math.floor(Math.random()*256);

var newcolor = "rgb(" + red + "," + green + "," + blue + ")";

return newcolor;

}