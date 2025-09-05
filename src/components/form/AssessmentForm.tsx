import OptionsCheckboxGroup from "../Input/OptionsCheckboxGroup";
import OptionsRadioGroup from "../Input/OptionsRadioGroup";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface IAssessmentFormProps {
  data: any;
}

const AssessmentForm = ({ data }: IAssessmentFormProps) => {
  return (
    <div className="dark:bg-white/10 dark:backdrop-blur-lg dark:border-white/10 dark:shadow-lg dark:shadow-black/10 p-3 rounded-md mt-3 mb-5">
      <h2 className="mb-2">Choose the correct answer to proceed!</h2>
      <Card variant={"glass"} className="!rounded-md">
        <CardContent className="px-1">
          <form onSubmit={(e) => e.preventDefault()}>
            {data &&
              data.map((item: any, index: number) => (
                <div
                  key={item.id}
                  className={`mb-5 pb-5 ${
                    index !== data.length - 1
                      ? "border-b dark:border-white/30"
                      : ""
                  }`}
                >
                  {item.type === "open_ended" ? (
                    <>
                      <Label className="mb-5">
                        {`Q${index + 1}. `}
                        {item.question}
                      </Label>
                      <Textarea className="resize-none outline-none min-h-28" />
                    </>
                  ) : item.type === "single_choice" ? (
                    <>
                      <Label className="mb-5">
                        {`Q${index + 1}. `}
                        {item.question}
                      </Label>
                      <OptionsRadioGroup options={item.options} />
                    </>
                  ) : (
                    <>
                      <Label className="mb-5">
                        {`Q${index + 1}. `}
                        {item.question}
                      </Label>
                      <OptionsCheckboxGroup options={item.options} />
                    </>
                  )}
                </div>
              ))}

            <div className="text-center mt-5">
              <Button variant={"theme"} type="submit">
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
