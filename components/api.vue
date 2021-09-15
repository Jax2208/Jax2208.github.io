<template>
<head>
<link rel="stylesheet" type="text/css" href="style.css">
</head>
  <div class='justify-content-center text-center text-white'>
    <h2>True/false Question</h2>
    <p><button class="btn btn-primary" @click="currentQuestion()">Get a new question</button></p>
    <p v-html = "uiQuestion"></p>
    <p>
    <button @click = "answerTrue()"class="btn btn-success">True</button>
    <button @click = "answerFalse()"class="btn btn-danger">False</button>
    </p>
    <h2>Result</h2>
    <p>{{ uiReturn }}</p>
    <strong>Correct Answers: </strong>{{ correctCount }}<br/>
    <strong>Incorrect Answers: </strong>{{ incorrectCount }}<br/>
  </div>
</template>

<script>
  export default {

    setup() {
      var uiQuestion = Vue.ref('');
      var uiAnswer = Vue.ref('');
      var correctCount = Vue.ref(0);
      var incorrectCount = Vue.ref(0);
      var uiReturn = Vue.ref('');

       var currentQuestion = async function() {
            var response = await fetchURL("https://opentdb.com/api.php?amount=1&type=boolean");
            var question = response.results[0].question; 
            var answer = response.results[0].correct_answer;
            console.log("Question: " + question);
            console.log("Answer: " + answer);
            uiQuestion.value = question;
            uiAnswer.value = answer;
        }
        var answerFalse = function() {
          if(uiAnswer.value == 'False'){
            currentQuestion()
            console.log('False')
            correctCount.value += 1;
            uiReturn.value = 'Correct!';
          } else{
            console.log('True')
            incorrectCount.value += 1;
            uiReturn.value = 'Incorrect!';
          }
        }
        var answerTrue = function() {
          if(uiAnswer.value == 'True'){
            currentQuestion()
            console.log('Correct!')
            correctCount.value += 1;
            uiReturn.value = 'Correct!';
          } else{
            console.log('Incorrect!')
            incorrectCount.value += 1;
            uiReturn.value = 'Incorrect!';
          }
        }
      return {
        uiQuestion, uiAnswer, correctCount, incorrectCount, uiReturn,
        currentQuestion, answerTrue, answerFalse, 
      }
    }
  }
</script>