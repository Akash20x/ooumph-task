import ProfileImage from "../assets/ironman.png"
import { IoBagSharp } from "react-icons/io5";
import { MdHome } from "react-icons/md";


const ProfileDetails = () => {
  return (
    <div className="flex w-5/6 mx-14 gap-[6rem]">
    <div className="w-[20rem] flex flex-col gap-6">
        <img src={ProfileImage} className="w-[185px] h-[185px]"/>
        <p className="font-poppins font-normal leading-[16px] text-lg tracking-[0.81px] text-[#00000080] capitalize"><span className="leading-[36px] font-poppins font-medium text-3xl tracking-[2.16px] text-[#000000] uppercase">70%</span> Vibes Match</p>
    </div>
    <div>
    <div className="flex gap-[8rem] items-center pb-4">
        <div>
            <h3 className="font-poppins font-semibold leading-[32px] text-xl">IronMan Fanpage</h3>
            <p className="font-poppins font-normal text-xl leading-[36px] tracking-[0.14px] text-[#000000CC]">@ironmanisbest</p>
        </div>
        <button className="font-semibold text-base leading-6 font-poppins tracking-[0.32px] text-[#00A2FF] bg-[#F5F5F5] shadow-profile-btn-1 rounded-3xl py-2 px-4">Join Now</button>
    </div>
    <p className="flex gap-8">
    <span className="font-poppins font-medium text-base leading-6 tracking-[2.4px] text-[#000000] capitalize opacity-50">Vibers: 5.2K</span>
    <span className="font-poppins font-medium text-base leading-6 tracking-[2.4px] text-[#000000] capitalize opacity-50">Posts: 25</span>
     </p>
    <div className="flex bg-transparent bg-custom-gradient bg-no-repeat bg-[length:100%_100%] w-[321px] rounded-3xl p-2 gap-2 my-4">
        <div className="flex ml-[2rem] gap-4">
        <div className="text-center">
            <p className="font-bold text-2xl leading-13px font-poppins tracking-normal text-[#000000CC]">15</p>
            <p className="text-[#000000CC] tracking-normal">Inner</p>
        </div>
        <div className="text-center side-border">
            <p className="font-bold leading-13px font-poppins text-2xl text-[#000000CC] tracking-normal opacity-70">2.3k</p>
            <p className="text-[#000000CC] tracking-normal opacity-70">Outer</p>
        </div>
        <div className="text-center">
            <p className="font-bold text-2xl leading-13px font-poppins text-[#9c9c9ccc] tracking-normal opacity-40">15</p>
            <p className="text-[#000000CC] tracking-normal opacity-40">Universe</p>
        </div>
        </div>
     
    </div>
    <p className="font-normal text-base leading-6 font-poppins tracking-[0.29px] text-[#000000CC] opacity-80 py-8">Greatest superhero of all the time. Perfect combination of intelligence and looks.</p>
    <div className="flex gap-4">
        <div className="flex items-center gap-2">
        <IoBagSharp size={16} />
            <p className="font-light text-sm leading-[20px] font-poppins tracking-[1.4px] text-[#000000DE] capitalize">CEO,Ooumph</p>
        </div>
        <div className="flex items-center gap-2">
        <MdHome size={18} /> 
            <p className="font-light text-sm leading-[20px] font-poppins tracking-[1.4px] text-[#000000DE] capitalize">Lucknow,India</p>
        </div>
    </div>
    </div>
    
      
    </div>
  )
}

export default ProfileDetails
