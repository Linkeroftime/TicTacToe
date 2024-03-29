var box = document.querySelectorAll(".square")
var output = []
var enabled = false
var resetButton = document.querySelector("button")


if(output.length === 9){
    document.querySelector("h1").innerHTML("Game Over")
}


resetButton.addEventListener("click", function(){
    window.location.reload(true)
})




function xWins(){
    if (enabled===false){
    if(document.querySelectorAll(".square")[0].innerHTML === "X" && document.querySelectorAll(".square")[1].innerHTML === "X" && document.querySelectorAll(".square")[2].innerHTML === "X"){
    document.querySelector("h1").innerHTML = "X Wins!"
    enabled=true}
    if(document.querySelectorAll(".square")[3].innerHTML === "X" && document.querySelectorAll(".square")[4].innerHTML === "X" && document.querySelectorAll(".square")[5].innerHTML === "X"){
        document.querySelector("h1").innerHTML = "X Wins!"
        enabled=true}
        if(document.querySelectorAll(".square")[6].innerHTML === "X" && document.querySelectorAll(".square")[7].innerHTML === "X" && document.querySelectorAll(".square")[8].innerHTML === "X"){
            document.querySelector("h1").innerHTML = "X Wins!"
            enabled=true}
            
            if(document.querySelectorAll(".square")[0].innerHTML === "X" && document.querySelectorAll(".square")[4].innerHTML === "X" && document.querySelectorAll(".square")[8].innerHTML === "X"){
                document.querySelector("h1").innerHTML = "X Wins!"
                enabled=true}
                
                if(document.querySelectorAll(".square")[2].innerHTML === "X" && document.querySelectorAll(".square")[4].innerHTML === "X" && document.querySelectorAll(".square")[6].innerHTML === "X"){
                    document.querySelector("h1").innerHTML = "X Wins!"
                    enabled=true}
                    
                    if(document.querySelectorAll(".square")[2].innerHTML === "X" && document.querySelectorAll(".square")[5].innerHTML === "X" && document.querySelectorAll(".square")[8].innerHTML === "X"){
                        document.querySelector("h1").innerHTML = "X Wins!"
                        enabled=true}
                        
                        if(document.querySelectorAll(".square")[0].innerHTML === "X" && document.querySelectorAll(".square")[3].innerHTML === "X" && document.querySelectorAll(".square")[6].innerHTML === "X"){
                            document.querySelector("h1").innerHTML = "X Wins!"
                            enabled=true}
                            
                            if(document.querySelectorAll(".square")[1].innerHTML === "X" && document.querySelectorAll(".square")[4].innerHTML === "X" && document.querySelectorAll(".square")[7].innerHTML === "X"){
                                document.querySelector("h1").innerHTML = "X Wins!"
                                enabled=true}
                            } else {
                                return
                            }
                        }
function oWins(){
    if(enabled===false){
                                    
                                    if(document.querySelectorAll(".square")[0].innerHTML === "O" && document.querySelectorAll(".square")[1].innerHTML === "O" && document.querySelectorAll(".square")[2].innerHTML === "O"){
                                        document.querySelector("h1").innerHTML = "O Wins!"
                                        enabled=true}
                                        
                                        if(document.querySelectorAll(".square")[3].innerHTML === "O" && document.querySelectorAll(".square")[4].innerHTML === "O" && document.querySelectorAll(".square")[5].innerHTML === "O"){
                                            document.querySelector("h1").innerHTML = "O Wins!"
                                            enabled=true}
                                            
                                            if(document.querySelectorAll(".square")[6].innerHTML === "O" && document.querySelectorAll(".square")[7].innerHTML === "O" && document.querySelectorAll(".square")[8].innerHTML === "O"){
                                                document.querySelector("h1").innerHTML = "O Wins!"
                                                enabled=true}
                                                
                                                if(document.querySelectorAll(".square")[0].innerHTML === "O" && document.querySelectorAll(".square")[4].innerHTML === "O" && document.querySelectorAll(".square")[8].innerHTML === "O"){
                                                    document.querySelector("h1").innerHTML = "O Wins!"
                                                    enabled=true}
                                                    
                                                    if(document.querySelectorAll(".square")[2].innerHTML === "O" && document.querySelectorAll(".square")[4].innerHTML === "O" && document.querySelectorAll(".square")[6].innerHTML === "O"){
                                                        document.querySelector("h1").innerHTML = "O Wins!"
                                                        enabled=true}
                                                        
                                                        if(document.querySelectorAll(".square")[2].innerHTML === "O" && document.querySelectorAll(".square")[5].innerHTML === "O" && document.querySelectorAll(".square")[8].innerHTML === "O"){
                                                            document.querySelector("h1").innerHTML = "O Wins!"
                                                            enabled=true}
                                                            
                                                            if(document.querySelectorAll(".square")[0].innerHTML === "O" && document.querySelectorAll(".square")[3].innerHTML === "O" && document.querySelectorAll(".square")[6].innerHTML === "O"){
                                                                document.querySelector("h1").innerHTML = "O Wins!"
                                                                enabled=true}
                                                                
                                                                if(document.querySelectorAll(".square")[1].innerHTML === "O" && document.querySelectorAll(".square")[4].innerHTML === "O" && document.querySelectorAll(".square")[7].innerHTML === "O"){
                                                                    document.querySelector("h1").innerHTML = "O Wins!"
                                                                    enabled=true}
                                                                } else {
                                                                    return
                                                                }
                                                            }
function draw(){
    if (enabled === false){
    if(output.length === 9){
        document.querySelector("h1").innerHTML = "Draw!"
    } else {
        return
    }
}
}



for(var i=0; i<box.length; i++){
    document.querySelectorAll(".square")[i].addEventListener("click", function(){
        if(this.innerHTML === ""&& output.length%2 === 0){
            this.innerHTML = "X"
            output.push("x");
        }else if(this.innerHTML === ""&& output.length%2 !== 0){
            this.innerHTML = "O";
            output.push("o");
        }
        
        oWins()
        xWins()
        draw()
    } 
    )
    }

