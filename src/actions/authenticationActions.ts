import { Dispatch } from "redux";
import endpoint from "../../src/api/index";

export const fetchLoginRequest = () => async (dispatch: Dispatch) => {
  try {
    const response = await endpoint.get("/data");
    dispatch({ type: "FETCH_DATA_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_DATA_ERROR", payload: error });
  }
};
