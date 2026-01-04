import FastMarquee from "./marquee";
const Advertise = () => {
    return (
        <div className="py-10 my-10 md:my-20 md:py-20 border-t border-b border-gray-200">
            <FastMarquee
                items={[
                    "your Brand ✦",
                    "your Story ✦",
                    "your Future ✦",
                    "your World ✦",
                    "your Vision ✦",
                    "your Dream ✦",
                ]}
                className="text-4xl md:text-7xl syne text-black/40 overflow-hidden hover:text-[#9f8be7] transition-colors duration-500"
                pauseOnHover={false}
                speed={100}
            />
        </div>
    )
}
export default Advertise;