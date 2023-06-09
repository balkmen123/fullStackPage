import BtnBuy from '../Button/BtnBuy';

function SectionMentor() {
  //   console.log('imagesTest', imagesTest);
  const imagePath = process.env.PUBLIC_URL + '/streamer/streamer1.png';
  return (
    <div className="py-[64px] mt-[120px]">
      <div className="w-[1248px] mx-auto">
        <div className="flex gap-[150px] items-center">
          <div className="flex-1 ">
            <h2 className="leading-[1.4] text-[4.2rem] font-[700] text-[#fff] ">Khóa học được thiết kế bởi Cao Nam</h2>
            <p className="mt-[16px] text-[2rem] text-[#8b949e] mb-[32px]">
              Sơn Đặng là CEO - Founder của Cộng Đồng Học Lập Trình F8. Hiện tại, anh vẫn là một Fullstack developer với
              hơn 8 năm kinh nghiệm làm việc thực tế.
            </p>
            <BtnBuy colorBg="bg-[#fff]" colorText="text-[#0d1117]" text="Tìm hiểu thêm"></BtnBuy>
          </div>
          <div className="relative flex-1  top-[20px] flex justify-center">
            <img
              className=" w-[360px] h-[360px[ rounded-[50%] object-cover"
              src={imagePath}
              alt="Cao Nam , Founder của cộng đồng học lập trình F8"
            />
            <img
              className="absolute w-[150%] z-[-1] top-1/2 left-1/2 transform-translate -translate-x-1/2 -translate-y-1/2"
              src="https://fullstack.edu.vn/landing/htmlcss/assets/img/flashcard-light.png "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionMentor;
