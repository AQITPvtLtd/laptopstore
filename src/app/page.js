import About from "@/components/homepage/About";
import Services from "@/components/homepage/Services";
import Slider from "@/components/homepage/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <About />
      <Services />
    </div>
  );
}
