import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class  HowToAdoptView {
  init(){
    document.title = 'How to Adopt'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`

    <style>

      /* ------------ HERO SECTION ---------- */

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
        line-height: 2vw;
      }

      .hero-section p {
        width: 70%;
        font-size: 1.1em;
      }


      /* ------------ SECTION 2 ---------- */

      .title {
        text-align: center;
        color: var(--brand-color);
        margin-top: 2em;
      }

      .section-two {
        display: flex;
      }

      .section-two div {
        width: 20%;
        margin: 50px;
        text-align: center;
        line-height: 2vw;
      }

      .section-two sl-icon {
        color: var(--brand-color);
        font-size: 80px;
      }

      .step {
        color: var(--brand-color);
      }

      .end-text {
        text-align: center;
        line-height: 2vw;
        width: 70%;
        margin: auto;
        padding-bottom: 20px

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

      .hero-section {
        scroll-snap-align: start end;
      }

      .two {
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

        .hero-image {
           height: 100vh;
        }

        .hero-text{
          line-height: 4vh;
          width: 80vw;
        }

        .section-two{
          display: block;
        }

        .section-two div{
        line-height: 7vw;
        width: 80vw;
        margin-left: 10%;
        }
      }
      

      /* RESPONSIVE - MOBILE ------------------- */
      @media all and (max-width: 375px){ 
        .hero-text{ 
          width: 120vw;
          line-height: 4vh;
        }

        .section-two div {
        line-height: 7vw;
        width: 80vw;
      }
      }

      .end-text {
        /* line-height: 4vw; */
        width: 100vw;
      }


    </style>

      <va-app-header title="How to Adopt" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content container">        
        <div class="hero-section">
          <img class="hero-image" src="/images/how-to-adopt.jpeg" />
          <div class= "hero-content">
            <h1 class="anim-in hero-text"> How to Adopt</h1>
            <br>
            <p class="anim-in hero-text">
              Hi ${Auth.currentUser.firstName}!
              Choosing the right pet is exciting! Use Meow to view the many wonderful pets waiting for adoption at locations across Australia. All animals have been health and behaviour assessed and are ready for their new homes. Dogs and cats are also desexed, microchipped and vaccinated to help give them the best possible fresh start.
              By adopting from Meow, not only are you giving a new home to an animal in need, but your support will help Meow care for many more animals.
            </p>
          </div>
            <div class="scroll scroll-down">
              <span class="scroll-dot"></span>
            </div>
        </div>

        <br>

      <div class="two">

        <h1 class="title"> Easy steps for adopting from Meow...</h1>

        <div class="section-two">
          
          <div class="step1">
            <sl-icon name="journal-check"></sl-icon>
            <p class="step">Step 1</p>
            <h3><strong>Plan</strong></h3>
            <p>Is your lifestyle suited to providing daily care, love and attention? Upfront costs and ongoing expenses, like food and vet bills, also need to be considered.</p>
          </div>
          <div class="step2">
            <sl-icon name="search"></sl-icon>
            <p class="step"> Step 2</p>
            <h3> <strong>Search</strong></h3>
            <p>Use Meow to check out our available pets. All animals have been health and behaviour assessed, and ready for their furever home.</p>
          </div>
          <div class="step3">
            <sl-icon name="chat-dots"></sl-icon>
            <p class="step"> Step 3</p>
            <h3> <strong>Contact</strong></h3>
            <p>Once you’ve found the pet you’d like to welcome into your family, contact us. Make sure you state the name of the animal you are looking at well make an appointment for you to stop by.</p>
          </div>
          <div class="step4">
            <sl-icon name="geo-alt"></sl-icon>
            <p class="step"> Step 4</p>
            <h3> <strong>Visit</strong></h3>
            <p>Visit the shelter to speak with the staff, meet the animals and prepare to introduce your new best friend to their forever home!</p>
          </div>
        </div>

        <p class="end-text"> Read about why you should adopt <a href="/whyAdopt">here.</a></p>

      </div>

        <va-app-footer class="va-app-footer"></va-app-footer>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new  HowToAdoptView()