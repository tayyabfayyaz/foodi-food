import HeroSection from "./components/herosection";
import CatogorySection from "./components/catogory";
import SpecialFoodSection from "./components/specialfoodsection";
import ChefSection from "./components/chefsection";
import BlogSection from "./components/blogsection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CatogorySection />
      <SpecialFoodSection />
      <ChefSection />
      <BlogSection />
    </main>
  );
}
