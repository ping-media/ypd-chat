import PricingCard from "@/components/Card/PricingCard";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Pricing = () => {
  return (
    <Container className="py-10">
      <div className="w-full flex flex-col items-center justify-center">
        <Heading className="font-semibold mb-5">Choose Your Plan</Heading>
        <Text className="mb-7">
          Flexible plans that grow with you. Start for free, upgrade when ready.
        </Text>

        <Tabs defaultValue="account">
          <TabsList className="glass-with-shadow">
            <TabsTrigger
              value="account"
              className="px-4 py-2 rounded-md data-[state=active]:bg-green-400 data-[state=active]:text-white"
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="px-4 py-2 rounded-md data-[state=active]:bg-green-400 data-[state=active]:text-white"
            >
              Password
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account">
            <PricingCard />
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </Container>
  );
};

export default Pricing;
