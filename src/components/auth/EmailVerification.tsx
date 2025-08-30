import { Button } from "@/components/ui/button";

export function EmailVerfication() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-3">
        <h1 className="text-center text-lg lg:text-xl">Email Sent</h1>
        <p className="text-center">
          Please check your email for instructions to verify your account.
        </p>
      </div>

      <Button variant={"dark"} className="w-full mt-6 py-5">
        Email Sent
      </Button>
    </div>
  );
}
