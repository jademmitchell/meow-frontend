import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class ContactView {
  init(){
    document.title = 'Contact'    
    this.render()    
    Utils.pageIntroAnim()
  }

  submitButton(){
    submitBtn.setAttribute('loading', '')  
  }

  render(){
    const template = html`
    <style>
      .page-content h1{
        color: var(--brand-color);
        text-align: center;
      }

      .page-form {
        position: absolute;
        /* top: 50%; */
        left: 50%;
        transform: translate(-50%, 0%);
        width: 100%;
      }

      .submit-btn {
        left: 50%;
        transform: translate(-50%, 0%);
        padding: 20px;
      }

      .input-group sl-input, sl-textarea{
        padding-top: 15px; /* top, right, bottom, left */
      }

      .footer {
        margin-top: 110vh;
      }

      /* RESPONSIVE - TABLET ------------------- */
@media all and (max-width: 768px){ 

  .page-content h1 {
    margin-top: 50px;
  }

  .page-content {
    max-width: 90vw;
    margin-left: 20px;
  }

  .footer {
     margin-top: 125vh;
  }


}

      /* RESPONSIVE - MOBILE ------------------- */
@media all and (max-width: 375px){ 

  .page-content i {
    font-size: 10px;
  }

  /* .page-content placeholder {
    font-size: 10px;
  } */

  .page-content {
    max-width: 100vw;
    margin-left: 45%;
    transform: translate(-50%, 0%)
  }

  .footer {
        margin-top: 200vh;

      }


}

    

    </style>
      <va-app-header title="Contact" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1>Contact Us</h1>
        <sl-form class="page-form" >
          <input type="hidden" name="user" value="${Auth.currentUser._id}" />
          
          <div class="input-group">
            <p><strong>Name:</strong></p>   
            <sl-input name="name" type="text" placeholder="${Auth.currentUser.firstName} ${Auth.currentUser.lastName}"></sl-input>
          </div>
          <div class="input-group">
            <p><strong>Email:</strong></p>
            <i>We require this to be able to send you communications regarding your pet enquiry.</i>
            <sl-input name="breed" type="text" placeholder="${Auth.currentUser.email}"></sl-input>
          </div>
          <div class="input-group">    
            <p><strong>Phone Number: </strong></p>         
            <sl-input name="price" type="text" placeholder="0400 000 000">
              <span slot="prefix">+61</span>
            </sl-input>
          </div>
          <div class="input-group">
            <p><strong>Location:</strong></p>    
            <i>This helps us match you with pets that are available for adoption in your area.</i>
            <sl-input name="age" type="text" placeholder="Enter Suburb or Postcode" required></sl-input>
          </div>
          <div class="input-group">
            <p><strong>Message:</strong></p>  
            <i>We recommend sharing some basic information about you and your lifestyle to help Meow assist you with your pet enquiry. <strong>Please also let us know the name of the pet you are looking to adopt.</strong></i> 
            <sl-textarea name="about" rows="5" placeholder="Share a bit about yourself and your home. E.g. Hello! I'm writing to express my interest in Macy! We have a big, grassy backyard with high fences and plenty of shade, and great pet-friendly spaces indoors, which Macy would love! There's someone home most of the time and we also enjoy getting outdoors too. We also have 3 children, aged 9-12, who'd be wonderful companions to give her plenty of love and walks."></sl-textarea>
          </div>
          <sl-button type="primary" class="submit-btn" @click=${this.submitButton}>Send</sl-button>
        </sl-form> 

        <div class="footer">
        <va-app-footer class="va-app-footer"></va-app-footer>
        </div>
        
      </div>     
       
    
    `
    render(template, App.rootEl)
  }
}


export default new ContactView()