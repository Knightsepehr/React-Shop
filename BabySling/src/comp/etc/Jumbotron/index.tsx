import React from 'react';

interface Props {
  pageTitle: string;
  pageText: string;
  pageAddress: string;
  pageaddresstext:string;
}

const Jumbotron: React.FC<Props> = ({ pageTitle, pageText, pageAddress,pageaddresstext }) => {
  return (
    <div className="pagetitle bg-amber-50 flex flex-col justify-center items-center py-3 gap-2">
      <h1 className='text-lg'>{pageTitle}</h1>
      <p className='text-xs'>{pageText}</p>
      <a href={pageAddress} className="text-xs">{pageaddresstext}</a>
    </div>
  );
};

export default Jumbotron;
