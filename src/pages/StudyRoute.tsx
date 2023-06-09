function StudyRoute() {
  return (
    <div className="max-w-[1920px] w-full ">
      <div className="mb-[60px] px-[44px] pt-3">
        <div className=" mb-[80px]">
          <h1 className=" text-[#242424] text-[2.8rem] font-[900] my-[18px]">Lộ trình học</h1>
          <div className="text-[1.5rem] leading-[1.6] max-w-[840px] text-[#292929] break-words my-2">
            <p>
              Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. Ví dụ: Để đi làm với vị trí "Lập
              trình viên Front-end" bạn nên tập trung vào lộ trình "Front-end".
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="border-[2px] border-solid border-[#e8e8e8] rounded-[16px]  w-[500px] p-[24px] mr-[24px]">
            <div className="flex">
              <div className="flex-1">
                <h2 className="m-0 font-[600]">
                  <a
                    className="text-[#242424] block text-[2rem] font-[900] pb-[14px]"
                    href="/learning-paths/front-end-development"
                  >
                    Lộ trình học Front-end
                  </a>
                </h2>
                <p className=" text-[1.4rem] leading-[1.6] m-0">
                  Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn
                  lộ trình để trở thành lập trình viên Front-end nhé.
                </p>
              </div>
              <div className="items-center flex pl-[24px]">
                <a
                  className=" items-center border-[5px] border-solid border-[#f05123] rounded-[50%] flex justify-center overflow-hidden w-[122px] h-[122px]"
                  href="/learning-paths/front-end-development"
                >
                  <img
                    className="rounded-[50%] h-[98px] w-[98px] object-cover"
                    src="https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png"
                    alt="Lộ trình học Front-end"
                  />
                </a>
              </div>
            </div>
            <div className="mt-[20px]">
              <a
                className="cursor-pointer hover:opacity-[0.9] bg-[#f05123] text-white appearance-none border border-solid border-[#f05123] rounded-[999px] inline-block text-[1.4rem] font-[600] py-[9px] px-[16px] text-center "
                href="/learning-paths/front-end-development"
              >
                Xem chi tiết
              </a>
            </div>
          </div>
          <div className="border-[2px] border-solid border-[#e8e8e8] rounded-[16px]  w-[500px] p-[24px]">
            <div className="flex">
              <div className="flex-1">
                <h2 className="m-0 font-[600]">
                  <a
                    className="text-[#242424] block text-[2rem] font-[900] pb-[14px]"
                    href="/learning-paths/front-end-development"
                  >
                    Lộ trình học Back-end
                  </a>
                </h2>
                <p className=" text-[1.4rem] leading-[1.6] m-0">
                  Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc thường nặng
                  tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé.
                </p>
              </div>
              <div className="items-center flex pl-[24px]">
                <a
                  className=" items-center border-[5px] border-solid border-[#f05123] rounded-[50%] flex justify-center overflow-hidden w-[122px] h-[122px]"
                  href="/learning-paths/front-end-development"
                >
                  <img
                    className="rounded-[50%] h-[98px] w-[98px] object-cover"
                    src="https://files.fullstack.edu.vn/f8-prod/learning-paths/3/63b4641535b16.png"
                    alt="Lộ trình học Front-end"
                  />
                </a>
              </div>
            </div>
            <div className="mt-[20px]">
              <a
                className="cursor-pointer hover:opacity-[0.9] bg-[#f05123] text-white appearance-none border border-solid border-[#f05123] rounded-[999px] inline-block text-[1.4rem] font-[600] py-[9px] px-[16px] text-center "
                href="/learning-paths/front-end-development"
              >
                Xem chi tiết
              </a>
            </div>
          </div>
        </div>
        <div className="items-center flex justify-between mt-[50px] overflow-hidden">
          <div className="w-[400px]">
            <h2 className="font-[900] text-[2.4rem] leading-[1.6] my-[19px]">
              Tham gia cộng đồng học viên F8 trên Facebook
            </h2>
            <p className="text-[1.4rem] leading-[1.6] my-[19px]">
              Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia hỏi đáp, chia sẻ và hỗ trợ nhau trong
              quá trình học nhé.
            </p>
            <a
              className="border-[2px] border-solid border-[#292929] rounded-[999px] inline-block text-[1.5rem] font-[600] mt-[8px] py-[10px] px-[16px] text-center"
              target="_blank"
              href="https://www.facebook.com/groups/f8official"
              rel="noopener"
            >
              Tham gia nhóm
            </a>
          </div>
          <div className="">
            <img
              className="relative right-[-44px] w-[420px]"
              src="https://fullstack.edu.vn/static/media/fb-group-cards.4bd525b1b8baf7b1e5a2.png"
              alt="Học lập trình web (F8 - Fullstack.edu.vn)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default StudyRoute;
