import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface IBackButtonProps {
  className?: string;
}

const BackButton = ({ className }: IBackButtonProps) => {
  const navigate = useNavigate();
  return (
    <Button
      variant={"outline"}
      onClick={() => navigate(-1)}
      className={cn("px-0 py-1", className)}
    >
      <ArrowLeft className="size-5" />
    </Button>
  );
};

export default BackButton;
