import BtnBuy from '../Button/BtnBuy';

function StartFree() {
  return (
    <div className="mt-[32px] py-[64px] text-center">
      <div className="w-[1248px] mx-auto">
        <div className="inner">
          <h2 className="second-heading leading-[1.4] text-[4.2rem] font-[700] text-white">
            Trải nghiệm miễn phí ngay hôm nay
          </h2>
          <p className="desc mx-auto max-w-[700px] mt-[20px] text-[2rem] text-[#8b949e]">
            Bắt đầu hoàn toàn miễn phí mà vẫn đầy đủ các tính năng của tài khoản Pro. Bạn chỉ thực sự trả tiền khi mọi
            thứ là xứng đáng.
          </p>
          <div className="cta-wrap flex items-center justify-center gap-[12px] mt-[48px]">
            <BtnBuy colorBg="bg-white" colorText="text-[#0d1117]" text="Học thử miễn phí"></BtnBuy>
            <BtnBuy colorText="text-[#c9d1d9]" text="Mua khóa học"></BtnBuy>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartFree;
