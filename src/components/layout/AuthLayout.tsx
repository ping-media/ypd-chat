import BackButton from "@/components/Button/BackButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/context/ThemeProvider";
import { images } from "@/lib/constant";
import { RootState } from "@/redux/store";
import { Phone } from "lucide-react";
import { useSelector } from "react-redux";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthLayout() {
  const { isLogged } = useSelector((state: RootState) => state.auth);
  const { theme } = useTheme();
  const location = useLocation();

  const isPhonePage = location.pathname.includes("/phone-number/");
  const isLogin = location.pathname === "/auth/sign-in";

  if (isLogged) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      {/* Dark mode background gradient */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute inset-0 [background-image:var(--main-gradient)]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-20 bg-green-100 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl lg:min-h-[648px] flex flex-col">
        {/* back button  */}
        {!isLogin && (
          <BackButton className="absolute z-20 -left-14 hidden lg:block" />
        )}

        <div className="flex flex-col gap-6 flex-1">
          <Card
            variant={"glassWithTransparent"}
            className="overflow-hidden p-0 flex flex-col flex-1"
          >
            <CardContent className="grid p-0 md:grid-cols-[4fr_3fr] flex-1">
              <div className="bg-muted relative hidden md:block">
                <img
                  src="https://katiecouric.com/wp-content/uploads/2025/05/ai-therapy.jpg"
                  alt="Image"
                  className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.4] dark:grayscale"
                />
              </div>
              <div className="md:p-8 flex flex-col items-center justify-center">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-center text-center mb-10 lg:mb-0">
                    <p className="text-muted-foreground text-sm text-balance">
                      Powered By
                    </p>
                    <div className="w-48 h-24 lg:w-40 lg:h-20 p-1 rounded-full shrink-0">
                      <img
                        src={
                          theme === "light"
                            ? images["logo-dark"]
                            : images["logo-light"]
                        }
                        alt="YOUTH_PULSE_DIGITAL"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  {/* form render dynamically here */}
                  <Outlet />

                  <div>
                    <Button
                      variant="outline"
                      type="button"
                      className="w-full mb-4 py-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                          fill="currentColor"
                        />
                      </svg>
                      Login with Google
                    </Button>

                    {!isPhonePage && (
                      <Link to="phone-number/sign-in" className="w-full">
                        <Button
                          variant="outline"
                          type="button"
                          className="w-full py-5"
                        >
                          <Phone className="size-5" />
                          Login with Phone
                        </Button>
                      </Link>
                    )}
                  </div>

                  <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4 mt-10 lg:mt-0">
                    By clicking continue, you agree to our{" "}
                    <Link to="#">Terms of Service</Link> and{" "}
                    <Link to="#">Privacy Policy</Link>.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
