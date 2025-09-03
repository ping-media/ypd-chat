import { handleData } from "@/lib/function";
import { setData } from "@/redux/DataSlice/DataSlice";
import { store } from "@/redux/store";

export const testLoader = async ({ request }: { request: Request }) => {
  const pathname = new URL(request.url).pathname;
  const pageName =
    pathname === "/" ? "home" : pathname.replace(/\//g, "_").replace(/^_/, "");

  const productSession = store.getState()["product-session"].first_step || "";
  const sessionId = store.getState()["product-session"].session_id || "";
  const userId = store.getState().auth.user.user_id || "";

  if (productSession === "") {
    return null;
  }

  const response = await handleData({
    endpoint: `/profile-setup/step-questions/${productSession}`,
    method: "POST",
    data: {
      session_id: sessionId,
      user_id: userId,
      previous_step_context: {
        additionalProp1: {},
      },
      language: "en",
    },
  });

  if (response?.success) {
    const { success, ...rest } = response;
    store.dispatch(
      setData({
        pageName,
        data: rest,
      })
    );
  }

  return null;
};
