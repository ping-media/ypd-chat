import Heading from "@/components/Heading";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight } from "lucide-react";

const Setup = () => {
  const points: string[] = [
    "1-on-1 guidance sessions with certified mentors",
    "Personalized career assessment and goal mapping",
    "Clarity on career streams, courses, and industry trends",
    "Tailored advice for both academic and non-academic paths",
    "Reports you can download and share",
  ];

  return (
    <ScrollArea className="h-full">
      <Heading as="h2" className="text-center">
        Career Vision
      </Heading>
      <Text className="mb-5 text-center">
        Start here if you're looking to gain clarity, explore options, and align
        with your true potential.
      </Text>

      <Text className="text-justify mb-3">
        Struggling to choose the right career path? Whether you're a student
        exploring possibilities or a parent guiding your child, our Career
        Clarity Mentors are here to help.Get personalized guidance to uncover
        your strengths, understand your interests, and align with opportunities
        that match your potential.
      </Text>

      <Heading as="h4">What You'll Get:</Heading>

      <ul className="text-left list-disc pl-4 mb-3">
        {points.map((item, idx) => (
          <li key={idx}>
            <Text>{item}</Text>
          </li>
        ))}
      </ul>

      <Heading as="h4">Who Can Apply:</Heading>

      <Text>
        Students : Discover your interests, strengths, and career options early.
      </Text>

      <Text>
        Parents : Get expert support in shaping your child’s future with
        confidence.
      </Text>

      <div className="text-center mt-5">
        <Button variant={"dark"} className="w-3/5">
          Start Career Vision <ArrowRight />
        </Button>
      </div>
    </ScrollArea>
  );
};

export default Setup;
