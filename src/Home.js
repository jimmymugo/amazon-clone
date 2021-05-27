import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Logitech G PRO X Wireless LIGHTSPEED Gaming Headset"
            price={199.00}
            rating={5}
            image="https://techshop.umich.edu/media/catalog/product/cache/9232439aac355664f9a5183e164472b6/8/7/871156_1.jpg"
          />
          <Product
            id="49538094"
            title="Netgear Nighthawk Ultra-High Speed Cable Modem (CM1000)"
            price={239.0}
            rating={4}
            image="https://techshop.umich.edu/media/catalog/product/cache/9232439aac355664f9a5183e164472b6/5/2/521000.png"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="iMac, 2020, 27-inch 5K display, i7, 2TB SSD, 32GB RAM, 4-Year AppleCare+ for Schools"
            price={98.99}
            rating={5}
            image="https://techshop.umich.edu/media/catalog/product/cache/8872124951f387c8ded3f228faa55bea/9/9/999ap145_alt1.png"
          />
          <Product
            id="3254354347"
            title="Apple TV HD (5th Gen), 32GB"
            price={598.99}
            rating={4}
            image="https://techshop.umich.edu/media/catalog/product/cache/9232439aac355664f9a5183e164472b6/5/1/510196.jpg"
          />
        </div>
        

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
      );
    }
    
    export default Home;
    
    