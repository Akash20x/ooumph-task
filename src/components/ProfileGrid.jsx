import { useState } from "react";
import Truth from "./Truth";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdContentPaste } from "react-icons/md";
import { RiCommunityLine } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";


const ProfileGrid = () => {

    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    const handleChange = (index) => {
        setSelectedTabIndex(index);
      };



      const options = [
        {
        icon: <FaPeopleGroup size={43}/>,
        name: "People"
        },
        {
        icon: <MdContentPaste size={43}/>,
        name: "Content"
        },
        {
        icon: <RiCommunityLine size={43}/>,
        name: "Community"
        },
        {
        icon: <BiSolidOffer size={43}/>,
        name: "Offer"
        }
    ]

      const suboptions = [
        {
        icon: "",
        name: "Truth"
        },
        {
        icon: "",
        name: "Fun"
        },
        {
        icon: "",
        name: "Debate"
        },
        {
        icon: "",
        name: "Opportunity"
        }
    ]

    const components = [Truth,Truth, Truth, Truth];

    const SelectedComponent = components[selectedTabIndex];
  
    

  return (
    <div className="pt-12">

    <div className="flex gap-12 justify-center">
    {options.map((option,index)=> (
         <div key={index} className="custom-tab py-2 px-4 flex flex-col justify-center items-center hover:text-[#FF0064]">
         <div className="">{option.icon}</div>
         <p className="text-sm leading-[21px] font-poppins text-[#000000] hover:text-[#FF0064]">{option.name}</p>
        </div>
    ))}
 

    </div>
      <div className=" flex gap-2 px-4 tracking-wide border-b-2 border-gray-300 my-6">
    {suboptions.map((option, index) => (
      <button
        key={index}
        onClick={() => handleChange(index)}
        className={`  py-2 px-4 ${selectedTabIndex === index ? ' text-[#DE0359] font-semibold border-b-2  border-[#DE0359] ' : ''}`}
        >
        {option.name}
      </button>
    ))}
  </div>
  <div>
    <SelectedComponent />
  </div> 
    </div>
  )
}

export default ProfileGrid
