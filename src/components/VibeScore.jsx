
const VibeScore = ({name, value, colors}) => {
  return (
    <div className="relative">
      <p className="font-poppins font-medium uppercase text-[#000000DE] tracking-[1.28px] text-base">{name}</p>

      <p className="absolute top-[3.4rem] left-1 font-poppins leading-[22px] font-semibold text-base">{value}</p>

        <div className="arc">
        {colors.map((color, index) => (
          <div
            key={index}
            className="circle"
            style={{ backgroundColor: color }}
          ></div>
        ))}
          
        </div>
    </div>
  )
}

export default VibeScore
