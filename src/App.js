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
          <a href='/shop' className='nav-link'>SHOP</a>
          <a href='/trends' className='nav-link'>TRENDS</a>
          <a href='/more' className='nav-link'>MORE</a>
        </div>


      </div>
      <div className='home-container'>
        <div className='home-image-all'>
          <div className='home-text'>
          <div id='home-image-textsmoll'> <strong>-</strong> UNLEASH YOUR STYLE  <strong>-</strong> </div>
            <div id='home-image-textBig'>Elevate Your Look with the Latest Fashion Trends</div>
            <div id='home-image-button'>
            <button>WATCH THE RUNWAY</button>
              <button>EXPLORE MORE</button>

            </div>


          </div>
        </div>
        <div className='home-container-image'>
        <img src='https://static.vecteezy.com/system/resources/previews/024/903/858/non_2x/beautiful-women-in-fashionable-clothing-exude-elegance-generated-by-ai-free-photo.jpg'></img>
        </div>
        <div className='home-container-image-text1'>
          <div id='home-container-image-text1-text'>
          <div id='thenia1'>Discover the <br></br> Essence of Modern<br></br> Fashion</div>


          </div>
          <div id='home-container-image-text1-image'>
          <img src='https://media.istockphoto.com/id/1307568521/photo/its-the-denim-that-does-it-for-me.jpg?s=612x612&w=0&k=20&c=0RQfpn8VJxXl6sO4aUehTsPvyYKGPwVwz1EdJRBU_Nw='></img>
          </div>

        </div>
        <div id='what-bakers-love-text'>What Fashion Enthusiasts Adore
        </div>
        <div className='home-container-4-imazhet'>
          <div className='home-container-4-imazhet-1'>
          <img src='https://cdn.cliqueinc.com/posts/289802/stand-studio-289802-1603822687846-promo.700x0c.jpg'></img>
            <div>Stand Studio</div>
            <button>SHOP THE LOOK</button>
          </div>
          <div className='home-container-4-imazhet-2'>
          <img src='https://www.rogervivier.com/medias/RVCM-751-IMG-1.jpg?context=bWFzdGVyfHJvb3R8MTk3NjY3M3xpbWFnZS9qcGVnfGhhZS9oMjcvODg2MzE4OTA3Mzk1MC5qcGd8MDc1NjU4MzNlYzQ3ZTg4OGFlYmEwMjM0OWRhZmRhNGVhMGZlOGM5OGUyNDEwNWE5MjA5ZDljMmM4MGNjODBjOA'></img>
            <div>Roger vivier


            </div>
            <button>EXPLORE COLLECTION</button>

          </div>
          <div className='home-container-4-imazhet-3'>
            <img src='https://i.ebayimg.com/images/g/TAYAAOSwmTNjyiA1/s-l1600.jpg'></img>
            <div>Nike


            </div>
            <button>EXPLORE THE LATEST</button>

          </div>
          <div className='home-container-4-imazhet-4'>
            <img src='https://katewaterhouse.com/wp-content/uploads/2023/11/Kate-Waterhouse_Oaks-day_Zimmermann-dress_Ezara-J-bow_Gucci-heels-9.jpg'></img>
            <div>Zimmermann dress


            </div>
            <button>SHOP THE LOOK</button>

          </div>

        </div>
        <div className='home-container-image-text2'>
          <div id='home-container-image-text2-text'>
          <div id='teksti-autorit2'><strong>-</strong> LATEST ARRIVALS  <strong>-</strong></div>
            <div id='thenia2'> Must-Haves for <br></br> Every Fashionista
            </div>

            <div id='tekst-pershkrues2'>(Trendy Styles to Elevate Your Wardrobe)</div>
          </div>
          <div id='home-container-image-text2-image'>
          <img src='https://media.glamourmagazine.co.uk/photos/64fee6d1e61534371fb08029/16:9/w_1920,h_1080,c_limit/ALEX%20best%20online%20clothing%20stores%20110923%20GETTYIMAGES-1472741323%20COPY2_L.jpg'></img>
          </div>

        </div>
        <div className='home-container-image-text3'>
          <div id='home-container-image-text3-image'>
          <img src='https://www.stylebysavina.com/wp-content/uploads/2022/03/best-minimalist-fashion-bloggers-2022-scaled.jpg'></img>
          </div>

          <div id='home-container-image-text3-text'>
          <div id='teksti-autorit3'><strong>-</strong> TRENDSETTER'S PICK  <strong>-</strong></div>
            <div id='thenia3'>Discover the Elegance <br></br> 
            </div>
            <div id='buton3div'>
            <button>EXPLORE THE LOOK</button>

            </div>
          </div>

        </div>
      </div>
      <div className="learn-more-section">
      <h2>Explore Fashion</h2>
      <p>Welcome to our fashion hub where style meets sophistication. At our Fashion House, we curate the latest trends</p>
      <p>Our commitment to quality has been unwavering since our inception, and we invite you to explore the art and science of fashion with us. </p>
      <p>fashion enthusiasts and discover the joy of expressing yourself through the latest styles and trends.</p>

      </div>
      <form action="https://formsubmit.co/arsihoxha23@gmail.com" method="POST">

        <div id="contact">
          <div id="contacte-first">Contact</div>
          <div id="contacte-sec">
          <p>Have a question or want to collaborate?</p>
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
