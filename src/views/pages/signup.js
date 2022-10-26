import App from './../../App'
import Auth from './../../Auth'
import {html, render } from 'lit-html'
import {anchorRoute, gotoRoute} from './../../Router'
import Utils from './../../Utils'

class SignUpView{
   
  init(){      
    console.log('SignUpView.init')  
    document.title = 'Sign In'    
    this.render()
    Utils.pageIntroAnim()
  }

  signUpSubmitHandler(e){
    e.preventDefault()    
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')    
    const formData = e.detail.formData
    
    // sign up using Auth
    Auth.signUp(formData, () => {
      submitBtn.removeAttribute('loading')
    })   
  }

  render(){
    const template = html`  
    
    <style>
      .signinup-box h1{
        color: #99A6AC;
      }

      .signinup-box p {
        color: white;
      }

      .signinup-box {
        position: absolute;
        max-width: 350px;
      }

      .login-image {
        padding: 0;
        position: relative;
        width: 110%;
        height: 95vh;
        margin: -20px;
        object-fit: cover;
        filter: brightness(50%);
      }
    </style>
    
      <div class="page-content page-centered"> 
      <img class="login-image" src="/images/login-image.jpg" />     
        <div class="signinup-box">
        <img class="signinup-logo" src="/images/logo-white.png">
        <p> Hello Hooman!</p>
          <p>Create an account to discover all our cute and cuddly pets up for adoption. </p> 
          <br>
          <h1>Sign Up</h1>
          <sl-form class="form-signup" @sl-submit=${this.signUpSubmitHandler}>
            <div class="input-group">
              <sl-input name="firstName" type="text" placeholder="First Name" required></sl-input>
            </div>
            <div class="input-group">
              <sl-input name="lastName" type="text" placeholder="Last Name" required></sl-input>
            </div>
            <div class="input-group">
              <sl-input name="email" type="email" placeholder="Email" required></sl-input>
            </div>
            <div class="input-group">
              <sl-input name="password" type="password" placeholder="Password" required toggle-password></sl-input>
            </div> 
            <div class="input-group">
              <sl-select name="accessLevel" placeholder="What brings you to Meow?">
                <sl-menu-item value="1">I'm an adopter looking for a pet </sl-menu-item>
                <sl-menu-item value="2">I'm wish to put my pet up for adoption </sl-menu-item>
              </sl-select>
            </div>           
            <sl-button type="primary" class="submit-btn" submit style="width: 100%;">Sign Up</sl-button>
          </sl-form>
          <p>Have an account? <a href="/signin" @click=${anchorRoute}>Sign In</a></p>
        </div>
      </div>
    `
    render(template, App.rootEl)
  }
}


export default new SignUpView()