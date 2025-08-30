import { handleData } from "@/lib/function";
import { setData } from "@/redux/DataSlice/DataSlice";
import { store } from "@/redux/store";

export const testLoader = async ({ request }: { request: Request }) => {
  const pathname = new URL(request.url).pathname;
  const pageName =
    pathname === "/" ? "home" : pathname.replace(/\//g, "_").replace(/^_/, "");

  const response = await handleData({
    endpoint: "/cvp_lite/questions",
    method: "POST",
    data: {
      page: 1,
      page_size: 10,
      category_id: "string",
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
