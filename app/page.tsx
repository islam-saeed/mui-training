import Categories from "@/components/Categories";
import ExploreCategory from "@/components/ExploreCategory";
import FlashSale from "@/components/FlashSale";
import Hero from "@/components/Hero";
import Top from "@/components/Top";
import Trending from "@/components/Trending";
import Slider from "@/components/Slider"
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <main>
      <Categories />
      <Hero />
      <FlashSale />
      <Trending />
      <Top />
      <ExploreCategory />
      <Slider />
      <ExploreCategory />
    </main>
  )
}
