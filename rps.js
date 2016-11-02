
function compChoice(){
    computerChoice = Math.random();

    if (computerChoice < 0.34) {
    	computerChoice = "rock";
    } 
    else if(computerChoice <= 0.67) {
    	computerChoice = "paper";
    } 
    else {
    	computerChoice = "scissors";
    } 
    return computerChoice;
    
};

function compare (user,comp){
    if(user===comp){
        return "The result is a tie!"; 
    } 
    if((user==="rock") && (comp==="scissors")){
        return user+ " wins!";
    }
    if((user==="scissors") && (comp==="rock")){
        return comp+ " wins!";
    }
      if((user==="rock") && (comp==="paper")){
        return comp+ " wins!";
    }
    if((user==="paper") && (comp==="rock")){
        return user+ " wins!";
    }
      if((user==="paper") && (comp==="scissors")){
        return comp+ " wins!";
    }
    if((user==="scissors") && (comp==="paper")){
        return user+ " wins!";
    }
};


$(document).ready(function(){
	
	//if rock is chosen
	$("#rock").click(function(){
		var comp = compChoice();
        alert(compare("rock",comp));
    });

    //if paper is chosen
    $("#paper").click(function(){
        var comp = compChoice();
        alert(compare("paper",comp));
    });

    //if scissors is chosen
    $("#scissors").click(function(){
        var comp = compChoice();
        alert(compare("scissors",comp));
    });
});