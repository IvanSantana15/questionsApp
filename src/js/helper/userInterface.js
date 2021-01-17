class userInterface{
    constructor(container){
     this.container = container
      
    }

    render(questions){
        
       document.querySelector(".loader").style.display = "none"
       const content = document.getElementById("contentApp")
       const div = document.createElement("div")
       const answerDiv = document.createElement("div")

        const {question,incorrect_answers, correct_answer}= questions[0]
       
        div.innerHTML = `<p>${question}</p>`
        div.classList.add("dataContainer")
        answerDiv.classList.add("answerContainer")

        const allAnswer = []
        allAnswer.push(...incorrect_answers,correct_answer)

        answerDiv.innerHTML = allAnswer.map(answer =>{
           return `<button class="btn">${answer}</button>`
        }).join("")
       
       div.appendChild(answerDiv)
        content.appendChild(div)
        
    }
      
  


}


export default userInterface