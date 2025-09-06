import { CircleCheck } from "lucide-react";
import Dot from "../animation-props/Dot";
import Heading from "../Heading";
import Text from "../Text";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

const PricingCard = ({
  name,
  highlight,
  price,
  recommended,
  features,
}: any) => {
  return (
    <Card
      variant={"glassLight"}
      className={`${recommended ? "!border-green-100" : ""}`}
    >
      <CardContent>
        <Dot />

        <Heading as="h4" className="!font-normal mt-5">
          {name}
        </Heading>
        <Text className="text-sm mb-5">{highlight}</Text>

        <Heading as="h2" className="!text-5xl">
          {typeof price === "string" ? (
            price
          ) : (
            <>
              ${price} <span className="text-base">/ per month</span>
            </>
          )}
        </Heading>

        <Button
          className="w-full border rounded-lg border-gray-300 my-5"
          variant={"glass"}
        >
          Get Started
        </Button>

        <Separator className="mb-5" />

        <Heading as="h5" className="mb-3">
          What you will get
        </Heading>

        <ul className="leading-8">
          {features.map((feature: string, indx: number) => (
            <li className="flex items-center gap-2" key={indx}>
              <CircleCheck className="size-4" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
