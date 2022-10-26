import { LitElement, html, css } from '@polymer/lit-element'
import {anchorRoute, gotoRoute} from './../Router'
import Auth from './../Auth'
import App from './../App'

customElements.define('va-app-header', class AppHeader extends LitElement {
  constructor(){
    super()    
  }

  static get properties(){
    return {
      title: {
        type: String
      },
      user: {
        type: Object
      }
    }
  }

  firstUpdated(){
    super.firstUpdated()
    this.navActiveLinks()    
  }

  navActiveLinks(){	
    const currentPath = window.location.pathname
    const navLinks = this.shadowRoot.querySelectorAll('.app-top-nav a, .app-side-menu-items a')
    navLinks.forEach(navLink => {
      if(navLink.href.slice(-1) == '#') return
      if(navLink.pathname === currentPath){			
        navLink.classList.add('active')
      }
    })
  }

  hamburgerClick(){  
    const appMenu = this.shadowRoot.querySelector('.app-side-menu')
    appMenu.show()
  }
  
  menuClick(e){
    e.preventDefault()
    const pathname = e.target.closest('a').pathname
    const appSideMenu = this.shadowRoot.querySelector('.app-side-menu')
    // hide appMenu
    appSideMenu.hide()
    appSideMenu.addEventListener('sl-after-hide', () => {
      // goto route after menu is hidden
      gotoRoute(pathname)
    })
  }

  render(){    
    return html`
    <style>      
      * {
        box-sizing: border-box;
      }
      .app-header {
        background: var(--brand-color);
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: var(--app-header-height);
        color: #fff;
        display: flex;
        z-index: 9;
        box-shadow: 4px 0px 10px rgba(0,0,0,0.2);
        align-items: center;
        justify-content: space-between; 
      }
      

      .app-header-main {
        display: flex;
        align-items: center;
      }

      .app-header-main::slotted(h1){
        color: #fff;
      }

      /* .app-logo a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.2em;
        padding: .6em;
        display: inline-block;        
      }

      .app-logo img {
        width: 90px;
      } */
      
      .hamburger-btn::part(base) {
        color: #fff;
      }

      .app-top-nav {
        display: flex;
        height: 100%;
        align-items: center;
      } 

      .app-top-nav a {
        display: inline-block;
        padding: .8em;
        text-decoration: none;
        color: #fff;
      } 
      
      .app-side-menu-items a {
        display: block;
        padding: .5em;
        text-decoration: none;
        font-size: 1.3em;
        color: #333;
      }

      .app-side-menu-logo {
        width: 120px;
        margin-bottom: 1em;
        position: absolute;
        top: 2em;
        left: 1.5em;
      }

      .page-title {
        color: var(--app-header-txt-color);
        font-size: var(--app-header-title-font-size);
      }

      .app-header-logo-link img{
        /* display: flex;
        margin: auto;
        width: 50%; */
        height: 100%;
        position:absolute;
            left:50%;
            transform: translate(-50%, -50%); 
      }

      /* active nav links */
      .app-top-nav a.active,
      .app-side-menu-items a.active {
        font-weight: bold;
      }

      .app-side-menu-items a:hover {
        color: var(--brand-color);
      }

      /* RESPONSIVE - MOBILE ------------------- */
      @media all and (max-width: 768px){       
        
        .app-top-nav {
          display: none;
          width: 100px;
        }
        .page-title {
          display: none;
        }
      }

    </style>

    <header class="app-header">
            
      <div class="app-header-main">
      <sl-icon-button class="hamburger-btn" name="list" @click="${this.hamburgerClick}" style="font-size: 1.5em;"></sl-icon-button> 
        ${this.title ? html`
          <h1 class="page-title">${this.title}</h1>
        `:``}
      </div>
      <a class="app-header-logo-link" href="/" @click="${anchorRoute}">
        <img src="/images/logo-white.png" />

    </a> 

      <nav class="app-top-nav"> 
        ${this.user.accessLevel == 2 ? html`
          <a href="/newPet" @click="${anchorRoute}">Add Pet for Adoption</a>
        ` : html``}       
        <sl-dropdown>
          <a slot="trigger" href="#" @click="${(e) => e.preventDefault()}">
            <sl-avatar style="--size: 24px;" image=${(this.user && this.user.avatar) ? `${App.apiBase}/images/${this.user.avatar}` : ''}></sl-avatar> ${this.user && this.user.firstName}
          </a>
          <sl-menu>            
            <sl-menu-item @click="${() => gotoRoute('/profile')}">Profile</sl-menu-item>
            <sl-menu-item @click="${() => gotoRoute('/favouritePets')}">View Saved Pets</sl-menu-item>
            <sl-menu-item @click="${() => gotoRoute('/editProfile')}">Edit Profile</sl-menu-item>
            <sl-menu-item @click="${() => Auth.signOut()}">Sign Out</sl-menu-item>
          </sl-menu>
        </sl-dropdown>
      </nav>
    </header>

    <sl-drawer class="app-side-menu" placement="left">
      
      <a href="/" @click="${this.menuClick}"></a>
      <img class="app-side-menu-logo" src="/images/logo.png">
    </a>
      <nav class="app-side-menu-items">
      ${this.user.accessLevel == 2 ? html`
          <a href="/newPet" @click="${this.menuClick}">Add Pet for Adoption</a>
        ` : html``} 
        <a href="/howToAdopt" @click="${this.menuClick}">How To Adopt</a>
        <a href="/whyAdopt" @click="${this.menuClick}">Why Adopt?</a>
        <a href="/carePet" @click="${this.menuClick}">Caring for your Pet</a>
        <a href="/donate" @click="${this.menuClick}">Donate</a>        
        <a href="/contact" @click="${this.menuClick}">Contact Us</a>
        <a href="/profile" @click="${this.menuClick}">Profile</a>
        <a href="#" @click="${() => Auth.signOut()}">Sign Out</a>
      </nav>  
    </sl-drawer>
    `
  }
  
})

