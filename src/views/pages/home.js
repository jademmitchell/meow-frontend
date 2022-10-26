import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import PetAPI from './../../PetAPI'
import Toast from '../../Toast'

class HomeView {
  async init(){    
    console.log('HomeView.init')
    document.title = 'Home'  
    this.pets  = null
    this.render()    
    Utils.pageIntroAnim()  
    await this.getPets()  
    // this.filterPets('price', '40-100')
  }

  async filterPets(field, match){
    // validation 
    if(!field || !match) return

    // get fresh copt of pets
    this.pets = await PetAPI.getPets()

    let filteredPets

    //gender
    if(field == 'gender'){
      filteredPets = this.pets.filter(pet => pet.gender == match)
    }
    //type
    if(field == 'type'){
      filteredPets = this.pets.filter(pet => pet.type == match)
    }

    //price
    if(field == 'price'){
      // get price range start
      const priceRangeStart = match.split('-')[0]
      const priceRangeEnd = match.split('-')[1]
      // console.log(priceRangeStart , priceRangeEnd)
      filteredPets = this.pets.filter(pet => pet.price >= priceRangeStart && pet.price <= priceRangeEnd)
    }
    // render
    this.pets = filteredPets
    this.render()
  }

  clearFilterBtns(){
    const filterBtns = document.querySelectorAll('.filter-btn')
    filterBtns.forEach(btn => btn.removeAttribute("type"))
  }

  handleFilterBtn(e){
    // clear all active state on filter buttons
    this.clearFilterBtns()

    // set button active 
    e.target.setAttribute("type", "primary")

    // extract the field and match from the button
    const field = e.target.getAttribute("data-field")
    const match = e.target.getAttribute("data-match")

    // filter pets
    this.filterPets(field, match)

  }

  clearFilters(){
    this.getPets()
    this.clearFilterBtns()
  }


  async getPets(){
    try{
      this.pets = await PetAPI.getPets()
      console.log(this.pets)
      this.render()
    }catch(err){
      Toast.show(err, 'error')
    }
  }

  scrollAnimation(){
    gsap.registerPlugin(ScrollTrigger);
  }

  render(){
    const template = html`
    <style>
      /* .hero-section {
        padding-top: 50px;
        padding-bottom: 50px;
      } */
      /*-------------- HERO SECTION --------------*/
      .hero-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

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

      .hero-text {
        color: white;
        text-align: center;
        margin: auto;
        letter-spacing: 2px;
      }

      .hero-content {
        min-height: 70vh;
      }

      .hero-section h1 {
        line-height: 8vh;
        width: 600px;
      }

      .hero-section p {
        width: 70%;
        font-size: 1.1em;
        line-height: 4vh;
      }

      /*-------------- SCROLL CSS ANIMATION --------------*/
      .scroll-down {
        position: absolute;
        bottom: 5%;
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
      /*-------------- FILTER SECTION --------------*/

      .filter-menu {
        display: flex;
        align-items: center;
        height: 120px;
        background: var(--brand-color);
        margin: -1em;
        padding-left: 2em; 
        color: white;
      }

      .filter-menu div{
        margin-right: 5em; 
      }

      .filter-btn {
        padding: 0.5em;
        margin-top: 1.5em;
      }

      .clear-filter-btn {
        margin-top: 0.5em;
        position: absolute;
        right: 0%;
        transform: translate(-50%, -50%);
      }

      .filter-text {
        color: white;
      }

      .filter-text {
        margin: 1.3em 2em 0 2em; /* top, right, bottom, left */
      }

      /*-------------- GSAP SCROLL TRIGGER --------------*/

      .container {
        scroll-snap-type: y mandatory;
      }

      .hero-section {
        scroll-snap-align: start end;
      }

      #filter-scroll {
        scroll-snap-align: start;
      }

      .pets-grid {
        scroll-snap-align: end;
      }

      .footer {
        scroll-snap-align: end;
      }

      /* RESPONSIVE - TABLET ------------------- */
      @media all and (max-width: 768px){       
        
        /* hero section */

        .hero-image {
        margin: 0 0 -20px 0;
        height: 100vh;
        }  

        .hero-text{
        max-width: 500px;
        line-height: 6vw;
      }

      .hero-section p {
        width: 100%;
        font-size: 0.8em;
      }

      /* Scroll animation */
      .scroll-down {
        bottom: -5%;
      }

      /* filter section */
      .filter-menu div{
        margin-right: 1em; 
      }

      .filter-btn {
        padding: 0;
        margin-top: 0;
      }
      .filter-text {
        display: none;
      }
      .clear-filter-btn {
        margin-top: 1.5em;
      }

      /* RESPONSIVE - MOBILE ------------------- */
      @media all and (max-width: 375px){ 

        .scroll {
          display: none;
        }

        .filter-menu p {
          display: none;
        }

        .hero-text{
        max-width: 300px;
        line-height: 6vw;
      }

      .filter-menu {
        height: 250px;
      }

      .filter-btn {
        display: flex;
        flex: wrap;
        margin: 10px 15px 0 15px;
      }
      .clear-filter-btn {
        margin-top: 6em;
        padding-left: 50%;
      }

      .pets-grid{
        display: block;
        padding-right: 50px;
        margin: 20px;
      }
    
      }
    }

    </style>
      <va-app-header title="Home" user=${JSON.stringify(Auth.currentUser)}></va-app-header>

      <div class="page-content container">

        <div class="hero-section">
          <img class="hero-image" src="/images/hero-image.jpeg" />
          <div class= "hero-content">
            <h1 class="anim-in hero-text"> Helping every pet find their furrever home.</h1>
            <br>
            <p class="anim-in hero-text">
              <b> Hi ${Auth.currentUser.firstName}!</b>
              Welcome to Meow, a pet adoption website. Our company helps make a difference to the Australian rescue community and thousands of pets in need of rescue and rehabilitation.  If you're looking to adopt a pet, <br> scroll to see our avaliable pets!
            </p>
            <div class="scroll scroll-down">
              <span class="scroll-dot"></span>
            </div>
          </div>
        </div>

        <br>

        <div class="filter-menu" id="filter-scroll">

        <p class="filter-text"><strong>Filter By:</strong></p>

          <div>
            <p> Gender </p>
            <sl-button class="filter-btn" size="small" data-field="gender" data-match="Male" @click=${this.handleFilterBtn.bind(this)} >Male</sl-button>
            <sl-button class="filter-btn" size="small" data-field="gender" data-match="Female" @click=${this.handleFilterBtn.bind(this)} >Female</sl-button>
          </div>
          <div>
            <p>Type</p>
            <sl-button class="filter-btn" size="small" data-field="type" data-match="Cat" @click=${this.handleFilterBtn.bind(this)} >Cat</sl-button>
            <sl-button class="filter-btn" size="small" data-field="type" data-match="Dog" @click=${this.handleFilterBtn.bind(this)} >Dog</sl-button>
            <sl-button class="filter-btn" size="small" data-field="type" data-match="Other" @click=${this.handleFilterBtn.bind(this)} >Other</sl-button>
          </div>
          <div>
            <p>Price</p>
            <sl-button class="filter-btn" size="small" data-field="price" data-match="0-40" @click=${this.handleFilterBtn.bind(this)} >$0-40</sl-button>
            <sl-button class="filter-btn" size="small" data-field="price" data-match="40-80" @click=${this.handleFilterBtn.bind(this)} >$40-80</sl-button>
            <sl-button class="filter-btn" size="small" data-field="price" data-match="80-120" @click=${this.handleFilterBtn.bind(this)} >$80-120</sl-button>
          </div>
          <div> 
            <sl-button class="clear-filter-btn" size="small" @click=${this.clearFilters.bind(this)}> Clear Filters</sl-button>
          </div>

        </div>

        <br>

        <div class="pets-grid">
          ${this.pets == null ? html`
            <sl-spinner></sl-spinner>
          ` : html`
            ${this.pets.map(pet => html`

              <va-pet class="pet-card"
              id="${pet._id}"
              name="${pet.name}"
              breed="${pet.breed}"
              price="${pet.price}"
              image="${pet.image}"
              gender="${pet.gender}"
              age="${pet.age}"
              about="${pet.about}"
              >
              </va-pet>
            `)}
          `}
        </div>

        <div class="footer">
          <va-app-footer class="va-app-footer"></va-app-footer>
        </div>
        
      </div>
    `
    render(template, App.rootEl)
  }
}

export default new HomeView()