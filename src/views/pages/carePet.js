import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class CarePetView {
  init(){
    document.title = 'Caring for your Pet'    
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

.step {
  color: var(--brand-color);
}

/* ------------ SECTION 3 ---------- */

.section-three {
  display: flex;
}

.section-three div{
  width: 30%;
  margin: 50px;
}

.title2 {
  color: white;
  text-align: center;
  padding: 50px 0 0 50px;;
}

.colour-box {
  margin: -20px; /* top, right, bottom, left */
  background: var(--brand-color);
}

.section-three li {
  color: white;
  line-height: 2vw;
  /* padding-right: 100px; */
}

/* ------------ SECTION 4 ---------- */

.section-four h2 {
  padding: 0 0 50px 50px;;
}
.section-four p {
  width: 60%;
  font-size: 1.1em;
  text-align: center;
  margin: auto;
  line-height: 2vw;
  padding-bottom: 20px;
}
.section-four {
  height: 850px;
}

.section-four .videos p {
  width: 80%;
  padding: 20px 0;
}

.videos {
  display: flex;
  min-width: 100vw;
}

.videos div {
  width: 40vw;
}

.videos iframe {
  width: 34vw;
  height: 100%;
}

.end-text {
  text-align: center;
  line-height: 2vw;
  width: 70%;
  margin: auto;
  padding: 60px 0 20px 0;

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

.section-two {
  scroll-snap-align: end;
}
.section-three {
  scroll-snap-align: end;
}
.section-four {
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

  .section-three {
    display: block;
  }
  .section-three div{
  width: 90%;
}
  .section-three li {
    line-height: 4vw;
  }
  .section-three div {
    margin: 0 0 0 50px;
  }
  .section-three {
    padding-bottom: 50px;
  }

  .section-four p{
    line-height: 7vh;
    width: 80vw;
  }
  .section-four .videos p {
  width: 80%;
  /* padding: 20px 0; */
}
.section-four{
  width: 100vw;
  height: 700px;
}

.videos p{
  display: none;
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

  .section-three li {
    line-height: 7vw;
  }
  .section-three div{
  width: 80%;
  }
  .section-four{
  height: 900px;
}

.section-four .videos {
 display: inline-block;
}

.videos iframe {
  width: 100vw;
}

.end-text{
  margin-top: 75vh;
}
}


</style>

      <va-app-header title="Caring for your Pet" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content container">        
        <div class="hero-section">
          <img class="hero-image" src="/images/care-pet.jpeg" />
          <div class= "hero-content">
            <h1 class="anim-in hero-text"> Caring for your Pet</h1>
            <br>
            <p class="anim-in hero-text">
              Hi ${Auth.currentUser.firstName}! Whats the best way to care for your pet you ask?
              Responsible pet ownership means understanding what your pet needs and also being aware of what your responsibilities are to the community. Below you’ll find some simple and easy tips to take care of your new best friend.
            </p>
          </div>
            <div class="scroll scroll-down">
              <span class="scroll-dot"></span>
            </div>
        </div>

        <br>

          <h1 class="title"> Easy Steps for Caring for your Pet...</h1>

          <div class="section-two">
            <div class="step1">
              <sl-icon name="list-check"></sl-icon>
                <p class="step">Step 1</p>
                <h3><strong>Know what your pet needs</strong></h3>
                <p>Learn about your pet's specific physical and behavioural needs, to help keep them happy and healthy.</p>
            </div>
            <div class="step2">
              <sl-icon name="cash"></sl-icon>
                <p class="step"> Step 2</p>
                <h3> <strong>Get convered for unexpected vet bills</strong></h3>
                <p>Our Meow Pet Insurance may be able to assist with the cost of the very best veterinary treatment when you need it most.</p>
            </div>
            <div class="step3">
              <sl-icon name="calendar4-week"></sl-icon>
                <p class="step"> Step 3</p>
                <h3> <strong>Ongoing health care</strong></h3>
                <p>Make sure you have a regular worming plan in place.</p>
            </div>
          </div>

        <br>

        <div class= "colour-box">
          <h2 class="title2">Meows Tips for pet care:</h2>
          <div class="section-three">
            <div class="side1">
              <li>Learn about your pet's specific physical and behavioural needs - dietary, health, housing and general care.</li>
              <li>Provide appropriate and comfortable housing and shelter.</li>
              <li>Provide appropriate nutrition and access to clean drinking water.</li>
              <li>Exercise your pet regularly, according to their needs.</li>
              <li>Provide environmental enrichment to prevent boredom.</li>
            </div>
            <div class="side2">
            <li>Train your pet using kindness and reward-based training involving positive reinforcement – check out the RSPCA’s training videos and book.</li>
              <li>Provide socialisation, as appropriate for your type of pet.</li>
              <li>Take your pet to a vet whenever health or behaviour problems arise and ensure preventative health care is provided.</li>
              <li>Ensure pet cats and dogs are microchipped and talk to your vet about desexing.</li>
            </div>
            <div class="side3">
              <li>If required, groom your pet on a regular basis.</li>
              <li>Teach your family, friends and children how to interact with your pet.</li>
              <li>Find suitable boarding or pet-sitting facilities for your pet whilst on holidays.</li>
              <li>Check pet registration requirements for your area.</li>
              <li>Provide your pet with love and attention and commit to caring for them for their entire life.</li>
            </div>
          </div>
        </div>

        <br>

        <div class="section-four">
          <h2 class="title">Guide to understanding & training your pet:</h2>
          <p>These training videos will help you to live in harmony with your pet. It teaches consistent, rewards-based training to strengthen the bond between you and your pet and help them live a happy and fulfilling life. Covering a wide range of topics such as puppy training, establishing rules and teaching manners, environmental enrichment and solutions to common problems, it is comprehensive, but clear and easy to understand. Give your pet the chance to be their best by using these training videos to not only help you understand your pet, but to help your pet understand you.</p>
            <br>
            <div class="videos">
              <div>
                <iframe  src="https://www.youtube.com/embed/UcFQksTIVEI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p> Watch veterinarian Dr Katrina Warren’s simple tips to help your adopted dog settle in to their new home. Remember, it's a big step for you and your dog! The key is patience and lots of TLC.</p>
              </div>
              <div>
                <iframe  src="https://www.youtube.com/embed/7BGSBSOHBsQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>Watch veterinarian Dr Katrina Warren’s top tips on avoiding unwanted behaviour. Providing your dog with activities to keep their body and mind occupied will make all the difference.</p>
              </div>
              <div>
                <iframe  src="https://www.youtube.com/embed/DPf66G3hbs4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>Watch veterinarian Dr Katrina Warren's simple tips to help teach dogs to feel comfortable when they're by themselves.</p>
              </div>
            </div>
        </div> <!-- width="560" height="315" -->
        
        <p class="end-text">Unsure if getting a pet is the right option for you? You can always help by making a donation! Read more about how donating can help <a href="/donate">here.</a>
        </p>

        <div class="footer">
        <va-app-footer class="va-app-footer"></va-app-footer>
        </div>
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new CarePetView()