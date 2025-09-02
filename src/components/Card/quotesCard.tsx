import Text from "../Text";
import { Card, CardContent } from "../ui/card";

const QuotesCard = ({ message, name }: { message: string; name: string }) => {
  return (
    <Card variant={"glass"} className="!rounded-md">
      <CardContent>
        <Text>{message}</Text>

        <Text className="text-[var(--color-green-40)]">{name}</Text>
      </CardContent>
    </Card>
  );
};

export default QuotesCard;
