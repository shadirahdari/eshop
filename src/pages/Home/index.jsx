import React, { useState } from 'react';
import bannerMobile from '../../assets/images/hero_banner_mobile.png';
import bannerTablet from '../../assets/images/hero_banner_tablet.png';
import bannerDesktop from '../../assets/images/hero_banner.png';
import SortBy from '../../components/SortBy/index.jsx';
import FilterBy from '../../components/FilterBy';
import { ProductsList } from '../../components/ProductsList/index.jsx';
import { ModalProvider } from '../../store/modal-context.jsx';
import { ProductsContext } from './constants.jsx';
import { ModalOrder } from '../../components/ModalOrder/index.jsx';
import FilterContent from "../../components/FilterBy/FilterContent.jsx";
import SortByOptions from "../../components/SortBy/SortByOptions.jsx";
import { SortProvider } from "../../store/sortby-context.jsx";


function HomePage() {
  const [filters, setFilters] = useState({
    Type: [],
    Brand: [],
    Color: [],
    Price: 0
  });
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState('popular');


  return (
    <ModalProvider>
      <ProductsContext.Provider value={{ sortType, setSortType, filters, setFilters, products, setProducts }}>
        <main>
          <ModalOrder />
          <div>
            <picture>
              <source srcSet={bannerDesktop} media="(min-width: 1440px)" />
              <source srcSet={bannerTablet} media="(min-width: 768px)" />
              <source srcSet={bannerMobile} media="(max-width: 767px)" />
              <img
                src={bannerMobile}
                alt="screen of a mobile phone with a purple background"
                loading="lazy"
                className="w-full max-h-[480px]"
              />
            </picture>
          </div>
          <div className="px-5 lg:px-8 mx-auto mt-6 md:mt-8 mb-12">
            <div>
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
                Mobile Phones & Accessories
              </h1>
              <p className="text-base lg:text-2xl w-full mt-3 md:mt-5 lg:w-9/12">
                Explore our range of phones and grab the best deals before they’re gone!

                Discover Premium Accessories to Match Your Style!
              </p>
            </div>
            <SortProvider>
              <div className="flex justify-between md:justify-start gap-x-5 mt-16 lg:hidden">
                <FilterBy />
                <SortBy />
              </div>
              <div className="flex mt-16 justify-center ">
                <aside className="w-[300px] hidden lg:block">
                  <p className="text-sm font-bold font-medium text-zinc-900 mb-4">Sort By</p>
                  <SortByOptions isDesktop={true} handleSelect={setSortType} />
                  <FilterContent />
                </aside>
                <ProductsList />
              </div>
            </SortProvider>
          </div>

        </main>
      </ProductsContext.Provider>
    </ModalProvider>
  );
}

export default HomePage;
