
document.getElementById("quiz").addEventListener("click", getQuick);
var place = 0, input, state, question, option, options, optionA, optionB, optionC, win = 0;
var questions = [
  {
      question: "How fun is JavaScript?",
      a: "Meh",
      b: "Dude, it's like the MOST FUN",
      c: "Hate it",
      answer: "B"
    },
  {
      question: "Was the last question objective, or subjective?",
      a: "Objective",
      b: "Subjective, but also factual",
      c: "28",
      answer: "B"
    },
  {
      question: "In JavaScript: is Null the same as 0?",
      a: "Yes",
      b: "No",
      c: "42",
      answer: "B"
    },
  {
      question: "Isn't it weird how every answer so far has been option 2?",
      a: "Two",
      b: "Yes, how did you know?",
      c: "2",
      answer: "C"
    },
  {
      question: "Oof, sorry buddy... The last question was a trick question. How do you feel about that?",
      a: "Excuse me?",
      b: "Doesn't really matter, you're a dumb user who thinks he's funny wasting precius exam time, but I am a teacher who could fail you at drop of a dime and it would bearly even register",
      c: "I'm sorry, this is the right answer, please dont fail me. Srsly...",
      answer: "C"
    }
  ];
function get(x){
  return document.getElementById(x);
}

function getQuick(){
  input = get("input");
  if(place >= questions.length){
    input.innerHTML = "<h2>You got "+win+" of "+questions.length+" questions right</h2>";
    get("state").innerHTML = "Quiz completed";

    place = 0;
    win = 0;

    return false;
  }
  get("state").innerHTML = "Question "+(place+1)+" of "+questions.length;

  question = questions[place].question;
  optionA = questions[place].a;
  optionB = questions[place].b;
  optionC = questions[place].c;
  // display the question
  input.innerHTML = "<h3>"+question+"</h3>";
  // display the answer options
  // the += appends to the data we started on the line above
  input.innerHTML += "<label> <input type='radio' name='options' value='A'> "+optionA+"</label><br>";
  input.innerHTML += "<label> <input type='radio' name='options' value='B'> "+optionB+"</label><br>";
  input.innerHTML += "<label> <input type='radio' name='options' value='C'> "+optionC+"</label><br><br>";
  input.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){

  options = document.getElementsByName("options");
  for(var i=0; i<options.length; i++){
    if(options[i].checked){
      option = options[i].value;
    }
  }

  if(option == questions[place].answer){

    win++;
  }

  place++;

  getQuick();
}


//Task 3

const table = document.getElementById('theTable');
const tableButton = document.getElementById("showTable")
tableButton.addEventListener("click", showUsers);
  function showUsers() {
  fetch("json/data.json")
    .then(data=>data.json())
    .then(json=> {
      json.forEach(user => {

            let li = document.createElement('LI');
            li.innerHTML = `<p>${user.name}, ${user.age}, ${user.city}`;
            showTable.appendChild(li);

      })
    });
}
