import BtnBuy from '../Button/BtnBuy';

function TheEnd() {
  return (
    <div className="mt-[75px] py-[64px] text-center">
      <div className=" w-[1248px] mx-auto">
        <div className="py-[100px] px-[48px] rounded-[16px] bg-[#161b22] box-shadow">
          <h2 className="text-[6.4rem] font-[700] leading-[1.2] text-white">
            <strong className="text-hightlight">Bắt đầu</strong> trở thành nhà phát triển chuyên nghiệp?
          </h2>
          <p className="desc mt-[32px] text-[2rem] text-[#8B94A8]">
            Bắt tay vào làm không khó, khó ở chỗ bao giờ thì chúng ta bắt đầu?
          </p>
          <BtnBuy colorBg="bg-white" colorText="text-[#0d1117]" text="Bắt đầu ngay" classN="mt-[48px] "></BtnBuy>
        </div>
      </div>
    </div>
  );
}

export default TheEnd;
