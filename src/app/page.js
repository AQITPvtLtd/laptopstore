import About from "@/components/homepage/About";
import Faq from "@/components/homepage/Faq";
import Laptops from "@/components/homepage/Laptops";
import Services from "@/components/homepage/Services";
import Slider from "@/components/homepage/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <About />
      <Services />
      <Faq />
      <Laptops />
    </div>
  );
}
