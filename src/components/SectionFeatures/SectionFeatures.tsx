import BtnBuy from '../Button/BtnBuy';
import CheckIcon from '@mui/icons-material/Check';
import { Features } from './SectionFeatures.model';

interface Prop {
  listFeatures?: Features[];
}

function SectionFeatures(prop: Prop) {
  const { listFeatures } = prop;

  return (
    <div className="py-[64px] mt-[120px]">
      <div className="w-[1248px] mx-auto">
        <div className="flex gap-[150px] items-center flex-row-reverse">
          <div className="flex-1 ">
            <h2 className="leading-[1.4] text-[4.2rem] font-[700] text-[#fff] ">
              Điểm khác biệt giữa khóa học Pro và Free?
            </h2>
            <p className="mt-[16px] text-[2rem] text-[#8b949e] mb-[32px]">
              Nội dung đa dạng, đầy đủ và chuyên sâu hơn. Học trên nền tảng Pro với nhiều tính năng chuyên nghiệp như:
              gợi ý cách làm, xem đáp án, so sánh code, chữa bài tập, ghi chú cá nhân, và nhiều tính năng Pro khác.
            </p>{' '}
            <p className="mt-[16px] text-[2rem] text-[#8b949e] mb-[32px]">
              Bạn chưa cần mua ngay lúc này. Nhấn vào nút dưới đây để trải nghiệm miễn phí.
            </p>
            <BtnBuy colorBg="bg-[#fff]" colorText="text-[#0d1117]" text="Trải nghiệm miễn phí"></BtnBuy>
          </div>
          <div className=" flex-1  ">
            <div className="relative py-[48px] px-[64px] min-h-[300px] rounded-[16px] bg-[#161b22] transform translate-x-10 translate-y-10">
              <div className="relative z-[1] flex flex-col gap-[16px]">
                {listFeatures?.map((data) => {
                  return (
                    <div className="flex items-center px-[16px] py-[24px] rounded-[8px] text-white bg-[#24292f]">
                      <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#8957e5] text-[1.8rem] rounded-[50%] ">
                        <CheckIcon sx={{ fontSize: 20 }} />
                      </div>
                      <span className="ml-[16px] text-[2rem] font-[600]">{data.features}</span>
                    </div>
                  );
                })}
              </div>
              <img
                className="absolute w-[150%] z-[-1] top-1/2 left-1/2 transform-translate -translate-x-1/2 -translate-y-1/2"
                src="https://fullstack.edu.vn/landing/htmlcss/assets/img/glow-new.png "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFeatures;
