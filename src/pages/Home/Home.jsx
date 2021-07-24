import React from "react";
import Button from "../../shared/component/Button/Button";
import bannerimage from "../../assets/images/banner.png";
import IconMenu from "../../components/shared/IconMenu/IconMenu";
import ShowcasePhoto from "../../components/shared/ShowcasePhoto/ShowcasePhoto";
import IcTraveler from "../../assets/icons/ic_traveler.png";
import IcTreasure from "../../assets/icons/ic_treasure.png";
import IcCities from "../../assets/icons/ic_cities.png";
import Mostpicked1 from "../../assets/images/image-mostpicked-1.jpg";
import Mostpicked2 from "../../assets/images/image-mostpicked-2.jpg";
import Mostpicked3 from "../../assets/images/image-mostpicked-3.jpg";
import Mostpicked4 from "../../assets/images/image-mostpicked-4.jpg";
import Mostpicked5 from "../../assets/images/image-mostpicked-5.jpg";
import Category1 from "../../assets/images/image-category-1.jpg";
import Category2 from "../../assets/images/image-category-2.jpg";
import Category3 from "../../assets/images/image-category-3.jpg";
import Category4 from "../../assets/images/image-category-4.jpg";
import Category5 from "../../assets/images/image-category-5.jpg";
import Category6 from "../../assets/images/image-category-6.jpg";
import Category7 from "../../assets/images/image-category-7.jpg";
import Category8 from "../../assets/images/image-category-8.jpg";
import Category9 from "../../assets/images/image-category-9.jpg";
import Category10 from "../../assets/images/image-category-10.jpg";
import Category11 from "../../assets/images/image-category-11.jpg";
import Category12 from "../../assets/images/image-category-12.jpg";
import Review from "../../components/shared/Review/Review";

const Home = () => {
  return (
    <>
      <div className="flex flex-col my-10 mx-10 sm:my-20 md:mx-14 xl:mx-32 2xl:mx-96 sm:flex-row justify-between">
        <div className="flex flex-col justify-between">
          <div className="text-3xl sm:text-4xl font-bold text-colorPrimary leading-relaxed ">
            Forget Busy Work,
            <br /> Start Next Vacation
          </div>
          <div className="text-colorText">
            We provide what you need to enjoy your
            <br /> holiday with family. Time to make another
            <br /> memorable moments.
          </div>
          <div className="mt-8 flex md:mt-8 lg:mt-0">
            <Button>Show Me Now</Button>
          </div>
          <div className="mt-8 flex md:mt-8 lg:mt-0">
            <IconMenu icon={IcTraveler} amount="80,408" title="traveler" />
            <IconMenu icon={IcTreasure} amount="862" title="treasure" />
            <IconMenu icon={IcCities} amount="1,492" title="cities" />
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:justify-center flex flex-col">
          <img src={bannerimage} alt="banner"></img>
        </div>
      </div>
      <h1 className="mx-10 md:mx-14 xl:mx-32 2xl:mx-96 text-xl text-colorPrimary font-medium">
        Most Picked
      </h1>
      <div className="flex flex-col my-5 mx-10 md:mx-14 xl:mx-32 2xl:mx-96 sm:flex-row justify-between">
        <div className="md:mr-3 lg:mr-5">
          <ShowcasePhoto
            form1
            photo={Mostpicked1}
            price={50}
            name="Blue Origin Fams"
            origin="Jakarta, Indonesia"
          />
        </div>
        <div className="hidden md:flex md:flex-col">
          <div className="md:flex md:gap-x-3 lg:gap-x-5 xl:gap-x-7">
            <ShowcasePhoto
              form2
              photo={Mostpicked2}
              price={22}
              name="Ocean Land"
              origin="Bandung, Indonesia"
            />
            <ShowcasePhoto
              form2
              photo={Mostpicked3}
              price={856}
              name="Stark House"
              origin="Malang, Indonesia"
            />
          </div>
          <div className="md:flex md:mt-4 lg:mt-5 md:gap-x-3 lg:gap-x-5 xl:gap-x-7">
            <ShowcasePhoto
              form2
              photo={Mostpicked4}
              price={62}
              name="Vinna Vill"
              origin="Malang, Indonesia"
            />
            <ShowcasePhoto
              form2
              photo={Mostpicked5}
              price={72}
              name="Bobox"
              origin="Medan, Indonesia"
            />
          </div>
        </div>
      </div>
      <h1 className="mx-10 md:mx-14 xl:mx-32 2xl:mx-96 text-xl text-colorPrimary font-medium">
        Houses with beauty backyard
      </h1>
      <div className="flex flex-col sm:flex-row my-5 mx-10 md:mx-14 xl:mx-32 2xl:mx-96 justify-between gap-x-4">
        <ShowcasePhoto
          form3
          isPopular
          photo={Category1}
          name="Tabby Town"
          origin="Gunung Batu, Indonesia"
        />
        <ShowcasePhoto
          form3
          photo={Category2}
          name="Anggana"
          origin="Bogor, Indonesia"
        />
        <ShowcasePhoto
          form3
          photo={Category3}
          name="Seattle Rain"
          origin="Jakarta, Indonesia"
        />
        <ShowcasePhoto
          form3
          photo={Category4}
          name="Wodden Pit"
          origin="Wonosobo, Indonesia"
        />
      </div>
      <h1 className="mx-10 md:mx-14 xl:mx-32 2xl:mx-96 text-xl text-colorPrimary font-medium">
        Hotels with large living room
      </h1>
      <div className="flex flex-col sm:flex-row my-5 mx-10 md:mx-14 xl:mx-32 2xl:mx-96 justify-between gap-x-4">
        <ShowcasePhoto
          form3
          photo={Category5}
          name="Green Park"
          origin="Tangerang, Indonesia"
        />
        <ShowcasePhoto
          form3
          photo={Category6}
          name="Anggana"
          origin="Madiun, Indonesia"
        />
        <ShowcasePhoto
          form3
          photo={Category7}
          name="Seattle Rain"
          origin="Bandung, Indonesia"
        />
        <ShowcasePhoto
          form3
          isPopular
          photo={Category8}
          name="Wodden Pit"
          origin="Kemang, Indonesia"
        />
      </div>
      <h1 className="mx-10 md:mx-14 xl:mx-32 2xl:mx-96 text-xl text-colorPrimary font-medium">
        Apartments with kitchen set
      </h1>
      <div className="flex flex-col sm:flex-row my-5 mx-10 md:mx-14 xl:mx-32 2xl:mx-96 justify-between gap-x-4">
        <ShowcasePhoto
          form3
          photo={Category9}
          name="PS Wood"
          origin="Depok, Indonesia"
        />
        <ShowcasePhoto
          form3
          photo={Category10}
          name="One Five"
          origin="Jakarta, Indonesia"
        />
        <ShowcasePhoto
          form3
          isPopular
          photo={Category11}
          name="Minimal"
          origin="Bogor, Indonesia"
        />
        <ShowcasePhoto
          form3
          photo={Category12}
          name="Stays Home"
          origin="Wonosobo, Indonesia"
        />
      </div>
      <div className="flex sm:flex-row my-20 mx-10 md:mx-14 xl:mx-32 2xl:mx-96">
        <Review />
      </div>
    </>
  );
};

export default Home;
