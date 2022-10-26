import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import UserAPI from './../../UserAPI'
import Toast from '../../Toast'

class GuideView {
  init(){
    document.title = 'Guide'    
    this.render()    
    Utils.pageIntroAnim()
    this.updateCurrentUser()
  }

  async updateCurrentUser(){
    try{
      const updatedUser = await UserAPI.updateUser(Auth.currentUser._id, {newUser: false}, "json")
      console.log('user updated')
      console.log(updatedUser)
    }catch(err){
      Toast.show(err, 'error')
    }
  }

  render(){
    const template = html`
    <style>

      .arrow {
        font-size: 80px;
        color: var(--brand-color);
      }

      .guide-step p {
        line-height: 2vw;
      }
      .guide-step h4 {
        color: var(--brand-color);
      }
    </style>
      <va-app-header title="Guide" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content calign">        
        <h3 class="brand-color">Welcome ${Auth.currentUser.firstName}!</h3>
          <p>This is a quick tour to teach you the basics of using Meow ...</p>

          <div class="guide-step">
            <h4>First, a bit about Meow!</h4>
            <p>Meow is driven by the vision of creating a future where every pet in Australia is safe, respected and loved - whether the pet is owned, surrendered to a shelter, unclaimed at the pound, seized by authorities, or trapped by rangers. We save lives through providing a free digital platform, animal welfare programs and advocating for animals in the community. We want to improve the rescue and adoption experience for everyone and believe that the best way to achieve this is by creating and nurturing a positive and progressive culture for rescue. Since 2004, 752,756 homeless pets have found love through Meow.</p>
            <p>Whether you're looking to adopt, or put your pet up for adoption, our site has some amazing features!</p>
            <sl-icon class="arrow" name="arrow-down"></sl-icon>
          </div>

          <div class="guide-step">
            <h4>Scroll through our available pets, and find your furrever friend</h4>
            <img src="/images/guidePage/guide-page-1.png">
          </div>

          <div class="guide-step">
            <h4>Save pets to favourites to view later in your profile</h4>
            <img src="/images/guidePage/guide-page-2.png">
          </div>

          <div class="guide-step">
            <h4>Learn about the adoption process and its benefits</h4>
            <img src="/images/guidePage/guide-page-3.png">
          </div>

          <div class="guide-step">
            <h4>Check out our success stories by pressing on our happily homed pets! They can be found at the bottom of each page</h4>
            <img src="/images/guidePage/guide-page-4.png">
          </div>

          <div class="guide-step">
            <h4>Lastly, don't forget to check out our donation page and see how you can help!</h4>
            <img src="/images/guidePage/guide-page-5.png">
          </div>

          <sl-button type="primary" @click=${() => gotoRoute('/')}>Okay got it!</sl-button>

          <va-app-footer class="va-app-footer"></va-app-footer>
                  
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new GuideView()