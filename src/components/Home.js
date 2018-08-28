import React from 'react';
import style from './Landing.css'
const Landing = () => (

  <div class="home">
  <section className="home">
  <h1 className="hero-title">Turn up the music!</h1>

     <div class="row">
       <div class="col span_1_of_3">
         <h2 className="main-point">Choose your music</h2>
         <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
       </div>
        <div class="col span_2_of_3">
         <h2 className="main-point">Unlimited, streaming, ad-free</h2>
         <p class="point-description">No arbitrary limits. No distractions.</p>
       </div>
       <div class="col span_3_of_3">
         <h2 className="main-point">Mobile enabled</h2>
         <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
         </div>
         </div>
    </section>
    </div>
);

export default Landing;
