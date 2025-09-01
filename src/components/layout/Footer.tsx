import { WEB_NAME } from "@/lib/utils";
import Text from "../Text";

const Footer = () => {
  return (
    <footer className="px-4 md:px-0 py-3 w-full">
      <Text className="text-sm text-center">
        Powered by {WEB_NAME}
        <sup className="text-[0.6rem]">TM</sup> | &copy;{" "}
        {new Date().getFullYear()}
      </Text>
    </footer>
  );
};

export default Footer;
