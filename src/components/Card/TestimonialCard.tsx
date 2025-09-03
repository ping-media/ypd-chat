import { Quote, Star } from "lucide-react";
import Text from "../Text";
import { Card, CardContent } from "../ui/card";
import { formatNumber } from "@/lib/utils";
import Heading from "../Heading";

interface IUserDataProps {
  avatar: string;
  name: string;
  location: string;
}

interface ISlidesDataProps {
  message: string;
  rating: number;
  user: IUserDataProps;
  highlight: string;
}

const TestimonialCard = ({
  message,
  rating,
  user,
  highlight,
}: ISlidesDataProps) => {
  return (
    <Card variant={"glass"} className="!rounded-md h-full p-2">
      <CardContent className="p-2">
        <div className="flex items-center justify-between">
          <Quote className="rotate-180 size-8 fill-white" />
          <div className="flex items-center gap-2">
            <Star className="size-6 stroke-yellow-500 fill-yellow-500" />
            {formatNumber(rating)}
          </div>
        </div>

        <Text className="text-sm text-left my-4">{message}</Text>

        <div className="glass rounded-md p-2 mb-4">
          <Text className="text-left text-sm">{highlight}</Text>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-left">
            <Heading as="h6">{user.name}</Heading>
            <Text>{user.location}</Text>
          </div>
          <img src={user.avatar} alt="AVATAR" />
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
