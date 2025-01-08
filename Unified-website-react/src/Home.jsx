import React from 'react';
import img1 from './assets/img1.avif'
import img2 from './assets/img2.avif'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import './components/Home.css'

const Home = () => {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel"  data-bs-interval="4000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
      <h1 className="text-center mt-4">Welcome</h1>
    </div>
  );
};

export default Home;
