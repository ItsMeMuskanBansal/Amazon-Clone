import React from "react";
import "./home.css";
import banner from "../../Assets/banner.jpg";
import Product from "./Product";
import book from "../../Assets/Atomic habits.jpg";
import asus from "../../Assets/asus.jpg";
import firebolt from "../../Assets/firebolt.jpg";
import kors from "../../Assets/kors.jpg";
import fossil from "../../Assets/fossil.jpg";
import car from "../../Assets/car.jpg";
import bike from "../../Assets/bike.jpg";
import phone from "../../Assets/phone.jpg";
import sam from "../../Assets/sam.jpg";

const home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={banner} />

        <div className="home__row">
          <Product
            id="12345"
            title="Atomic Habits"
            price={293.25}
            image={book}
            rating={4}
          />
          <Product
            id="12346"
            title="Asus Vivobook 15 Oled"
            price={72990.41}
            image={asus}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="12347"
            title="Echo Dot (3rd Gen)"
            price={3499.75}
            image={firebolt}
            rating={5}
          />
          <Product
            id="12348"
            title="Michael Kors Gen 6"
            price={27995.62}
            image={kors}
            rating={4}
          />
          <Product
            id="12349"
            title="Fossil"
            price={23995.85}
            image={fossil}
            rating={3}
          />
          <Product
            id="1239"
            title="realme GT NEO 3T"
            price={24990.65}
            image={phone}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="12350"
            title="METRO TOY'S "
            price={868.12}
            image={car}
            rating={3}
          />
          <Product
            id="12351"
            title="Nexus Product Bike"
            price={13999.99}
            image={bike}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="12351"
            title="Samsung 123.9cm (49') Gaming Monitor "
            price={135000.25}
            image={sam}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default home;
