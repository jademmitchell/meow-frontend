import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import moment from 'moment'

class ProfileView {
  init(){
    console.log('ProfileView.init')
    document.title = 'Profile'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`

    <style>

      .page-content sl-button {
        margin: 20px;
      }

      .page-content {
        text-align: center;
      }

      .va-app-footer {
        text-align: left;
        padding-bottom: 0;
      }


      /* RESPONSIVE - TABLET ------------------- */
@media all and (max-width: 768px){ 

.page-content {
  margin-top: 50px;
}

}
      
    </style>
      <va-app-header title="Profile" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content container">        
        ${Auth.currentUser && Auth.currentUser.avatar ? html`
          <sl-avatar style="--size: 200px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
        `:html`
        <sl-avatar style="--size: 200px; margin-bottom: 1em;"></sl-avatar>
        `}
        <h2> <strong>${Auth.currentUser.firstName} ${Auth.currentUser.lastName} </strong></h2>
        <p><strong>Email:</strong> ${Auth.currentUser.email}</p>
        
        ${Auth.currentUser.bio ? html`
          <p> <strong> Bio: </strong> </p>
          <p>${Auth.currentUser.bio}</p>
        ` : html``}
        
        <p> <strong>Updated:</strong> ${moment(Auth.currentUser.updatedAt).format('MMMM Do YYYY, @ h:mm a')}</p>

        <sl-button type="primary" @click=${()=> gotoRoute('/editProfile')}>
          <sl-icon slot="prefix" name="pencil-square"></sl-icon>
          Edit Profile
        </sl-button>
    
        <sl-button type="primary" @click=${()=> gotoRoute('/favouritePets')}>
          <sl-icon slot="prefix" name="heart-fill"></sl-icon>
          View Saved Pets
        </sl-button>

         <va-app-footer class="va-app-footer"></va-app-footer>
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new ProfileView()