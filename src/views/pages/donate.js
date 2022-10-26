import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class DonateView {
  init(){
    document.title = 'Donate'    
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
  width: 30%;
  margin: 50px;
  text-align: center;
  line-height: 2vw;
}

.section-two sl-icon {
  color: var(--brand-color);
  font-size: 80px;
}

.end-text {
  text-align: center;
  line-height: 2vw;
  width: 70%;
  margin: auto;
  padding-bottom: 20px

}

sl-button {
  padding: 20px;

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

  .hero-text {
    line-height: 4vh;
    width: 80vw;
  }

  .section-two{
    display: block;
    margin-left: 45%;
    transform: translate(-50%, 0%)
  }

  .section-two div {
    line-height: 7vw;
    width: 80vw;
    margin-left: -10%;
  }

  .end-text {
    line-height: 7vw;
    width: 80vw;
  }
}
/* RESPONSIVE - MOBILE ------------------- */
@media all and (max-width: 375px){
  
  .hero-text {
    line-height: 4vh;
    width: 120vw;
  }

  .section-two div {
    line-height: 7vw;
    width: 80vw;
    margin-left: -10%;
  }
}





    </style>
      <va-app-header title="Donate" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content container">        
        <div class="hero-section">
            <img class="hero-image" src="/images/donate.jpg" />
            <div class= "hero-content">
              <h1 class="anim-in hero-text"> Donate!</h1>
              <br>
              <p class="anim-in hero-text">
                These animals need you ${Auth.currentUser.firstName}!
                Donating will give pets the voice and platform to be seen, enabling rescue groups to advertise rescue pets and manage adoptions entirely for free with Australia’s most successful pet listing management platform. Donations also provide other vital welfare programs that support homeless pets including a food donation program.
              </p>
            </div>
            <div class="scroll scroll-down">
              <span class="scroll-dot"></span>
            </div>
          </div>

          <br>

          <div class="two">

          <h1 class="title"> Get started by selecting an amount below...</h1>

          <div class="section-two">
            
            <div class="step1">
              <sl-icon name="cash"></sl-icon>
              <h3><strong>One Time Donation</strong></h3>
              <p>When you give generously today, your donation will make a difference to over 50,000 animals that we treat every year. Your donation can help save lives.</p>
            </div>
            <div class="step2">
              <sl-icon name="calendar4-week"></sl-icon>
              <h3> <strong>Monthly Donation</strong></h3>
              <p>We need you more now than ever to stand side by side and save animals from a life of cruelty and neglect. Australians like you donate monthly to help Meow defend animals from the horrors of abuse.</p>
            </div>
            <div class="step3">
              <sl-icon name="shield-shaded"></sl-icon>
              <h3> <strong>Yearly Donation</strong></h3>
              <p>Because of your support, to date 744,102 pets have been adopted through Meow and we are not going to stop until every single pet has that chance. Donate using our simple and secure online form.</p>
            </div>
          </div>
          <div class="end-text">
            <p>Other ways to donate? Meow supports more than 1,000 rescue groups, shelters and pounds nationwide who list pets for adoption on our website, and some that would be very appreciative of goods like blankets or pet food. Take a look at our close partners, PetRescues <a href="https://www.petrescue.com.au/rescue_directory/map">Rescue Directory</a> to search for a group in your local area.</a>
            </p>
            <sl-button type="primary" href="https://www.petrescue.com.au/donations/tt2022-marley-short?amount=37&utm_campaign=tax_appeal_2022&utm_medium=banner&utm_source=nav">Donate Now!</sl-button>
          </div>
          </div>

          <div class="footer">
          <va-app-footer class="va-app-footer"></va-app-footer>
          </div>
        
       </div>      
    `
    render(template, App.rootEl)
  }
}


export default new DonateView()