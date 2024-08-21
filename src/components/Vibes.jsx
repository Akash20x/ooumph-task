import VibeScore from "./VibeScore"

const VibeScoreList = [
    {
        vibeName:"IQ",
        value:"3.5",
        colors: [
            "#DA0157", "#CE015C", "#A7016F", "#8A0079", "#6E0182", "#610085", "#5B0087"
        ]
    },
    {
        vibeName:"Appeal",
        value:"4.0",
        colors: [
           "#FDF82A", "#FDEC2A", "#FDC52A", "#FCA829", "#FD9E2A", "#FC742A", "#F85E2A"
        ]
    },
    {
        vibeName:"Social",
        value:"4.2",
        colors: [
           "#05FBFE", "#1EFEFE", "#34F2FE", "#39DDFF", "#44B4FE", "#268FFC", "#076BF7"
        ]
    },
    {
        vibeName:"Humanity",
        value:"3.8",
        colors: [
           "#00FF1A", "#00D616", "#00D115", "#00C414", "#00B513", "#009B10", "#007E0D"
        ]
    }
]


const Vibes = () => {
  return (
    <div className="flex gap-8 justify-end w-5/6 mx-8 py-2">
        <div className="flex flex-col gap-2">
            <p className="text-[#000000DE] capitalize opacity-[0.7] font-poppins font-medium tracking-[1.3px]">(0.0 Vibes)</p>
            <h2 className="font-poppins font-bold text-4xl leading-[20px] tracking-[3.12px]">4.2</h2>
        </div>

        <div className="flex gap-4">
            {VibeScoreList.map((item, index) => (
                <VibeScore 
                    key={index}
                    name={item.vibeName}
                    value={item.value}
                    colors={item.colors}
                />
            ))}
                </div>

    </div>
  )
}

export default Vibes
