export const Appbar = () => {
  return (
    <>
      <div className="shadow h-14 flex justify-between bg-blue-500 text-white">
        <div className="flex flex-col justify-center h-full ml-4 ">
          <i className="fa-solid fa-sack-dollar">
            {" "}
            <span className="font-sans text-lg"> CashPal</span>
          </i>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-center h-full mr-4 text-lg">
            Hello
          </div>
          <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl text-black">
              U
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
