import About from "@/components/homepage/About";
import Animate from "@/components/homepage/Animate";
import Faq from "@/components/homepage/Faq";
import Laptops from "@/components/homepage/Laptops";
import Services from "@/components/homepage/Services";
import Slider from "@/components/homepage/Slider";
// import Why from "@/components/homepage/Why";

export default function Home() {
  return (
    <div>
      <Slider />
      <About />
      <Services />
      <Animate />
      {/* <Why /> */}
      <Faq />
      <Laptops />
    </div>
  );
}
