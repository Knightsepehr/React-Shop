import React from 'react';

interface Props {
  imageSource: string;
  paragraphText: string;
  borderColor: string;
  imageSourceicon: string;
}

const AccountMenuItem: React.FC<Props> = ({ imageSource = "https://knightybyte.ir/dl/iran.svg",imageSourceicon = "https://knightybyte.ir/dl/iran.svg", paragraphText = "LoremIpsum", borderColor = "border-gray-600" }) => {
  return (
    <div className="account-menu-item">
      <div>
        <span className={`min-w-max border border-solid flex ${borderColor} p-6`}>
          <img src={imageSource} decoding="async" loading="lazy" width="100" height="100" alt="" />
        </span>
        <span className="flex justify-center gap-2">
          <img src={imageSourceicon} decoding="async" loading="lazy" width="20" height="20" alt="" />
          <p>{paragraphText}</p>
        </span>
      </div>
    </div>
  );
};

export default AccountMenuItem;
