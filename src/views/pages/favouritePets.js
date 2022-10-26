import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import Toast from './../../Toast'
import UserAPI from './../../UserAPI'
import PetAPI from './../../PetAPI'

class FavouritePetsView {
  async init(){
    document.title = 'Favourite Pets' 
    this.favPets = null   
    this.render()    
    Utils.pageIntroAnim()
    await this.getFavPets()
    // this.filterFavPets()
  }

  async filterFavPets(field, match){
    //validate
    if(!field || !match) return

    // get fresh copy of favPets
    const currentUser = await UserAPI.getUser(Auth.currentUser._id)
    this.favPets = currentUser.favouritePets

    let filterFavPets

    // gender
    if(field == 'gender'){
      filterFavPets = this.favPets.filter(favPets => favPets.gender == match)
    }

    // type
    if(field == 'type'){
      filterFavPets = this.favPets.filter(favPets => favPets.type == match)
    }

    // price
    if(field == 'price'){
      // get price range start and end
      const priceRangeStart = match.split('-')[0]
      const priceRangeEnd = match.split('-')[1]
      filterFavPets = this.favPets.filter(favPets => favPets.price >= priceRangeStart && favPets.price <= priceRangeEnd)
    }
    // render
    this.favPets = filterFavPets
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
    this.filterFavPets(field, match)

  }

  clearFilters(){
    this.getFavPets()
    this.clearFilterBtns()
  }

  async getFavPets(){
    try {
      const currentUser = await UserAPI.getUser(Auth.currentUser._id)
      this.favPets = currentUser.favouritePets
      console.log(this.favPets)
      this.render()
    }catch(err){
      Toast.show(err, 'error')
    }
  }
  

  render(){
    const template = html`
    <style>
      /*-------------- FILTER SECTION --------------*/

      .filter-menu {
        display: flex;
        align-items: center;
        height: 100px;
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
      }

      .clear-filter-btn {
        position: absolute;
        right: 0%;
        transform: translate(-50%, -50%);
      }

      /* RESPONSIVE - MOBILE ------------------- */
      @media all and (max-width: 768px){       

      .filter-menu div{
        margin-right: 1em; 
      }

      .filter-btn {
        padding: 0;
        margin-top: 0;
      }
      .clear-filter-btn {
        margin-top: 2em;
      }
      }
    </style>
      <va-app-header title="Favourite Pets" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        

        <div class="filter-menu" id="filter-scroll">

          <div>
            <strong> Gender </strong>
            <sl-button class="filter-btn" size="small" data-field="gender" data-match="Male" @click=${this.handleFilterBtn.bind(this)} >Male</sl-button>
            <sl-button class="filter-btn" size="small" data-field="gender" data-match="Female" @click=${this.handleFilterBtn.bind(this)} >Female</sl-button>
          </div>
          <div>
            <strong> Type </strong>
            <sl-button class="filter-btn" size="small" data-field="type" data-match="Cat" @click=${this.handleFilterBtn.bind(this)} >Cat</sl-button>
            <sl-button class="filter-btn" size="small" data-field="type" data-match="Dog" @click=${this.handleFilterBtn.bind(this)} >Dog</sl-button>
            <sl-button class="filter-btn" size="small" data-field="type" data-match="Other" @click=${this.handleFilterBtn.bind(this)} >Other</sl-button>
          </div>
          <div>
            <strong> Price </strong>
            <sl-button class="filter-btn" size="small" data-field="price" data-match="0-40" @click=${this.handleFilterBtn.bind(this)} >$0-40</sl-button>
            <sl-button class="filter-btn" size="small" data-field="price" data-match="40-80" @click=${this.handleFilterBtn.bind(this)} >$40-80</sl-button>
            <sl-button class="filter-btn" size="small" data-field="price" data-match="80-120" @click=${this.handleFilterBtn.bind(this)} >$80-120</sl-button>
          </div>
          <div> 
            <sl-button class="clear-filter-btn" size="small" @click=${this.clearFilters.bind(this)}> Clear Filters</sl-button>
          </div>

        </div>

        <div class="pets-grid">
        ${this.favPets == null ? html`
          <sl-spinner></sl-spinner>
        ` : html`
          ${this.favPets.map(pet => html`
          <va-pet class="pet-card"
              id="${pet._id}"
              name="${pet.name}"
              breed="${pet.breed}"
              price="${pet.price}"
              image="${pet.image}"
              gender="${pet.gender}"
              age="${pet.age}"
              about="${pet.about}"
              shelterTime="${pet.shelterTime}"
              >
              </va-pet>
          `)}
        `}
        </div>
        <va-app-footer class="va-app-footer"></va-app-footer>
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new FavouritePetsView()