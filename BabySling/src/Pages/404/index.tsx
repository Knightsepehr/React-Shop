import React from 'react';

interface Props{
    homeurl:string;
    iconurl:string;
    urltext:string;
}


function notfound({homeurl,urltext = "Back To Home",iconurl}) : JSX.Element {
    return (
        <div className='flex justify-center items-center flex-col py-10 gap-5'>
            <h1>The Thing You are looking for does not exist :( </h1>
            <p className="text-xs">We apologize for the inconvenience...</p>
            <a href={`${homeurl}`} className="text-xs text-blue 400">{urltext}</a>
        </div>

    )
}
export default notfound;

