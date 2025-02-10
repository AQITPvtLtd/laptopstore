import { CgScreen } from "react-icons/cg";
import { FaBatteryHalf, FaRegKeyboard } from "react-icons/fa6";
import { BsFan } from "react-icons/bs";
import { GiAutoRepair } from "react-icons/gi";
import { GrStorage } from "react-icons/gr";

const serviceData = [
    {
        id: 1,
        icon: <CgScreen size={50} />,
        img: "laptop.png",
        title: "Screen Replacement",
        content: "If your laptop screen is cracked, damaged, or displaying glitches, we offer professional screen replacement services. Our experts use high-quality, original screens to ensure your laptop looks and functions like new again."
    },
    {
        id: 2,
        icon: <FaBatteryHalf size={50} />,
        img: "batterybackup.png",
        title: "Battery Replacement",
        content: "A faulty battery can ruin your laptop’s performance. We provide quick and efficient battery replacement services with reliable, long-lasting batteries to restore your laptop's battery life and performance."
    },
    {
        id: 3,
        icon: <BsFan size={50} />,
        img: "fanreplacement.png",
        title: "Fan Replacement",
        content: "Overheating is a common issue in laptops, often caused by a damaged or malfunctioning fan. Our fan replacement service will help cool down your laptop and prevent damage to internal components, ensuring smooth operation."
    },
    {
        id: 4,
        icon: <FaRegKeyboard size={50} />,
        img: "keyboardreplacement.png",
        title: "Keyboard Replacement",
        content: "Sticky, unresponsive, or broken keys? We offer keyboard replacement services to ensure you have a comfortable and functional typing experience. Choose from various keyboard styles that match your laptop model."
    },
    {
        id: 5,
        icon: <GiAutoRepair size={50} />,
        img: "maintenance.png",
        title: "Regular Maintenance",
        content: "Keep your laptop running smoothly with our regular maintenance services. We perform cleaning, updates, and minor repairs to prevent future problems, extend the lifespan of your laptop, and optimize its performance."
    },
    {
        id: 6,
        icon: <GrStorage size={50} />,
        title: "Laptop Upgrades (RAM & SSD)",
        content: "Speed up your laptop with our RAM and SSD upgrade service. Get faster boot times and improved performance."
    }
];
export default serviceData;