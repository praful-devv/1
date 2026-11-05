

const App = () => {
  return (
    <div className="h-screen bg-[#012B1D] flex justify-center items-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[55%] h-[90vh] w-[90vh] -translate-x-1/2 -translate-y-1/2 rounded-full
                   bg-[radial-gradient(circle,#01B36C_0%,rgba(1,179,108,0.35)_35%,rgba(1,179,108,0)_70%)] blur-3xl"
      />

      <div className="absolute flex w-50 flex-col ">
        <img
          className=" grow blur-xs rounded-t-2xl border-[#FEB192]"
          src="https://i.pinimg.com/736x/c7/c3/6c/c7c36c929205f0264d331cac87b08ac1.jpg"
          alt=""
        />

        <div className="h-10 flex items-center rounded-b-2xl bg-[#FEB192] blur-xs font-bold w-full px-4"> Lisa</div>
      </div>
    </div>
  );
}

export default App