import OptionsRadioGroup from "../Input/OptionsRadioGroup";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";

interface IAssessmentFormProps {
  data: any;
}

const AssessmentForm = ({ data }: IAssessmentFormProps) => {
  return (
    <div className="dark:bg-white/10 dark:backdrop-blur-lg dark:border-white/10 dark:shadow-lg dark:shadow-black/10 p-3 rounded-md mt-3">
      <h2 className="mb-2">Choose the correct answer to proceed!</h2>
      <Card variant={"glass"} className="">
        <CardContent className="px-1">
          <form>
            {data &&
              data.map((item: any, index: number) => (
                <div
                  key={item.id}
                  className={`mb-3 pb-3 ${
                    index !== data.length - 1
                      ? "border-b dark:border-gray-200"
                      : ""
                  }`}
                >
                  <Label className="mb-2">
                    {`Q${item.order}. `}
                    {item.text}
                  </Label>
                  <OptionsRadioGroup options={item.options} />
                </div>
              ))}

            <div className="text-center mt-5">
              <Button variant={"dark"} type="submit">
                Submit Assessment
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssessmentForm;
