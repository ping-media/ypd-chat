import { ArrowRight } from "lucide-react";
import Heading from "../Heading";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { HomeCardList } from "@/lib/constant";
import useProductsession from "@/hooks/use-product-session";
import Spinner from "../loaders/spinner";

const HomeCard = () => {
  const { createSession, loading } = useProductsession();
  return (
    <Card variant={"glass"} className="!rounded-md p-2">
      <CardContent className="p-5">
        <Heading as="h3">Your Perfect Career Path Awaits</Heading>
        <div className="max-w-xl mx-auto mb-6">
          Join thousands of students who’ve discovered their true calling
          through our AI-powered career Clarity system. Your personalized
          journey starts now.
        </div>

        <Button variant={"dark"} onClick={createSession} disabled={loading}>
          {loading && <Spinner />}
          Discovered Your Career Clarity <ArrowRight />{" "}
        </Button>

        <ul className="leading-10 flex items-center w-full justify-between mt-6">
          {HomeCardList.map((list, idx) => {
            const Icon = list.icon;
            return (
              <li key={idx} className="flex items-center gap-2">
                <Icon className="size-4 md:size-5" /> {list.message}
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
