import { IoMdSearch } from 'react-icons/io';
import Logo from '../assets/logo.png'
import { IoHomeOutline } from "react-icons/io5";
import { FaPlus } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import Notification from '../assets/notification.svg'
import ProfileImage from '../assets/profile-image.jpeg'
import { GiHamburgerMenu } from 'react-icons/gi';

const SideBarContent = () => {
  return (
    <div className='border-2 border-gray-200 border-l-0 h-screen border-b-0 w-[12rem]'>
      <img src={Logo} alt='ooumph logo' className='w-[138px] h-[70px] ml-[8px] mr-[40px] mt-[22px] mb-[46px]' />
      <ul className='py-2 font-poppins'>
        <li className='flex px-6 py-2 gap-4 items-center'>
            <IoHomeOutline size={21}/>
            <span className='cursor-pointer tracking-custom'>Home</span>
        </li>
        <li className='flex px-6 py-2 gap-4 items-center'>
            <IoMdSearch size={21}/>
            <span className='cursor-pointer tracking-custom'>Search</span>
        </li>
        <li className='flex px-6 py-3 gap-4 items-center'>
            <FaPlus size={21}/>
            <span className='cursor-pointer tracking-custom'>Plus</span>
        </li>
        <li className='flex px-6 py-2 gap-4 items-center'>
            <MdOutlineMail size={21}/>
            <span className='cursor-pointer tracking-custom'>Messages</span>
        </li>
        <li className='flex px-6 py-2 gap-4 items-center'>
            <img src={Notification} width={21} height={21}/>
            <span className='cursor-pointer tracking-custom'>Notifications</span>
        </li>
        <li className='flex px-5 py-2 gap-2 items-center'>
            <img src={ProfileImage} width={36} height={36} className='rounded-full'/>
            <div className='flex flex-col'>
                <span className='text-base cursor-pointer tracking-custom'>Profile</span>
                <span className='text-xs text-orange-light'><span className='text-shadow-orange-primary'>Repo</span> <span className='text-black font-semibold text-shadow-black-primary'>999k</span></span>
            </div>
        </li>
        <li className='flex px-6 py-2 gap-4 items-center'>
            <GiHamburgerMenu size={21} />
            <span className='cursor-pointer tracking-custom'>Settings</span>
        </li>
      </ul>
    </div>
  )
}

export default SideBarContent
