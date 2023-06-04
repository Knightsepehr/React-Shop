import React from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
  size: string;
  bgcolor:string;
  txtcolor:string;
};

const YellowButton: React.FC<ButtonProps> = ({ text, onClick, size = "w-64",txtcolor = "text-black", bgcolor = "bg-yellow-400",}) => {
  return (
    <button
      type="submit"
      className={`rounded-full py-2 px-4 ${size} ${bgcolor} ${txtcolor}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default YellowButton;
