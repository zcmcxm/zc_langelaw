export const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mx-auto w-1/3 h-screen">
      <span className="loading loading-infinity loading-lg text-primary"></span>
      <div className="text-primary text-lg">Loading...</div>
    </div>
  );
};
