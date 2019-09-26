const quiz = {
  id: 1,
  title: "A Quiz",
  introMessage: "This is a quiz",
  results: {
    minScore: 50,
    passMessage: "Congratulations, you passed!",
    failMessage: "You failed the quiz. Try again."
  },
  questions: [
    {
      id: 1,
      type: "SINGLE_SELECT",
      text: "What is Brent's favourite food?",
      randomiseAnswers: true,
      answers: [
        {
          text: "Chocolate",
          correct: false
        },
        {
          text: "Popcorn",
          correct: true
        },
        {
          text: "Ice Cream",
          correct: false
        }
      ]
    },
    {
      id: 2,
      type: "MULTI_SELECT",
      text: "Which countries has Brent visited?",
      randomiseAnswers: false,
      answers: [
        {
          text: "Canada",
          correct: true
        },
        {
          text: "Japan",
          correct: false
        },
        {
          text: "Brazil",
          correct: true
        }
      ]
    },
    {
      id: 3,
      type: "ORDER_SELECT",
      text: "Order Brent and his brothers from oldest (1) to youngest (3)",
      randomiseAnswers: false,
      answers: [
        {
          text: "Jordan",
          correctOrder: 2
        },
        {
          text: "Brent",
          correctOrder: 1
        },
        {
          text: "Matthew",
          correctOrder: 3
        }
      ]
    }
  ]
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  quiz
};