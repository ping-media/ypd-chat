import { LogOut } from "lucide-react";
import Text from "../Text";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/authSlice/AuthSlice";

interface ILogoutProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function LogoutModal({ open, setOpen }: ILogoutProps) {
  const dispatch = useDispatch();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="!max-w-md w-full rounded-md border backdrop-blur-xl shadow-2xl shadow-black/20 dark:bg-white/10 dark:border-white/10"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={(e) => e.preventDefault()}
        aria-describedby={undefined}
      >
        <div className="flex items-center justify-center">
          <LogOut className="text-red-100 size-10" />
        </div>
        <DialogTitle className="text-center">
          You’ll be signed out from your current session.
        </DialogTitle>
        <Text className="text-center">
          Make sure you’ve saved your progress before logging out.
        </Text>

        <div className="flex items-center gap-2">
          <Button
            variant={"glass"}
            className="flex-1"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant={"ghost"}
            className="bg-red-100 hover:bg-red-100/40 transition-all ease-in-out duration-300 flex-1"
            onClick={() => dispatch(logout())}
          >
            Logout
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
