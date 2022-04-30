const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
  question.addEventListener("click", function(){
    
    // tohle vypne tu class když to neni rozkliklý
    questions.forEach(function(item){
      if (item != question) {
        item.classList.remove("active");
      }
    });
    // tohle vypne tu class když to není rozkliklý

    question.classList.toggle("active");
  });
});
