import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class WhyAdoptView {
  init(){
    document.title = 'Why Adopt?'    
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
      <va-app-header title="Why Adopt?" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content container">        
      <div class="hero-section">
          <img class="hero-image" src="/images/why-adopt.jpeg" />
          <div class= "hero-content">
            <h1 class="anim-in hero-text"> Why Adopt</h1>
            <br>
            <p class="anim-in hero-text">
              These animals need you ${Auth.currentUser.firstName}!
              Every year, Meow provides shelter to thousands of animals in need of a good home. By choosing adoption, you’ll not only have the chance to make a friend for life, but you’ll be giving an animal a second chance.
            </p>
          </div>
            <div class="scroll scroll-down">
              <span class="scroll-dot"></span>
            </div>
        </div>

        <br>

        <div class="two">

        <h1 class="title"> Reasons to adopt from Meow...</h1>

        <div class="section-two">
          
          <div class="step1">
            <sl-icon name="dice-2"></sl-icon>
            <h3><strong>A Second Chance</strong></h3>
            <p>Wonderful pets come through our doors every day for a wide range of different reasons, through no fault of their own. By adopting an animal in need, you’ll truly be giving a second chance to someone who needs it.</p>
          </div>
          <div class="step2">
            <sl-icon name="search"></sl-icon>
            <h3> <strong>Find your Perfect Match</strong></h3>
            <p> Meows staff really get to know the animals in our adoption centres, so we can help you meet and fall in love with the pet who’s right for you!</p>
          </div>
          <div class="step3">
            <sl-icon name="suit-heart"></sl-icon>
            <h3> <strong>Pets are well looked after</strong></h3>
            <p>All of Meows animals undergo health and behaviour assessments, are fed a nutritious and healthy diet, and all dogs and cats are desexed, microchipped, and vaccinated.</p>
          </div>
          <div class="step4">
            <sl-icon name="cash"></sl-icon>
            <h3> <strong>Supporting Meow</strong></h3>
            <p>Every dollar of your adoption fee, as well as all donations helps us care for other animals, as well as investigating and prosecuting animal cruelty and educating the community about responsible pet ownership.</p>
          </div>
        </div>

        <p class="end-text">If you want to find out more about why you should choose adoption, visit our friends over at <a href="https://www.rspca.org.au/blog/2021/why-adoption-best-option">RSPCA</a> Or if you’re ready to meet your new best friend, <a href="/">take a look at who we currently have waiting for a home!</a>
        <br> Read about how to care for your adopted pet <a href="/carePet">here.</a>
        </p>

        </div>

        <div class="footer">
        <va-app-footer class="va-app-footer"></va-app-footer>
        </div>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new WhyAdoptView()