import "./index.css";

export const Loading = () => {
  console.log("calling");
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader"></div>
    </div>
  );
};
