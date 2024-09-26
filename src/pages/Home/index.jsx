import React, { useState } from 'react';
import bannerMobile from '../../assets/images/hero_banner_mobile.png';
import bannerTablet from '../../assets/images/hero_banner_tablet.png';
import bannerDesktop from '../../assets/images/hero_banner.png';
import SortBy from '../../components/SortBy/index.jsx';
import Filters from '../../components/Filters/index.jsx';
import { ProductsList } from '../../components/ProductsList/index.jsx';
import { ModalProvider } from '../../store/modal-context.jsx';
import { ModalOrder } from '../../components/LeadForm/index.jsx';
import FilterBy from '../../components/FilterBy';

function HomePage() {
  return (
    <ModalProvider>
    <main>
      <ModalOrder/>
      <div>
        <div>
          <picture>
            <source srcSet={bannerDesktop} media="(min-width: 1440px)" />
            <source srcSet={bannerTablet} media="(min-width: 768px)" />
            <source srcSet={bannerMobile} media="(max-width: 767px)" />
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
            <FilterBy />
            <SortBy />
          </div>
        </div>
      </div>
      <ProductsList />
    </main>
    </ModalProvider>
  );
}

export default HomePage;
