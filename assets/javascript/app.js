//starts countdown at 60 seconds
var timerCount = 60;

//counts correct, incorrect, and unanswered questions
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;


//Quiz functions
$(document).ready(function(){

	//Start page
	$("#quiz-questions").hide();  //hides questions and results divs from user on start page
	$("#quiz-results").hide();


	//Questions page
	$("#start-button").on("click", function(){
		$("#quiz-start").hide();  //hides start div from user after start button is clicked
		$("#quiz-questions").show();  //shows questions div to user after start button is clicked
			startCountdown();  //calls timer function
		return;
});

	//Fix needed: reset function
// 	$("#restart-button").on("click", function(){
// 		$("#quiz-results").hide();  //hides results div from user after restart button is clicked
// 		$("#quiz-start").show();  //shows start div to user after restart button is clicked
// 			reset();
// });


	//Timer
	function startCountdown(){  //starts the countdown
		setInterval(countdown, 1000);  //sets countdown with 1-second increment
	}


	function countdown(){
		timerCount--;  //counts down from 60 seconds
		$("#timer-countdown").html(timerCount + " Seconds");  //displays timer in the HTML

		$("#done-button").on("click", function(){  //if user clicks done before time is up, stop the countdown and run the timeUp function
			//Fix needed: setTimeout and clearInterval
			timerCount = 0;  //workaround
		return;
	});

		if(timerCount === -1){  //when timer reaches 0
			timeUp();  //calls function that checks answers
			$("#quiz-questions").hide();  //hides questions div from user
		}
	}


	function timeUp(){  //when timer is done, checks user answers in radio buttons
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
		var Q10 = $('input:radio[name="q10"]:checked').val();

		//determines user answers to each question
		if(Q1 === undefined){
			unansweredCount++;
		}
		else if(Q1 === "Maewyn Succat"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q2 === undefined){
			unansweredCount++;
		}
		else if(Q2 === "Great Britain"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q3 === undefined){
			unansweredCount++;
		}
		else if(Q3 === "True"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q4 === undefined){
			unansweredCount++;
		}
		else if(Q4 === "Harp Music"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q5 === undefined){
			unansweredCount++;
		}
		else if(Q5 === "True"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q6 === undefined){
			unansweredCount++;
		}
		else if(Q6 === "10000"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q7 === undefined){
			unansweredCount++;
		}
		else if(Q7 === "Flute"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q8 === undefined){
			unansweredCount++;
		}
		else if(Q8 === "Red"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q9 === undefined){
			unansweredCount++;
		}
		else if(Q9 === "Boston"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q10 === undefined){
			unansweredCount++;
		}
		else if(Q10 === "Day Died"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		//Results page
		$("#quiz-results").show();  //shows results div to user

		//displays number of answers correct, incorrect, or unanswered
		$("#answers-correct").html(correctCount);
		$("#answers-wrong").html(wrongCount);
		$("#unanswered").html(unansweredCount);
	}
});
