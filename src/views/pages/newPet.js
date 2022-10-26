import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import PetAPI from './../../PetAPI'
import Toast from './../../Toast'


class NewPetView {
  init(){
    document.title = 'Add New Pet'    
    this.render()    
    Utils.pageIntroAnim()
  }

  async newPetSubmitHandler(e){
    e.preventDefault()
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')    
    const formData = e.detail.formData

    try{
      await PetAPI.newPet(formData)
      Toast.show('Pet Added!')
      submitBtn.removeAttribute('loading') 
      // reset form 
      // reset text and text area feilds 
      const textInputs = document.querySelectorAll('sl-input, sl-textarea')
      if(textInputs) textInputs.forEach(textInput => textInput.value = null)
      // reset radio inputs 
      const radioInputs = document.querySelectorAll('sl-radio')
      if(radioInputs) radioInputs.forEach(radioInput => radioInput.removeAttribute('checked'))  
      // resert file (image) input
      const fileInput = document.querySelector('input[type=file]')   
      if(fileInput) fileInput.value = null 

    }catch(err){
      Toast.show(err, 'error')
      submitBtn.removeAttribute('loading') 
    }

  }

  render(){
    const template = html`
    <style>

        .hero-image {
        padding: 0;
        position: relative;
        text-align: center;
        width: 102.5%;
        height: 700px;
        object-fit: cover;
        margin: -20px 0 -30px -20px; /* top, right, bottom, left */
        filter: brightness(40%);
      }

      .gif {
        position: relative;
        left: 50%;
        transform: translate(-50%, 0);
        width: 50%;
      }

      .new-pet-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .new-pet-intro p strong{
        color: var(--brand-color);
      }

      .new-pet-intro h1 {
        color: white;
        text-align: center;
      }

      .new-pet-intro p{
        color: white;
        text-align: center;
        margin: auto;
        line-height: 2vw;
        width: 100%;
        font-size: 1.1em;
      }

      .new-pet-content a {
        color: white;
        text-align: center;
        padding-left: 15%;
      }

      .section-two h1 {
        position: relative;
        text-align: center;
        align-items: center;
      }

      .submit-btn {
        left: 50%;
        transform: translate(-50%, 0%);
        padding-bottom: 20px;
      }

      .page-form {
        position: absolute;
        /* top: 50%; */
        left: 50%;
        transform: translate(-50%, 0%);
        width: 100%;
      }

      .input-group{
        padding-top: 15px; /* top, right, bottom, left */
      }

      .input-group sl-radio{
        margin: 20px 20px 0 0; /* top, right, bottom, left */
      }

      .footer {
        margin-top: 100vh;
      }

       /*-------------- SCROLL CSS ANIMATION --------------*/
       .scroll-down {
        position: absolute;
        bottom: 2.5rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .scroll {
        width: 2rem;
        height: 4rem;
        border: 2px solid white;
        border-radius: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .scroll span {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: white;
        display: block;
        animation: cursor 1.15s linear infinite;
      }

        /* scroll down css animation KEYFRAMES */
      @keyframes cursor {
        0%{
            opacity: 0;
            transform: translateY(1rem);
        }
        100%{
            opacity: 1;
            transform: translateY(-1rem);
        }
      }

      /* ------------ GSAP SCROLL TRIGGER ---------- */

      .container {
        scroll-snap-type: y mandatory;
      }

      .new-pet-intro {
        scroll-snap-align: start end;
      }

      .section-two {
        scroll-snap-align: start;
      }
      .footer {
        scroll-snap-align: end;
      }

      /* RESPONSIVE - TABLET ------------------- */
      @media all and (max-width: 768px){ 

        .scroll {
          display: none;
        }

        .new-pet-content p{
          line-height: 4vh;
        }
        .footer {
        margin-top: 110vh;
      }
      }

      /* RESPONSIVE - MOBILE ------------------- */
      @media all and (max-width: 375px){ 

        .page-form {
          margin: 10px;
          width: 80vw;
        }

        .footer {
        margin-top: 150vh;
      }

        /* top section  */

        .new-pet-content h1 {
          width: 80vw;
        }
        .new-pet-content a {
          text-align: center;
        }

        .hero-image {
        height: 100vh;
      }
    }
      
    </style>
      <va-app-header title="Add New Pet" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content container">    
        
        <div class="new-pet-intro">  
         <img class="hero-image" src="/images/new-pet-image.png" />
         <div class="new-pet-content">
          <h1>Wish to add your pet for adoption?</h1>
          <p> Meow is designed to empower a pet owner to find a new home for their pet, helping to slow the flow of pets entering rescue.</p>
          <br>
          <p>By adding your pet for adoption on Meow, it frees up space in rescue organisations for vulnerable pets who don’t have a safe home to rely on.</p>
          <a href="#section2-link">If you wish to add a pet for adoption, please fill out the following form...</a>
          </div>
          <div class="scroll scroll-down">
              <span class="scroll-dot"></span>
            </div>
        </div>  

        <br>
        <br>

        <div class="section-two" id="section2-link">
        <img class="gif" src="/images/new-pet.gif" />
          <h1>Add Pet for Adoption</h1>

        <sl-form class="page-form" @sl-submit=${this.newPetSubmitHandler}>
          <input type="hidden" name="user" value="${Auth.currentUser._id}" />
          <div class="input-group" style="margin-bottom: 2em;">
            <label>Type</label><br>
            <sl-radio-group label="Select length" no-fieldset>
              <sl-radio name="type" value="Cat">Cat</sl-radio>
              <sl-radio name="type" value="Dog">Dog</sl-radio>
              <sl-radio name="type" value="Other">Other</sl-radio>
            </sl-radio-group>
          </div>
          <div class="input-group" style="margin-bottom: 2em;">
            <label>Gender</label><br>
            <sl-radio-group label="Select gender" no-fieldset>
              <sl-radio name="gender" value="Male">Male</sl-radio>
              <sl-radio name="gender" value="Female">Female</sl-radio>
            </sl-radio-group>
          </div>
          <div class="input-group">
            <sl-input name="name" type="text" placeholder="Pet Name" required></sl-input>
          </div>
          <div class="input-group">
            <sl-input name="breed" type="text" placeholder="Breed" required></sl-input>
          </div>
          <div class="input-group">              
            <sl-input name="price" type="text" placeholder="Price" required>
              <span slot="prefix">$</span>
            </sl-input>
          </div>
          <div class="input-group">
            <sl-textarea name="about" rows="3" placeholder="About your pet"></sl-textarea>
          </div>
          <div class="input-group">
            <sl-input name="age" type="text" placeholder="Age in Years" required></sl-input>
          </div>
          <div class="input-group" style="margin-bottom: 2em;">
            <label>Image</label><br>
            <input type="file" name="image" />              
          </div>
          <sl-button type="primary" class="submit-btn" submit>Add Pet for Adoption</sl-button>
        </sl-form> 
        <div class="footer">
          <va-app-footer class="va-app-footer"></va-app-footer>
        </div>
        </div>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new NewPetView()