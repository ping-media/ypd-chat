import BackButton from "@/components/Button/BackButton";
import PricingCard from "@/components/Card/PricingCard";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlansList } from "@/lib/constant";

const Pricing = () => {
  return (
    <Container className="py-10">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex justify-between">
          <BackButton />
          <div className="text-center">
            <Heading className="font-semibold !text-4xl mb-3">
              Choose Your Plan
            </Heading>
            <Text className="mb-7">
              Flexible plans that grow with you. Start for free, upgrade when
              ready.
            </Text>
          </div>

          <div className="hidden md:block"></div>
        </div>

        <Tabs
          className="w-full flex items-center justify-center"
          defaultValue="monthly"
        >
          <TabsList className="glass-with-shadow mb-5">
            <TabsTrigger
              value="monthly"
              className="px-4 py-2 rounded-md data-[state=active]:bg-green-400 data-[state=active]:text-white hover:cursor-pointer"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="annually"
              className="px-4 py-2 rounded-md data-[state=active]:bg-green-400 data-[state=active]:text-white hover:cursor-pointer"
            >
              Annually
            </TabsTrigger>
          </TabsList>

          <TabsContent value="monthly">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {PlansList.map((list, idx) => (
                <PricingCard {...list} key={idx} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="annually">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {PlansList.map((list, idx) => (
                <PricingCard {...list} key={idx} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Container>
  );
};

export default Pricing;
