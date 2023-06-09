import BtnBuy from '../Button/BtnBuy';

function Flashcards() {
  const imagePath = process.env.PUBLIC_URL + '/streamer/streamer1.png';
  return (
    <div className="py-[64px] mt-[120px]">
      <div className="w-[1248px] mx-auto">
        <div className="flex gap-[150px] items-center flex-row-reverse">
          <div className="flex-1 ">
            <h2 className="leading-[1.4] text-[4.2rem] font-[700] text-[#fff] ">
              Không quên kiến thức với ứng dụng Flashcards
            </h2>
            <p className="mt-[16px] text-[2rem] text-[#8b949e] mb-[32px]">
              Việc ghi nhớ giờ đây không còn là vấn đề nữa. Flashcards là phương pháp ghi nhớ thông qua việc lặp lại,
              kiến thức trong khóa học sẽ được bạn ghi nhớ trong dài hạn.
            </p>
            <p className="mt-[16px] text-[2rem] text-[#8b949e] mb-[32px]">
              Chỉ với chiếc điện thoại thông minh, giờ đây bạn có thể ôn lại kiến thức ở mọi lúc, mọi nơi.
            </p>
            <BtnBuy colorBg="bg-[#fff]" colorText="text-[#0d1117]" text="Truy cập Flashcards"></BtnBuy>
          </div>
          <div className="relative flex-1  top-[20px] flex justify-center">
            <img
              className="w-[70%]"
              src="https://fullstack.edu.vn/landing/htmlcss/assets/img/flashcards.png"
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

export default Flashcards;
