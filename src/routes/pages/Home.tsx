import UserAvatar from "@/components/animation-props/UserAvatar";
import Carousel from "@/components/carousel/carousel";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import HomeHeader from "@/components/layout/HomeHeader";
import Text from "@/components/Text";
import { ScrollArea } from "@/components/ui/scroll-area";
import { images, quotes } from "@/lib/constant";

const Home = () => {
  return (
    <Container className="md:w-[95%] lg:w-[98%]">
      <ScrollArea className="w-full">
        <HomeHeader />
        <UserAvatar image={images.avatar} className="max-w-md mx-auto" />

        <div className="mt-8 max-w-3xl mx-auto text-center">
          <Heading>Welcome to CareerVerse™</Heading>
          <Text>
            I am your AI companion, here to guide you through a transformative
            journey of self-discovery and growth. Together, we'll explore the
            depths of your thoughts, unlock hidden potential, and navigate the
            path toward your highest self.
          </Text>

          <div className="mt-5">
            <Carousel data={quotes} />
          </div>

          <div className="mt-5">
            <Heading as="h3">CareerVerse™ in Their Words</Heading>
          </div>
        </div>
      </ScrollArea>
    </Container>
  );
};

export default Home;
