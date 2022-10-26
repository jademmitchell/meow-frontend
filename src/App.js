import Router from './Router'
import Auth from './Auth'
import Toast from './Toast'


class App {
  constructor(){ // set properties for app
    this.name = "Meow"
    this.version = "1.0.0"
    this.apiBase = "https://jmitchell-meow-backend.herokuapp.com", // 'http://localhost:3000'
    this.rootEl = document.getElementById("root") // root element in index.html 
    this.version = "1.0.0"
  }
  
  init() { 
    console.log("App.init")
    
    // Toast init
    Toast.init()   
    
    // Authentication check    
    Auth.check(() => {
      // authenticated! init Router
      Router.init()
    })    
  }
}

export default new App()