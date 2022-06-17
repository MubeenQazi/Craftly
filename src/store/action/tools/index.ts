import getAPI from "../../../network/network";
import { AxiosResponse } from "axios";

export const getTools: any = () => (dispatch: any) => {
  return getAPI("tools")
    .then((res: AxiosResponse) => {
      dispatch({ type: "GET_TOOL", payload: res?.data?.tools });
    })
    .catch((err: any) => {
      console.log("err....", err);
    });
};

export const getBlogs: any = () => (dispatch: any) => {
  return getAPI("blogs")
    .then((res: AxiosResponse) => {
      dispatch({ type: "GET_BLOGS", payload: res?.data?.blogs });
    })
    .catch((err: any) => {
      console.log("err....", err);
    });
};
