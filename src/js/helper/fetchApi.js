
class fetchApi{
    constructor(){
    this.url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy"
    this.questions = []
    this.subscribers = []
    }

    addSubscriber(callback){
        this.subscribers.push(callback)
    }
    
    notifySubscriber(){
        this.subscribers.forEach(subscriber=>{
            subscriber(this.questions)
            console.log("llegaron las preguntas")
        })
    }

    fetchQuestions(){
       fetch(this.url)
        .then((res)=> res.json())
        .then(data=> {
            const {results} = data
            this.questions.push(...results)
            this.notifySubscriber() 
        })
        
    }

}


export default fetchApi