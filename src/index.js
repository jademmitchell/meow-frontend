import App from './App.js'

// components (custom web components)
import './components/va-app-header' // custom components start with a prefix (this example is va)
import './components/va-pet'
import './components/va-app-footer'

// styles
import './scss/master.scss' 

// app.init // doesnt run straight away, waits for doc to load its content
document.addEventListener('DOMContentLoaded', () => {
  App.init() 
})