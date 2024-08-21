import TagImage from "../assets/tag-image.png"
import GridImg from "../assets/truth-image-1.png"

const tags = ['Mood', 'IQ', 'Appeal', 'Social',  'IQ', 'Appeal',  'Social', 'IQ', 'Appeal',  'Social' ]

const gridImages = [
    GridImg,
    GridImg,
    GridImg
]

const Truth = () => {
  return (
    <>


    <div className="flex flex-wrap gap-4 my-4">
   {tags.map((item, index)=> (
        <div className="bg-gray-300 rounded-md w-fit flex px-2 py-1 gap-2 items-center custom-btn-background shadow-profile-tags" key={index}>
        <img src={TagImage} className="rounded-full w-[32px] h-[32px] border border-[#00B9FF]" />
        <span className="font-medium text-sm leading-[21px] font-poppins tracking-normal text-[#000000] capitalize opacity-30">{item}</span>
      </div>
      ))}
   </div>
    <div className="flex overflow-hidden">
    {gridImages.map((img,index)=> (
            <img src={img} className=" w-[381px] h-[381px]" key={index}/>
        ))}
    </div>
      
        </>

  )
}

export default Truth
