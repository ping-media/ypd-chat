import Dot from "../animation-props/Dot";
import Heading from "../Heading";
import Text from "../Text";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const PricingCard = () => {
  return (
    <Card variant={"glass"}>
      <CardContent>
        <Dot />

        <Heading as="h4" className="!font-normal">
          Basic
        </Heading>
        <Text>Perfect to explore and get started</Text>

        <Heading as="h2">Free</Heading>

        <Button
          className="w-full border rounded-md border-gray-300"
          variant={"ghost"}
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
