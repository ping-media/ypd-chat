import UserAvatar from "@/components/animation-props/UserAvatar";
import HomeCard from "@/components/Card/HomeCard";
import Carousel from "@/components/carousel/Carousel";
import TestimonialCarousel from "@/components/carousel/TestimonialCarousel";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import HomeHeader from "@/components/layout/HomeHeader";
import Text from "@/components/Text";
import { images, quotes, testimonials } from "@/lib/constant";

const Home = () => {
  return (
    <Container className="md:w-[95%] lg:w-[98%]">
      <HomeHeader />
      <UserAvatar image={images.avatar} className="max-w-md mx-auto" />

      <div className="mt-8 w-full md:w-[80%] lg:w-[85%] mx-auto text-center">
        <Heading>Welcome to CareerVerse™</Heading>

        <div className="max-w-4xl mx-auto mt-3">
          <Text>
            I am your AI companion, here to guide you through a transformative
            journey of self-discovery and growth. Together, we'll explore the
            depths of your thoughts, unlock hidden potential, and navigate the
            path toward your highest self.
          </Text>
        </div>

        <div className="max-w-2xl mx-auto mt-8">
          <Carousel data={quotes} />
        </div>

        <div className="mt-5">
          <Heading as="h3" className="mb-5">
            CareerVerse™ in Their Words
          </Heading>

          <TestimonialCarousel slides={testimonials} />
        </div>

        <div className="mt-10">
          <HomeCard />
        </div>
      </div>
    </Container>
  );
};

export default Home;
