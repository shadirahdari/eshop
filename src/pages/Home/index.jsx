import React from 'react';
import bannerMobile from '../../assets/images/hero_banner_mobile.png';
import bannerTablet from '../../assets/images/hero_banner_tablet.png';
import bannerDesktop from '../../assets/images/hero_banner.png';
import SortBy from '../../components/SortBy/index.jsx';
import Filters from '../../components/Filters/index.jsx';
import { LeadForm } from '../../components/LeadForm/index.jsx';
import { ProductsList } from '../../components/ProductsList/index.jsx';
// eslint-disable-next-line import/namespace,import/no-extraneous-dependencies
import { useDispatch } from 'react-redux';

 function HomePage() {
   const dispatch = useDispatch();
   const toggleModal= () => {
     dispatch({type:'toggleModal'});
   }
  return (
    <main>
      <div>
        <div>
          <picture>
            <source srcSet={bannerDesktop} media="(min-width: 1440px)"/>
            <source srcSet={bannerTablet} media="(min-width: 768px)"/>
            <source srcSet={bannerMobile} media="(max-width: 767px)"/>
            <img
              src={bannerMobile}
              alt="screen of a mobile phone with a purple background"
              loading="lazy"
              className="w-full"
            />
          </picture>
        </div>
        <div className="px-5 lg:px-12 mx-auto mt-6 md:mt-8 mb-12">
          <div>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
              Mobile Phones & Accessories
            </h1>
            <p className="text-base lg:text-2xl w-full mt-3 md:mt-5 lg:w-9/12">
              Sapien elit ipsum suspendisse pellentesque netus viverra cursus
              aenean cursus. Et eleifend enim aliquet a sagittis tellus
              scelerisque faucibs.
            </p>
          </div>
          <div className="flex justify-between md:justify-start  gap-x-5 mt-12">
            <Filters/>
            <SortBy/>
          </div>
          <LeadForm/>
          <button
            aria-label="Close form"
            className="button text-3xl relative -top-3 md:static lg:relative lg:-top-4 hover:scale-125"
            onClick={() => toggleModal()}>
            Open
          </button>
        </div>
      </div>
      <ProductsList/>
    </main>
  );
 }

export default HomePage;
