import React from 'react';
import bannerMobile from '../../assets/images/hero_banner_mobile.png';
import bannerTablet from '../../assets/images/hero_banner_tablet.png';
import bannerDesktop from '../../assets/images/hero_banner.png';
import { Button } from '../../components/Button/index.jsx';
import Select from '../../components/Select/index.jsx';

function HomePage() {
  return (
    <main>
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
          <div className="flex md:justify-start gap-x-5 mt-12">
            <Button color="brightOutlined" size="filter" className="py-2">
              <p className="px-4 relative bg-no-repeat bg-filter-pos md:bg-filter-pos-md">
                Filter by
              </p>
            </Button>
            {/*  <Button
              color="brightOutlined"
              size="mostPopular"
              className="pl-9 pr-1.5 bg-sort relative bg-no-repeat bg-sort-pos"> */}
            <Select />
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
