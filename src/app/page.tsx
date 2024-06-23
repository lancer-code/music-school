import FeaturedCourses from "./components/FeaturedCourses";
import { Instructors } from "./components/Instructors";
import { Testimonials } from "./components/Testimonials";
import { StickyScrollRevealContent } from "./components/StickyScrollRevealContent";
import { HeroSection } from "./components/HeroSection";
import { Webinars } from "./components/Webinars";

export default function Home() {
  return (
    <>
      
      <main>
        <section>
          <HeroSection />
        </section>
      </main>
      <section>
        <FeaturedCourses />
      </section>
      <section>
        <StickyScrollRevealContent />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Webinars />
      </section>
      <section>
        <Instructors />
      </section>
     
    </>
  );
}
