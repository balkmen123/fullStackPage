import BtnBuy from '../Button/BtnBuy';

function SectionProjects() {
  return (
    <div className="py-[64px]">
      <div className="w-[1248px] mx-auto">
        <div className="flex gap-[150px] items-center">
          <div className="flex-1 ">
            <h2 className="leading-[1.4] text-[4.2rem] font-[700] text-[#fff] ">
              Thực hành 8 dự án với thiết kế trên Figma
            </h2>
            <p className="mt-[16px] text-[2rem] text-[#8b949e] mb-[32px]">
              Figma là công cụ thiết kế UI/UX hàng đầu thế giới hiện nay. Với 8 dự án thực hành trên Figma, bạn có thể
              tự làm lại hầu hết mọi giao diện trang web mà bạn thấy.
            </p>
            <BtnBuy colorBg="bg-[#fff]" colorText="text-[#0d1117]" text="Học thử ngay"></BtnBuy>
          </div>
          <div className="relative flex-1  top-[20px] flex flex-col">
            <img
              src="https://fullstack.edu.vn/landing/htmlcss/assets/img/project-2.png"
              className="w-[75%] block rounded-[16px]"
              alt=""
            />
            <img
              className="self-end mt-[-64px] w-[75%] block rounded-[16px] border border-solid border-[#666]"
              src="	https://fullstack.edu.vn/landing/htmlcss/assets/img/project-4.png"
              alt=""
            />
            <img
              className="absolute w-[150%] z-[-1] top-1/2 left-1/2 transform-translate -translate-x-1/2 -translate-y-1/2 "
              src="https://fullstack.edu.vn/landing/htmlcss/assets/img/glow-new.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionProjects;
