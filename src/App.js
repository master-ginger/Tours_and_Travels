import React, {Component} from 'react';
import { Zoom } from 'react-awesome-reveal';
import Tada from 'react-reveal/Tada'
import { Fade } from 'react-reveal';
import Lottie from 'lottie-react';
import globe from './globe.json';
import vi from './visa.json';
import Hotel from './components/Hotel';

//import ImageGallery from "react-image-gallery";
//import { Swiper, SwiperSlide } from 'swiper/react';
//import 'swiper/css';

class App extends Component{
  render() {
    
    return (
      <div className=''>
        <header className='flex items-center justify-around h-24 bg-blue-500 text-white py-3 text-xl '>
          <div className='mx-10'><img src="./img/logo.png" alt="logo" className=' h-12'></img></div>
          <div><a href='Login.js'>Home</a></div>
          <div><a href='Login.js'>Contact</a></div>
          <div><a href="">Explore</a></div>
          
          <div className='flex mx-5'>
            <div className='mx-5'>Login</div>
            <div>Sign-up</div>
          </div>
          
        </header>

        <div className='flex '>
          <div className='w-1/2'><Lottie animationData={globe}></Lottie></div>
        <div className='w-1/2 nunita text-5xl text-slate-800 bg-white text-center h-20 my-10 py-48'>
          <Tada duration="2000">Explore the Paradise</Tada>
          <Zoom>
          <div className='text-center text-2xl mx-40 my-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate nostrum, aspernatur totam accusantium mollitia, tempore delectus voluptates fugiat, corrupti non? Similique officiis consectetur porro quo nisi iure animi deleniti!
          </div>
          </Zoom>
          </div>
          </div>
          
          <hr className='border-2 border-black mx-20 my-10'></hr>
          <div className=' nunita text-gray-800 text-center text-5xl mx-40 my-5'>
            This Year Ahead
            <div className='text-xl py-5'>Browse our recommended trips for each month</div>
        <Fade right delay="400"duration="  1000"><div className='flex items-center justify-center my-5'>
              <div><img src='./img/one.jpg' alt="jan" className='h-44 px-5 relative opacity-100 hover:opacity-50 '></img><text className='text-sm'>January</text></div>
              <div><img src='./img/two.jpg' alt="jan" className='h-44 relative opacity-100 hover:opacity-50'></img><text className='text-sm'>February</text></div>
              <div><img src='./img/three.jpg' alt="jan" className='h-44 px-5 relative opacity-100 hover:opacity-50'></img><text className='text-sm'>March</text></div>
              <div><img src='./img/four.jpg' alt="jan" className='h-44 relative opacity-100 hover:opacity-50 '></img><text className='text-sm'>April</text></div>
              <div><img src='./img/five.jpg' alt="jan" className='h-44 px-5 relative opacity-100 hover:opacity-50'></img><text className='text-sm'>May</text></div>
              <div><img src='./img/six.jpg' alt="jan" className='h-44 relative opacity-100 hover:opacity-50'></img><text className='text-sm'>June</text></div>
            </div></Fade>
           <Fade left delay="400"duration="1000"> <div className='flex items-center justify-center my-5'>
            <div> <img src='./img/seven.jpg' alt="jan" className='h-44 px-5 relative opacity-100 hover:opacity-50'></img><text className='text-sm'>July</text></div>
            <div>  <img src='./img/eight.jpg' alt="jan" className='h-44 relative opacity-100 hover:opacity-50'></img><text className='text-sm'>August</text></div>
            <div> <img src='./img/nine.jpg' alt="jan" className='h-44 px-5 relative opacity-100 hover:opacity-50'></img><text className='text-sm'>September</text></div>
            <div> <img src='./img/ten.jpg' alt="jan" className='h-44 relative opacity-100 hover:opacity-50'></img><text className='text-sm'>October</text></div>
            <div> <img src='./img/eleven.jpg' alt="jan" className='h-44 px-5 relative opacity-100 hover:opacity-50'></img><text className='text-sm'>November</text></div>
            <div>  <img src='./img/twelve.jpg' alt="jan" className='h-44 relative opacity-100 hover:opacity-50'></img><text className='text-sm'>December</text></div>
            </div></Fade>
            
          </div>
          <div className='bg-coasta text-white py-48 text-center font-bold my-7'> 
              <div className=' text-4xl'>A Message From Coasta Rica</div>
              <div className='py-9 text-2xl '>Pura vida from Costa Rica</div>
              <div className='text-2xl px-20 '>Enjoying the vibrant culture, breathtaking landscapes, and warm hospitality. Wish you were here to experience this paradise. ¡Hasta pronto</div>
            </div>
          <div className='text-center'>
            <div className='text-5xl  font-extrabold tracking-wider py-4 text-gray-700'>Incase You missed it</div>
            <div className='text-xl italic'>Read the latest travel stories</div>
            <div className='flex items-center justify-center py-10'>
              <Zoom direction='down' delay={500} duration={1000}>
              <div className=' w-96 border-2 px-2 border-black rounded-2xl mx-10 my-5 h-128 nunita bg-white'>
                <div className=' font-medium text-3xl p-3 italic '>Paris La la la</div>
                <div >-Edward Fernandes
                  <p className='px-2 py-2'>Had much fun Paris is undoubtedly a city that captivates with its timeless charm, iconic landmarks, and romantic ambiance  Additionally, exploring the quaint streets of Montmartre, indulging in French cuisine at local cafes, and cruising along the Seine River offer unforgettable experiences. However, visitors should be prepared for crowds at popular tourist sites and consider exploring off-the-beaten-path neighborhoods to discover hidden gems and immerse themselves in the authentic Parisian lifestyle.</p>
                </div>
                </div>
                </Zoom>
                <Zoom direction='down' delay={600} duration={1000}>
              <div className=' w-96 border-2 px-2 border-black rounded-2xl mx-10 my-5 h-128 nunita bg-white '>
                <div className=' font-medium text-3xl p-3 italic'>Majestic Bali</div>
                <div>-Robert Quirky
                  <p className='px-2 py-2'>Bali is a tropical paradise renowned for its stunning beaches, lush landscapes, and vibrant culture. From surfing in Kuta, exploring ancient temples like Uluwatu and Tanah Lot, to indulging in rejuvenating spa treatments and yoga retreats in Ubud, Bali offers a diverse range of experiences for every traveler. The island's picturesque rice terraces, cascading waterfalls, and volcanic landscapes provide breathtaking scenery and opportunities for adventure enthusiasts.</p>
                </div>
                </div>
                </Zoom>
                <Zoom direction='down' delay={700} duration={1000}>
              <div className=' w-96 border-2 px-2 border-black rounded-2xl mx-10  my-5 h-128 nunita bg-white'>
                <div className='font-medium text-3xl p-3 italic '>Dreamy Santorini</div>
                <div>
                  -John elton
                  <p className='px-2 py-2' >Santorini is a picturesque island paradise renowned for its stunning sunsets, whitewashed buildings, azure blue waters, and breathtaking caldera views. Exploring the charming villages of Oia, Fira, and Imerovigli provides visitors with opportunities to immerse themselves in the island's romantic ambiance, explore local shops, galleries, and cafes, and capture iconic photographs against the backdrop of the Aegean Sea. Overall had so much fun Thank you to the excellent tours and travels that made it possible. <br></br></p>
                </div>
                </div>
                </Zoom>
            </div>
          </div>
          
          <div className='flex py-10 mx-10'>

            <Fade left ><Hotel imgUrl={"./img/hotel1.jpg"} name="Mexican heights" address="Yemen road,Yemen" rating={8.5} review={"Excellent . 3,225 reviews"}/></Fade>
            <Fade top ><Hotel imgUrl={"./img/hotel2.jpg"} name="Azure House" address="United balad,Austria" rating={9.3} review={"Amazing . 5,284 reviews"}/></Fade>
            <Fade bottom ><Hotel imgUrl={"./img/hotel3.jpg"} name="Love Palace" address="Street 18,Olkhama" rating={8.8} review={"Worth It . 4,856 reviews"}/></Fade>
            <Fade right ><Hotel imgUrl={"./img/hotel4.jpg"} name="Hotel delulu" address="London" rating={8.1} review={"Best . 2564 reviews"}/></Fade>
          </div>

         <div className='border-2 shadow-lg shadow-slate-900 w-121 h-96 my-10 mx-14  bg-blue-300 '>
            <div className='h-full w-full flex justify-start items-center'>
              <div className=' mx-12 '><Lottie animationData={vi} className=' h-64'></Lottie></div>
              <div className='text-2xl  bg-blue-300 '>
                Get Instant Discounts
                <div className='font-thin'>Just Sign in to your account and explore the magic</div>
                <button className='border-4 border-white py-1 px-2 my-2 bg-blue-500 hover:bg-blue-700 rounded-md text-black hover:text-white'>Login</button>
              </div>
              
            </div>
            <div className=' bg-blue-800 flex justify-center my-4 py-5 text-xl text-white shadow-md shadow-slate-600 '>
                  <div><text className='text-3xl text-center font-bold '>Save Time, Save Money!</text>
                  <div className='font-thin my-1'>Sign Up and we will send you the best deals</div>
                  <input type='email' className=' w-60 h-8 'placeholder='Enter Email address'></input>
                  <button className='bg-blue-400 hover:bg-blue-900 border-2 border-white mx-1 px-1 rounded-sm'>Subscribe</button>
                  <div>
                      <a href="" className='text-white text-lg underline hover:no-underline px-3'>Home</a>
                      <a href="" className='text-white text-lg underline hover:no-underline'>Customer service help</a>
                      <a href="" className='text-white text-lg underline hover:no-underline px-3'>Feedback</a>
                  </div>
                  </div>
            </div>
         </div>

         
      </div>
      
    );
  }
}

export default App;