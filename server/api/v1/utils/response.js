import { getReasonPhrase } from "http-status-codes";

const response = (res, code, status, data, mesage) => {
  if (!mesage) mesage = getReasonPhrase(code);
  return res.status(code).json({
    status,
    data,
    mesage,
  });
};

export default response;
