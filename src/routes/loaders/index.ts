import API from "@/data/api";
import { waitForRehydration } from "@/lib/utils";
import { setData, setLoading } from "@/redux/DataSlice/DataSlice";
import { persistor, store } from "@/redux/store";

export const testLoader = async ({ request }: { request: Request }) => {
  // Wait for hydration
  await waitForRehydration(persistor);

  const pathname = new URL(request.url).pathname;
  const pageName =
    pathname === "/" ? "home" : pathname.replace(/\//g, "_").replace(/^_/, "");

  const Store = store.getState();
  const session = Store.productSession;
  const nextStep = session?.first_step || "";
  const sessionId = session?.session_id || "";
  const userId = Store?.auth?.user?.user_id || "";

  if (nextStep === "") {
    console.log("not able to fetch next step", Store);
    return null;
  }

  store.dispatch(setLoading(true));

  try {
    const response = await API.post(
      `/profile-setup/step-questions/${nextStep}`,
      {
        session_id: sessionId,
        user_id: userId,
        previous_step_context: {
          additionalProp1: {},
        },
        language: "en",
      }
    );

    if (response) {
      store.dispatch(
        setData({
          pageName,
          data: response,
        })
      );
    }

    return null;
  } catch (error) {
    console.log(error);
  } finally {
    store.dispatch(setLoading(false));
  }
};
