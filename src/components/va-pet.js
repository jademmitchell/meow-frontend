import { LitElement, html, css } from '@polymer/lit-element'
import {render} from 'lit-html'
import {anchorRoute, gotoRoute} from './../Router'
import Auth from './../Auth'
import App from './../App'
import UserAPI from './../UserAPI'
import Toast from './../Toast'
import moment from 'moment'

customElements.define('va-pet', class Pet extends LitElement {
  constructor(){
    super()    
  }

  static get properties(){
    return {
      id: {
        type: String
      },
      name: {
        type: String
      }, 
      type: {
        type: String
      },  
      breed: {
        type: String
      },
      gender: {
        type: String
      },  
      age: {
        type: Number
      },
      about: {
        type: String
      },    
      price: {
        type: Number
      },  
      image: {
        type: String
      }      
    }
  }

  firstUpdated(){
    super.firstUpdated()
  }

  moreInfoHandler(){
    // create sl-dialog
    const dialogEl = document.createElement('sl-dialog')
    //add class name
    dialogEl.className = 'pet-dialog'

    //  content
    const dialogContent = html`
        <style>
            .wrap {
                display: flex;
            }
            .image {
                width: 50%;
            }
            .image img {
                width: 100%;
            }
            .content {
                padding-left: 1em;
                max-width: 550px;
            }

            .price {
                font-size: 1.5em;
                font-weight: bold;
                color: var(--brand-color);
            }

            .wrap p strong {
              color: var(--brand-color);
            }

            .content h1 {
              color: var(--brand-color);
            }

            .content p {
              line-height: 170%;
            }

            .content sl-button {
              margin-right: 30px;
            }

            .donate p{
              display: inline-block;
            }
            .donate-btn{
              display: inline-block;
            }

            .wrap sl-button strong {
              color: var(--brand-color);
            }
            .contact-icon {
              color: var(--brand-color);
              display: inline;
            }

            /* RESPONSIVE - MOBILE ------------------- */
      @media all and (max-width: 375px){ 
        
      
      }

        </style>
            
        <div class="wrap">
            <div class="image">
                <img src="${App.apiBase}/images/pets/${this.image}" alt="${this.name}" />
                <div class="donate">
                  <p> <strong>Help animals like ${this.name} by making a donation</strong></p>
                  <sl-button class="donate-btn" href="/donate" @click="${this.menuClick}"><strong>Donate Now!</strong></sl-button>
                </div>
            </div>
            <div class="content">
                <h1>${this.name}</h1>
                <p>${this.breed}</p>
                <p class="price">$${this.price}</p>
                <p class="gender"> <strong> Gender: </strong> <span>${this.gender}</span></p>
                <p class="age"> <strong> Age: </strong> <span>${this.age}</span></p>
                <p class="about"> <strong> About: </strong> <span>${this.about}</span></p>
                <p>Updated: ${moment(this.createdAt).format('MMMM Do YYYY')}</p>

                <sl-button @click=${this.addFavHandler.bind(this)}>
                <sl-icon slot="prefix" name="heart-fill"></sl-icon>
                Add to Favourites
                </sl-button>

                <div class="contact-icon">
                  <sl-icon name="envelope-open"></sl-icon>
                  <a href="/contact" @click="${this.menuClick}"> <strong>Enquire about adopting ${this.name}</strong></a>
                </div>
            </div>
        </div>
    `
    render(dialogContent, dialogEl)

    //appeand 
    document.body.append(dialogEl)

    // show
    dialogEl.show()

    // on hide, delete element
    dialogEl.addEventListener('sl-after-hide', () => {
        dialogEl.remove()
    })
  }

  async addFavHandler(){    
    try {
      UserAPI.addFavPet(this.id)
      Toast.show('Pet added to favourites')
    }catch(err){
      Toast.show(err, 'error')
    }
  }
  
  render(){    
    return html`
    <style>
        .front-card h4{
            font-weight: normal;
        }

        .front-card h2 {
          color: var(--brand-color);
        }
    
    </style>
    
    <sl-card class="front-card"> 
        <img slot="image" src="${App.apiBase}/images/pets/${this.image}" />
        <h2>${this.name}</h2>
        <h4>${this.breed}</h4>
        <h4>$${this.price}</h4>
        <sl-button @click=${this.moreInfoHandler.bind(this)} >More Info</sl-button>
        <sl-icon-button name="heart-fill" label="Add to Favourites" @click=${this.addFavHandler.bind(this)}></sl-icon-button>
    </sl-card>
    `
  }
  
})