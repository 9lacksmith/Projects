function submitAnswers(){
    var total = 5;
    var score = 0;

    // Get User Input

    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    // Validation
   
    for( i = 1; i <= total; i++){
        if(eval('q'+ i) === null || eval('q'+ i) === ""){
            alert("You missed Question "+ i);
            return false;
        }
    }

     // Set Correct Answers
    var answers = ["d", "c", "a", "c", "b"];
    
    // Check how many answers are correct
    for(i === 1; i < answers.length; i++){
        if(eval('q' + i) === answers[i-1]){
            score++;
        }
    }
    

    // Display results on the form 
    const results = document.querySelector("#results");
    results.innerHTML = "<h3>You scored " + score + " Out of " + total + "</h3>";
    alert("You Scored <span> " +score+ "</span> out of " +total);
  
    return false;
}


