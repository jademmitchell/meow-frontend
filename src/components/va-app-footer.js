import { LitElement, html, css } from '@polymer/lit-element'
import {anchorRoute, gotoRoute} from './../Router'
import Auth from './../Auth'
import App from './../App'
import { render } from 'lit-html'

customElements.define('va-app-footer', class AppFooter extends LitElement {
    constructor(){
      super()    
    }

    firstUpdated(){
        super.firstUpdated()
    }

render(){
    return html`
    <style>
        /* ---------- adopted pets grid -----------*/

        .adopted-pets {
            margin: 20px 0 -22px -20px;
            width: 100vw; 
            position: relative;
            display: flex;
            align-items: stretch;
            justify-content: center;
            width: 100%;

        }
        .adopted-pets a{
            text-decoration: none;
        }

        .adopted-pets img{
           height: 190px;
           width: 190px;
           /* aspect-ratio: 1/1; */
           flex-shrink: 1;
            margin: -2px;
            object-fit: cover;
        }

        .adopted-pets a:hover {
            filter: brightness(40%);
        }
    
        .icon {
            position: absolute;
            /* margin-top: 50%; */
            left: 15px;
            transform: translate(50%, 80%);
            color: white;
            font-size: 80px;
        }


        /* ---------- footer -----------*/
        .app-footer {
            height: 180px;
            width: 102.5%;
            background: var(--brand-color);
            margin: 20px 0 -30px -20px; /* top, right, bottom, left */
            /* padding: 50px 0 0 0; */
            color: white;
        }

        .app-footer {
            display: flex;
        }

        .menu-links {
            display: flex;
            margin: 20px 150px;
            font-size: 12px;
            line-height: 1.5vw;
        }
        .menu-links a {
            color: white;
            text-decoration: none;
        }

        .menu-links a:hover {
            font-weight: bold;
            /* text-decoration: underline; */
        }
        .side1 {
            padding-right: 150px;
        }

        .logo-img {
            position:absolute;
            left:50%;
            transform: translate(-50%, 70%);    
        }
        
        .section3 p {
            width: 500px;
            font-size: 10px;
            margin-left: 40%;
            text-align: center;
            line-height: 1.5vw;
            padding-top: 20px
        }

        .socials {
            display: flex;
            margin: 20px 150px;
        }

        .socials sl-icon {
            padding: 20px 50px;
            font-size: 20px;
        }

        .socials sl-icon:hover {
            font-size: 25px;
        }

         /* RESPONSIVE - TABLET ------------------- */
      @media all and (max-width: 768px){       
        
        .adopted-pets img{
          width: 105px;
          height: 100px;
        }
        sl-icon {
            display: none;
        }

        .menu-links {
            display: none;
        }
        .app-footer {
            display: block;
            width: 110vw;
            margin-left: -20px;
        }
        .logo-img {
            transform: translate(-50%, 0%);    
        }
        .section3 p {
            font-size: 8px;
            margin: 80px 0 0 130px;
            text-align: center;
            line-height: 1.5vw;
            padding-top: 20px
        }
      }

      /* RESPONSIVE - MOBILE ------------------- */
      @media all and (max-width: 375px){ 

        .app-footer {
            width: 200vw;
            height: 100px;
            margin-left: -100px;
        } 

        .section3 p {
            display: none;
        }
       

        .adopted-pets img{
          width: 100px;
          height: 100px;
        }
      
    }

    </style>

        <div class="adopted-pets">
        <a href="https://www.petrescue.com.au/library/articles/arlo-s-special-journey-to-his-new-home"><img src="/images/adoptedPets/arlo.jpg" /> <sl-icon class="icon" name="file-earmark"></sl-icon></a>
        <a href="https://www.petrescue.com.au/library/articles/myer-s-happy-tail"><img src="/images/adoptedPets/myer.png" /> <sl-icon class="icon" name="file-earmark"></sl-icon></a>
        <a href="https://www.petrescue.com.au/library/articles/sven-benji-twice-the-love"><img src="/images/adoptedPets/benji.png" /> <sl-icon class="icon" name="file-earmark"></sl-icon></a>
        <a href="https://www.petrescue.com.au/library/articles/sophia-and-suki-find-their-missing-piece"><img src="/images/adoptedPets/natasha.jpg" /> <sl-icon class="icon" name="file-earmark"></sl-icon></a>
        <a href="https://www.petrescue.com.au/library/articles/mena-and-her-partner-grow-their-family"><img src="/images/adoptedPets/jean.png" /> <sl-icon class="icon" name="file-earmark"></sl-icon></a>
        <a href="https://www.petrescue.com.au/library/articles/oliver-s-purr-fect-ending"><img src="/images/adoptedPets/oliver.png" /> <sl-icon class="icon" name="file-earmark"></sl-icon></a>
        <a href="https://www.petrescue.com.au/library/articles/noosh-finds-her-missing-puzzle-piece"><img src="/images/adoptedPets/noosh.jpeg" /> <sl-icon class="icon" name="file-earmark"></sl-icon></a>
        <a href="https://www.petrescue.com.au/library/articles/petrescue-s-pet-owner-assistance-program-helps-pandora-stay-with-her-owner"><img src="/images/adoptedPets/pandora.png" /> <sl-icon class="icon" name="file-earmark"></sl-icon></a>
        </div>

    <div class="app-footer">
        <div class="section1">
            <div class="menu-links">
                <div class="side1">
                    <a href="/howToAdopt">How to Adopt</a> <br>
                    <a href="/whyAdopt">Why Adopt</a><br>
                    <a href="/carePet">Caring for your Pet</a>
                </div>
                <div class="side2">
                    <a href="/donate">Find your ideal Pet</a> <br>
                    <a href="/contact">Contact Us</a><br>
                    <a href="/profile">Profile</a>
                </div>
            </div>
            <div class="socials">
                <sl-icon name="facebook"></sl-icon> 
                <sl-icon name="instagram"></sl-icon> 
                <sl-icon name="youtube"></sl-icon>                
            </div>

        </div>

        <div class="logo-img">
            <img height="70px" class="hero-image" src="/images/logo-white.png" />
        </div>

        <div class="section3">
            <p>This website has been created as part of an assignment in an approved course of study for Curtin University and contains copyright material not created by the author. All copyright material used remains copyright of the respective owners and has been used here pursuant to Section 40 of the Copyright Act 1968 (Commonwealth of Australia). No part of this work may be reproduced without consent of the original copyright owners.</p>
        </div>
    
    </div>
    
    `
    }
})