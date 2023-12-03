import './App.css';
import React from 'react';
import kingArthurImage from './imazhet/king-arthur-baking@2x.png';
function App() {
  const toggleMenu = () => {
    const menu = document.getElementById('navigation');
    menu.classList.toggle('menu-open');
  };

  return (
    <div className="App">
      <div className='up-container'>
        <div id='up-container-id-logo'>
        </div>
        <div id='navigation' className='sticky'>
          <img src={kingArthurImage} alt="King Arthur Baking" />

          <a href='/' className='nav-link'>HOME</a>
          <a href='/recipe' className='nav-link'>RECIPES</a>
          <a href='/more' className='nav-link'>More</a>
        </div>


      </div>
      <div className='home-container'>
        <div className='home-image-all'>
          <div className='home-text'>
            <div id='home-image-textsmoll'> <strong>-</strong> KEEP RISING  <strong>-</strong> </div>
            <div id='home-image-textBig'>By Your Side for Every Honey Since 2010</div>
            <div id='home-image-button'>
              <button>WATCH THE VIDEO</button>
              <button>LEARN MORE</button>

            </div>


          </div>
        </div>
        <div className='home-container-image'>
        <img src='https://www.kingarthurbaking.com/sites/default/files/inline-images/holiday-gift-guide.png'></img>
        </div>
        <div className='home-container-image-text1'>
          <div id='home-container-image-text1-text'>
            <div id='thenia1'>Explore the <br></br> world of Mexican<br></br> sweet breads</div>


          </div>
          <div id='home-container-image-text1-image'>
          <img src='https://www.kingarthurbaking.com/sites/default/files/styles/tile_full_2x/public/2023-10/Pan-Dulce-Conchas_0119-1.jpg?itok=VKFsmXhS'></img>
          </div>

        </div>
        <div id='what-bakers-love-text'>What bakers love
        </div>
        <div className='home-container-4-imazhet'>
          <div className='home-container-4-imazhet-1'>
          <img src='https://www.kingarthurbaking.com/sites/default/files/inline-images/vanilla_0.png'></img>
            <div>PURE VANILLA EXTRACT</div>
            <button>SHOP NOW</button>
          </div>
          <div className='home-container-4-imazhet-2'>
          <img src='https://www.kingarthurbaking.com/sites/default/files/inline-images/100656_ParchmentC20-4_0.png'></img>
            <div>HALF-SHEET BAKING PARCHMENT


            </div>
            <button>SHOP NOW</button>

          </div>
          <div className='home-container-4-imazhet-3'>
            <img src='https://www.kingarthurbaking.com/sites/default/files/inline-images/210485_Silicone-Cookie-Mat%202_0.png'></img>
            <div>COOKIE MAT


            </div>
            <button>SHOP NOW</button>

          </div>
          <div className='home-container-4-imazhet-4'>
            <img src='https://www.kingarthurbaking.com/sites/default/files/inline-images/209102_CranberrySconeMixMiniPanSet_0.png'></img>
            <div>CRANBERRY-ORANGE SCONE MIX SET


            </div>
            <button>SHOP NOW</button>

          </div>

        </div>
        <div className='home-container-image-text2'>
          <div id='home-container-image-text2-text'>
            <div id='teksti-autorit2'><strong>-</strong> PRODUCTS  <strong>-</strong></div>
            <div id='thenia2'>Bigotes de <br></br> Azúcar
            </div>

            <div id='tekst-pershkrues2'>(Sugared Mustache Pan <br></br> Dulce)</div>
          </div>
          <div id='home-container-image-text2-image'>
          <img src='https://www.kingarthurbaking.com/sites/default/files/styles/card_wide/public/2023-10/MicrosoftTeams-image.png?itok=LoahEghF'></img>
          </div>

        </div>
        <div className='home-container-image-text3'>
          <div id='home-container-image-text3-image'>
          <img src='https://www.kingarthurbaking.com/sites/default/files/styles/card_wide/public/2023-10/Polvorones_0539.jpg?itok=fb8zUJrr'></img>
          </div>

          <div id='home-container-image-text3-text'>
            <div id='teksti-autorit3'><strong>-</strong> BAKE OF THE WEEK  <strong>-</strong></div>
            <div id='thenia3'>Polvorones
            </div>
            <div id='buton3div'>
            </div>
          </div>

        </div>
      </div>
      <div className="learn-more-section">
        <h2>Learn More</h2>
        <p>Welcome to our bakery where passion meets tradition. At King Arthur Baking, we strive to provide you with the finest ingredients and knowledge to elevate your baking experience.</p>
        <p>Our commitment to quality has been unwavering since 1790, and we invite you to explore the art and science of baking with us. Join our community of bakers and discover the joy of creating delicious treats from scratch.</p>
      </div>
      <form action="https://formsubmit.co/arsihoxha23@gmail.com" method="POST">

        <div id="contact">
          <div id="contacte-first">Contact</div>
          <div id="contacte-sec">
            <p>Have a question or want to work together?</p>
            <div class="contact-forms">
              <input id="emri" class="inputE" type="text" name="name" placeholder="Your Name" />
              <input id="email" class="inputM" type="email" name="email" placeholder="Your Email" />
              <textarea id="textarea" class="inputMESA" name="message" placeholder="Your Message"></textarea>
              <button class="submit-button">Send</button>
            </div>
          </div>
        </div>

      </form>
      <a href="https://formsubmit.co/el/{arsihoxha23@gmail.com}" target="_blank"></a>

    </div>

  );
}

export default App;
