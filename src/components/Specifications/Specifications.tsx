function Specifications() {
  return (
    <div className="relative mt-[70px] py-[64px]">
      <div className="w-[1248px] mx-auto">
        <div className=" relative z-[1] max-w-[960px] mx-auto py-[48px] px-[60px] rounded-[16px] bg-[#24292f] box-shadow">
          <h2 className="second-heading leading-[1.4] text-[4.2rem] font-[700] text-white">Thông số kỹ thuật</h2>
          <p className="desc mt-[10px] text-[2rem] text-[#8b949e]">
            Đáp ứng các chỉ tiêu về mặt kỹ thuật, giúp người học có trải nghiệm tốt nhất.
          </p>
          <table className="table-auto w-full mt-[40px]">
            <tbody className="">
              <tr className="border-y border-solid border-[#30363d] text-[2rem] font-[700]">
                <td className="py-[16px] text-[2rem]">Âm thanh / giọng nói</td>
                <td> Giọng Bắc, rõ ràng, tốc độ vừa phải</td>
              </tr>
              <tr className="border-y border-solid border-[#30363d] text-[2rem] font-[700]">
                <td className="py-[16px] text-[2rem]">Chất lượng bài học video</td>
                <td> 60 FPS / 480p, 720p, 1080p, 1440p</td>
              </tr>
              <tr className="border-y border-solid border-[#30363d] text-[2rem] font-[700]">
                <td className="py-[16px] text-[2rem]">Trải nghiệm trên di động</td>
                <td> Giọng Bắc, rõ ràng, tốc độ vừa phải</td>
              </tr>
              <tr className="border-y border-solid border-[#30363d] text-[2rem] font-[700]">
                <td className="py-[16px] text-[2rem]">Mạng phân phối nội dung</td>
                <td> Tốc độ cao, trong nước và quốc tế</td>
              </tr>
              <tr className="border-y border-solid border-[#30363d] text-[2rem] font-[700]">
                <td className="py-[16px] text-[2rem]">Nhiều tính năng khác</td>
                <td className="text-transparent bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text">
                  {' '}
                  Trải nghiệm miễn phí
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Specifications;
