function HeaderLandingPage() {
  let lastScrollPosition = window.pageYOffset;

  window.addEventListener('scroll', function () {
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > lastScrollPosition) {
      // console.log('Scroll xuống');
    } else {
      // console.log('Scroll lên');
    }
    lastScrollPosition = currentScrollPosition;
  });
  return (
    <header className="flex h-[120px]">
      <div className="flex w-[1248px] m-auto items-center">
        <div className="flex">
          <img
            src="https://fullstack.edu.vn/landing/htmlcss/assets/img/f8_icon.png"
            alt=""
            className="w-[50px] rounded-[8px] "
          />
          <span className="pl-[12px] leading-[1.5] text-[1.6rem] font-[500] text-[#fff]">
            HỌC LẬP TRÌNH <br></br> ĐỂ ĐI LÀM
          </span>
        </div>
        <nav className="ml-[90px]">
          <ul className="flex">
            <li>
              <a
                className="px-[12px] py-[4px] font-[500] text-[#fff]"
                href="https://fullstack.edu.vn/landing/htmlcss/#"
              >
                Tổng quan
              </a>
            </li>
            <li>
              <a
                className="px-[12px] py-[4px] font-[500] text-[#fff]"
                href="https://fullstack.edu.vn/landing/htmlcss/#course-content"
              >
                Nội dung khóa học
              </a>
            </li>
            <li>
              <a
                className="px-[12px] py-[4px] font-[500] text-[#fff]"
                href="https://fullstack.edu.vn/landing/htmlcss/#features"
              >
                Điểm khác biệt
              </a>
            </li>
            <li>
              <a
                className="px-[12px] py-[4px] font-[500] text-[#fff]"
                href="https://fullstack.edu.vn/landing/htmlcss/#specifications"
              >
                Thông số kỹ thuật
              </a>
            </li>
            <li>
              <a
                className="px-[12px] py-[4px] font-[500] text-[#fff]"
                href="https://fullstack.edu.vn/landing/htmlcss/#contact"
              >
                Liên hệ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderLandingPage;
