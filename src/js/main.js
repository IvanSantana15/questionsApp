import Loader from "./component/Loader.js"
import fetchApi from "./helper/fetchApi.js"

import userInterface from "./helper/userInterface.js"
const menuResponsive = document.getElementById("menu")
const navegation = document.getElementById("navegation")
const contentApp = document.getElementById("contentApp")

menuResponsive.addEventListener("click", openMenu)

window.addEventListener("DOMContentLoaded", function renderContent(){
    

    contentApp.appendChild(Loader())
    const api = new fetchApi()
    const ui = new userInterface(contentApp)

    api.addSubscriber(ui.render)
    api.fetchQuestions()
    //  contentApp.appendChild(ui.render())
  
    
   
})


function openMenu (){
  s
    if (navegation.style.transform == "translateX(-100%)"){

       navegation.style.transform = "translateX(0)" 
    }else{
        navegation.style.transform = "translateX(-100%)" 
    }
  
}


