import { useState } from 'react';
import BtnBuy from '../../../Button/BtnBuy';

function HeaderLandingPageFixed() {
  let lastScrollPosition = window.pageYOffset;
  let className = 'fixed top-0 left-0 right-0 z-[999] bg-[#161b22] box-shadow transition-all ease-in-out duration-300';
  const [show, setShow] = useState('opacity-0');

  window.addEventListener('scroll', function () {
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > lastScrollPosition || currentScrollPosition < 1000) {
      setShow(
        'fixed top-0 left-0 right-0 z-[999] bg-[#161b22] box-shadow transition-all ease-in-out duration-300 opacity-0 invisible  transform-y-[-100]',
      );
    } else {
      setShow(
        'fixed top-0 left-0 right-0 z-[999] bg-[#161b22] box-shadow transition-all ease-in-out duration-300 opacity-[1] visible translate-y-0',
      );
      console.log('Scroll lên');
    }
    lastScrollPosition = currentScrollPosition;
  });

  return (
    <div className={show}>
      <div className="w-[1248px] mx-auto my-0">
        <div className="flex items-center h-[66px] justify-between">
          <a
            href="https://fullstack.edu.vn/landing/htmlcss/#"
            className="logo-wrap flex items-center test-[#c9d1d9] no-underline"
          >
            <img
              src="	https://fullstack.edu.vn/landing/htmlcss/assets/img/f8_icon.png"
              alt="F8 - Học Lập Trình Để Đi Làm"
              className="logo h-[44px] w-[44px] rounded-[8px]"
            />
            <span className="slogan ml-3 font-[600] text-white">Học Lập Trình Để Đi Làm</span>
          </a>
          <nav className="ml-[80px] block">
            <ul className="flex gap-[32px]">
              <li>
                <a href="https://fullstack.edu.vn/landing/htmlcss/#" className="font-[500] text-white">
                  Tổng quan
                </a>
              </li>
              <li>
                <a href="https://fullstack.edu.vn/landing/htmlcss/#course-content" className="font-[500] text-white">
                  Nội dung khóa học
                </a>
              </li>
              <li>
                <a href="https://fullstack.edu.vn/landing/htmlcss/#features" className="font-[500] text-white">
                  Điểm khác biệt
                </a>
              </li>
              <li>
                <a href="https://fullstack.edu.vn/landing/htmlcss/#specifications" className="font-[500] text-white">
                  Thông số kỹ thuật
                </a>
              </li>
              <li>
                <a href="https://fullstack.edu.vn/landing/htmlcss/#contact" className="font-[500] text-white">
                  Liên hệ
                </a>
              </li>
            </ul>
          </nav>
          <BtnBuy colorBg="bg-white" colorText="text-[#0d1117]" text=" Học thử ngay "></BtnBuy>
        </div>
      </div>
    </div>
  );
}

export default HeaderLandingPageFixed;
