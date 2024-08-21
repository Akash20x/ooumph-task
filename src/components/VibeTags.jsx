import { FaPlus } from "react-icons/fa"
import TagImage from "../assets/tag-image.png"

const tags = ['Sexy', 'Amazing', 'Outstanding', 'Sexy', 'Amazing', 'Outstanding']

const VibeTags = () => {
  return (
    <div className="flex gap-4 items-center">
      <FaPlus size={21} className="opacity-80" />
   <div className="flex flex-wrap gap-4">
   {tags.map((item, index)=> (
        <div className="bg-gray-300 rounded-md w-fit flex px-2 py-1 gap-2 items-center custom-btn-background shadow-profile-tags" key={index}>
        <img src={TagImage} className="rounded-full w-[32px] h-[32px] border border-[#00B9FF]" />
        <span className="font-medium text-sm leading-[21px] font-poppins tracking-normal text-[#000000] capitalize opacity-30">Amazing</span>
      </div>
      ))}
   </div>
      
    
    </div>
  )
}

export default VibeTags
