import React from 'react';

interface Props {
  flagLink: string;
  specialsLink: string;
  newProductsLink: string;
  bestSellerLink: string;
  contactUsLink: string;
  aboutUsLink: string;
  conditionsLink: string;
  shippingLink: string;
  faqLink: string;
  wrapsLink: string;
  carriersLink: string;
  accessoriesLink: string;
  forYouLink: string;
  kidsLink: string;
  saleLink: string;
  newLink: string;
}

const Footer: React.FC<Props> = ({
  flagLink,
  specialsLink,
  newProductsLink,
  bestSellerLink,
  contactUsLink,
  aboutUsLink,
  conditionsLink,
  shippingLink,
  faqLink,
  wrapsLink,
  carriersLink,
  accessoriesLink,
  forYouLink,
  kidsLink,
  saleLink,
  newLink,
}) => {
  return (
    <footer className="w-full flex flex-col mt-5">
      <div className="first py-3 px-8 flex flex-col items-center justify-center gap-4 bg-amber-50">
        <span className="text-center">
          <h3 className="textsm">Delivery Price</h3>
          <p className="text-xs">We ship our products to most countries in the World</p>
        </span>
        <div className="countries flex w-full items-center justify-evenly">
          <div className="country flex flex-col items-center justify-center">
            <span className="flag flex gap-4">
              <img src="https://knightybyte.ir/dl/iran.svg" decoding="async" loading="lazy" width="100" height="100" />
              <img src="https://knightybyte.ir/dl/iran.svg" decoding="async" loading="lazy" width="100" height="100" />
              <img src="https://knightybyte.ir/dl/iran.svg" decoding="async" loading="lazy" width="100" height="100" />
            </span>
            <p className="bold text-sm">Belgium,Netherlands,Germany</p>
            <p className="bold text-xs font-semibold">4.99 $</p>
            <a href={flagLink} className="text-xs">
              Free From 90 $
            </a>
          </div>
          <div className="country flex flex-col items-center justify-center">
            <span className="flag flex gap-4">
              <img src="https://knightybyte.ir/dl/iran.svg" decoding="async" loading="lazy" width="100" height="100" />
            </span>
            <p className="bold text-sm">European Union</p>
            <p className="bold text-xs font-semibold">4.99 $</p>
            <a href={flagLink} className="text-xs">
              Free From 90 $
            </a>
          </div>
          <div className="country flex flex-col items-center justify-center">
            <span className="flag flex gap-4">
              <img src="https://knightybyte.ir/dl/iran.svg" decoding="async" loading="lazy" width="100" height="100" />
            </span>
            <p className="bold text-sm">World Wide</p>
            <p className="bold text-xs font-semibold">30.99 $</p>
            <a href={flagLink} className="text-xs">
              Free From 200 $
            </a>
          </div>
        </div>
      </div>
      <div className="second px-8 flex flex-col items-center justify-center bg-purple-900 py-10">
        <p className="text-base text-white">OUR MOST VALUABLE BRANDS</p>
        <div className="brands flex w-full justify-evenly py-4">
          <img src="https://knightybyte.ir/dl/iran.svg" decoding="async" loading="lazy" width="100" height="100" />
          <img src="https://knightybyte.ir/dl/iran.svg" decoding="async" loading="lazy" width="100" height="100" />
          <img src="https://knightybyte.ir/dl/iran.svg" decoding="async" loading="lazy" width="100" height="100" />
          <img src="https://knightybyte.ir/dl/iran.svg" decoding="async" loading="lazy" width="100" height="100" />
          <img src="https://knightybyte.ir/dl/iran.svg" decoding="async" loading="lazy" width="100" height="100" />
          <img src="https://knightybyte.ir/dl/iran.svg" decoding="async" loading="lazy" width="100" height="100" />
        </div>
      </div>
      <div className="third px-8">
        <div className="footer-menus py-3 flex justify-between">
          <div className="about">
            <p className="pb-3 text-base">About</p>
            <ul className="text-xs flex flex-col gap-2">
              <li>
                <a href={specialsLink}>specials</a>
              </li>
              <li>
                <a href={newProductsLink}>newproducts</a>
              </li>
              <li>
                <a href={bestSellerLink}>Best Seller</a>
              </li>
              <li>
                <a href={contactUsLink}>contact us</a>
              </li>
              <li>
                <a href={aboutUsLink}>About us</a>
              </li>
              <li>
                <a href={conditionsLink}>conditions</a>
              </li>
              <li>
                <a href={shippingLink}>shipping</a>
              </li>
              <li>
                <a href={faqLink}>FAQ</a>
              </li>
            </ul>
          </div>
          <div className="shop">
            <p className="pb-3 text-base">Shop</p>
            <ul className="text-xs  flex flex-col gap-2">
              <li>
                <a href={wrapsLink}>Wraps</a>
              </li>
              <li>
                <a href={carriersLink}>Carriers</a>
              </li>
              <li>
                <a href={accessoriesLink}>Accessoriesr</a>
              </li>
              <li>
                <a href={forYouLink}>For You</a>
              </li>
              <li>
                <a href={kidsLink}>kids</a>
              </li>
              <li>
                <a href={saleLink}>sale</a>
              </li>
              <li>
                <a href={newLink}>new</a>
              </li>
            </ul>
          </div>
          <div className="join">
            <p className="pb-3 text-center text-base">Join The SFB community</p>
            <ul className="flex flex-col items-center text-xs gap-2">
              <button type="submit" className="w-64 rounded-full bg-blue-500 px-4 py-2 text-white">
                Sign up for NewsLetter
              </button>
              <li>
                <a href={aboutUsLink}>Try Our Mystery Box </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pays py-4 border-t-2 flex justify-between px-2">
          <span className="pays-1 flex gap-3">
            <img src="https://knightybyte.ir/dl/iran.svg" decoding="async" loading="lazy" width="50" height="50" />
            <img src="https://knightybyte.ir/dl/iran.svg" decoding="async" loading="lazy" width="50" height="50" />
            <img src="https://knightybyte.ir/dl/iran.svg" decoding="async" loading="lazy" width="50" height="50" />
            <img src="https://knightybyte.ir/dl/iran.svg" decoding="async" loading="lazy" width="50" height="50" />
          </span>
          <span className="pays-2  flex gap-3">
            <img src="https://knightybyte.ir/dl/iran.svg" decoding="async" loading="lazy" width="50" height="50" />
            <img src="https://knightybyte.ir/dl/iran.svg" decoding="async" loading="lazy" width="50" height="50" />
            <img src="https://knightybyte.ir/dl/iran.svg" decoding="async" loading="lazy" width="50" height="50" />
            <img src="https://knightybyte.ir/dl/iran.svg" decoding="async" loading="lazy" width="50" height="50" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;