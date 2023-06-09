import BtnBuy from '../Button/BtnBuy';

function Hero() {
  return (
    <div className="w-[1248px] m-auto py-[64px]">
      <h1 className="text-center max-w-[1000px] m-auto text-[6.4rem] font-[700] leading-[1.2] text-[#fff]">
        Cách dễ nhất để học
        <strong className="bg-gradient-to-b from-blue-500 via-indigo-600 to-purple-100 text-transparent bg-clip-text mx-4">
          HTML CSS
        </strong>{' '}
        cho người mới bắt đầu!
      </h1>
      <p className="m-auto text-center max-w-[780px] my-[32px] text-[2rem]">
        Thực hành
        <strong className="mx-2 font-medium text-transparent bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text">
          8 dự án
        </strong>
        trên Figma,
        <strong className="mx-2 font-medium text-transparent bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text">
          300+ bài tập
        </strong>
        và thử thách, mua một lần học mãi mãi, được thiết kế và hướng dẫn bởi
        <a
          target="_blank"
          rel="noreferrer"
          href="https://fullstack.edu.vn/blog/son-dang-tu-chang-sinh-vien-toi-ceo-cua-f8.html"
        >
          <strong className="mx-2 font-medium text-transparent bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text">
            Cao Nam
          </strong>
        </a>
        .
      </p>
      <div className="flex items-center justify-center gap-[20px] mt-[60px]">
        <BtnBuy text="Học thử miễn phí" colorText="text-[#0d1117]" colorBg="bg-white"></BtnBuy>
        <BtnBuy text="Mua khóa học" colorText="#c9d1d9" classN=""></BtnBuy>
      </div>
    </div>
  );
}

export default Hero;
