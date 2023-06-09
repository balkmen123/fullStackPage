function Slider() {
  return (
    <div>
      <div className="relative">
        <div className="slide m-5 max-w-[1800px] h-[270px] rounded-2xl bg-gradient-to-r from-blue-500 to-blue-200 flex justify-between">
          <div className="text-white flex flex-col text-[1.6rem] justify-center max-w-[100%] p-0 pb-[36px] px-[36px] w-[640px]">
            <h2 className="mb-[8px]  font-semibold">
              <a
                className="text-white text-[3.2rem]  font-bold text leading-1.5"
                target="_blank"
                href="https://www.facebook.com/namtit0101"
              >
                NamCh trên Facebook
              </a>
            </h2>
            <p className="mb-[24px] mt-0 max-w-[600px] ">
              F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình
              F8 sẽ ở đó.
            </p>
            <div className="group ">
              <a className="group-hover:bg-white group-hover:text-[#3b82f6] cursor-pointer px-[10px] py-[10px]  border-2 border-solid border-white text-white min-w-[16px] rounded-[20px] font-bold text-center transition duration-200 ease-in-out text-[1.4rem]">
                Truy cập Facebook
              </a>
            </div>
          </div>
          <div>
            <img
              src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_04_2.png"
              className="object-cover block border-none"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
