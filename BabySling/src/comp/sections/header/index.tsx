import React, { useState } from 'react';

interface HeaderProps {
  searchUrl: string;
  helpUrl: string;
  blogUrl: string;
  logoUrl: string;
  wrapsUrl: string;
  carriesUrl: string;
  accessoriesUrl: string;
  foryouUrl: string;
  kidsUrl: string;
  saleUrl: string;
  newUrl: string;
  mysteryUrl: string;
  langUrl: string;
  accountUrl: string;
  cartUrl: string;
}

const Header: React.FC<HeaderProps> = ({ searchUrl, helpUrl, blogUrl, logoUrl,wrapsUrl,carriesUrl,accessoriesUrl,accountUrl,cartUrl,kidsUrl,foryouUrl,saleUrl,newUrl,mysteryUrl,langUrl}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showbanner, setshowbanner] = useState(true);
    logoUrl = "https://programonaut.b-cdn.net/wp-content/uploads/2022/07/programonaut-logo-180x180.png";
    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        window.location.href = `${searchUrl}${searchTerm}`;
    };
    const bannerClick = () =>{
        setshowbanner(false);
    };
  return (
    <section className="header">
        <header className="px-8 pb-3">
        <div className="first-row flex justify-between">
            <div className="left flex gap-5 justify-start items-center w-1/3">
            <div className="relative text-gray-600">
                <form onSubmit={handleSearch}>
                <input
                    type="search"
                    name="search"
                    placeholder="Search"
                    className="bg-blue-50 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                    <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    style={{ enableBackground: 'new 0 0 56.966 56.966' }}
                    xmlSpace="preserve"
                    width="512px"
                    height="512px"
                    >
                    <path
                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                    />
                    </svg>
                </button>
                </form>
            </div>
            <a href={helpUrl}>Help Me</a>
            <a href={blogUrl}>Blog</a>
            </div>
            <div className="middle flex-grow flex justify-center">
            <img src={logoUrl} alt="Logo" />
            </div>
            <div className="right justify-end flex items-center gap-5 w-1/3">
            <a href={langUrl}>English</a>
            <a href={accountUrl}>My Account</a>
            <a href={cartUrl}>Cart</a>
            </div>
        </div>
        <div className="second flex justify-center items-center gap-7 ">
            <a href={wrapsUrl}>Wraps</a>
            <a href={carriesUrl}>Carriers</a>
            <a href={accessoriesUrl}>Accessories</a>
            <a href={foryouUrl}>For You</a>
            <a href={kidsUrl}>Kids</a>
            <a href={saleUrl}>Sale</a>
            <a href={newUrl}>New</a>
            <a href={mysteryUrl}>Mystery Box</a>
        </div>
        </header>
        {showbanner &&         
        <div className="banner  bg-purple-900 py-1 text-center flex items-center px-4">
            <p className="text-white text-xs flex-grow">Free Shipping This Week Only !</p>
            <svg id="bannerx" className='cursor-pointer' fill="white" height="10x" width="10px" viewBox="0 0 460.775 460.775" onClick={bannerClick}>
                <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
            </svg>
        </div>
        }
    </section>
  );
};

export default Header;