import { useState } from "react";

const SendVibes = () => {
  const [value, setValue] = useState(3.5); // Initial value
  const max = 10;

  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const getPercentage = () => (value / max) * 100;

  return (
    <div className="my-12 flex mx-8 gap-4"> {/* Make the container relative and set width */}
      <button className="font-medium text-sm leading-[16px] font-poppins tracking-[1.4px] text-[#4D4D4D] capitalize bg-transparent bg-no-repeat shadow-profile-btn-2 rounded-2xl p-2" 
  style={{
    backgroundImage: 'linear-gradient(289deg, #F2F3F6 0%, #E5E6EC 100%)',
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
    backgroundClip: 'padding-box',
  }}>Send Vibe</button>
      <div className="relative w-[627px]">
 <input
        type="range"
        className="w-full slider-gradient-background  "
        id="rangeSlider"
        min="0"
        step="0.5"
        max={max}
        value={value}
        onChange={handleSliderChange}
      />
      <div
        className="slider-value absolute font-medium text-xl leading-[19px] font-poppins tracking-[0.66px] text-[#000000DE]"
        id="sliderValue"
        style={{
          left: `calc(${getPercentage()}% + 5px)`, // Adjust -15px based on thumb size
        }}
      >
        {value}
      </div>
      </div>
     
    </div>
  );
};

export default SendVibes;
