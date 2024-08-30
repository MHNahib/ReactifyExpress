import { StatusCodes } from "http-status-codes";
import response from "../utils/response.js";

export const getAllPostsController = async (req, res) => {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (resp.status !== StatusCodes.OK) {
      return response(
        res,
        StatusCodes.INTERNAL_SERVER_ERROR,
        true,
        { data: null },
        resp.statusText
      );
    }

    const data = await resp.json();

    response(res, StatusCodes.OK, true, { data }, "OK");
  } catch (error) {
    console.log("error", error);

    response(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      true,
      { data: null },
      error.message
    );
  }
};
