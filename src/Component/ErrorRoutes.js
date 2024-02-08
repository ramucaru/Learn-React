import { useRouteError } from "react-router-dom";
const ErrorComponent = () => {
  const err = useRouteError();
  console.log(err, "error");
  return <div>{err?.error?.message}</div>;
};

export default ErrorComponent;
