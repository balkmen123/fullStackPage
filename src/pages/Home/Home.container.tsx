import { memo } from 'react';
import { LeaningInfo, Post, VideoInfo } from '../../models/Leaning/Leaning.model';
import Home from './Home';

export const courses: LeaningInfo[] = [
  {
    course_id: 1,
    course_title: 'HTML CSS Pro',
    thumbnail: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    course_price: '2.499.000đ',
    course_discount: '1.299.000đ',
    course_pro: true,
    link: '/langding/page',
  },
  {
    course_id: 2,
    course_title: 'JavaScript Pro',
    thumbnail: 'https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png',
    course_disable: true,
    course_pro: true,
  },
  {
    course_id: 3,
    course_title: 'NextJS Pro',
    thumbnail: 'https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png',
    course_disable: true,
    course_pro: true,
  },
  {
    course_id: 4,
    course_title: 'NodeJS Pro',
    thumbnail: 'https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png',
    course_disable: true,
    course_pro: true,
  },
];

export const coursesFree: LeaningInfo[] = [
  {
    course_id: 5,
    course_title: 'Kiến Thức Nhập Môn IT',
    thumbnail: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
    course_studen: 108.851,
    course_content:
      'Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.',
  },
  {
    course_id: 5,
    course_title: 'Lập trình C++ cơ bản, nâng cao',
    thumbnail: 'https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png',
    course_studen: 10.509,
    course_content:
      'Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới bắt đầu. Mục tiêu của khóa học này nhằm giúp các bạn nắm được các khái niệm căn cơ của lập trình, giúp các bạn có nền tảng vững chắc để chinh phục con đường trở thành một lập trình viên.',
  },
  {
    course_id: 5,
    course_title: 'HTML CSS từ Zero đến Hero',
    thumbnail: 'https://files.fullstack.edu.vn/f8-prod/courses/2.png',
    course_studen: 164.147,
    course_content: 'Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.',
  },
  {
    course_id: 5,
    course_title: 'Responsive Với Grid System',
    thumbnail: 'https://files.fullstack.edu.vn/f8-prod/courses/3.png',
    course_studen: 37.437,
  },
  {
    course_id: 5,
    course_title: 'Lập Trình JavaScript Cơ Bản',
    thumbnail: '	https://files.fullstack.edu.vn/f8-prod/courses/1.png',
    course_studen: 109.709,
  },
  {
    course_id: 5,
    course_title: 'Lập Trình JavaScript Nâng Cao',
    thumbnail: 'https://files.fullstack.edu.vn/f8-prod/courses/12.png',
    course_studen: 29.356,
  },
  {
    course_id: 5,
    course_title: 'Làm việc với Terminal & Ubuntu',
    thumbnail: 'https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png',
    course_studen: 12.805,
  },
  {
    course_id: 5,
    course_title: 'Xây Dựng Website với ReactJS',
    thumbnail: '	https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
    course_studen: 48.805,
  },
];

export const posts: Post[] = [
  {
    title: 'Tổng hợp các sản phẩm của học viên tại F8',
    avt: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png',
    time: 6,
    green_area: true,
    name: 'Sơn Đặng',
    thumbnail: '	https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png',
  },
  {
    title: '[Phần 1] Tạo dự án ReactJS với Webpack và Babel',
    avt: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png',
    time: 6,
    green_area: true,
    name: 'Sơn Đặng',
    thumbnail: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/279/6153f692d366e.jpg',
  },
  {
    title: 'Ký sự ngày thứ 25 học ở F8 ',
    avt: '	https://files.fullstack.edu.vn/f8-prod/user_avatars/18159/6466353972973.jpg',
    time: 4,
    green_area: false,
    name: 'Võ Minh Kha',
    thumbnail: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/677/615436b218d0a.png',
  },
  {
    title: 'Tổng hợp các sản phẩm của học viên tại F8',
    avt: 'https://graph.facebook.com/1642531882604203/picture?width=400&height=400',
    time: 6,
    green_area: false,
    name: 'Sơn Sơn',
    thumbnail: '		https://files.fullstack.edu.vn/f8-prod/blog_posts/51/6139c6453456e.png',
  },
];

const videos: VideoInfo[] = [
  {
    title: 'Sinh viên IT đi thực tập tại doanh nghiệp cần biết',
    view: 228.866,
    like: 5.83,
    comment: 229,
    time_video: '34:51',
    thumbnail: 'https://i.ytimg.com/vi/YH-E4Y3EaT4/maxresdefault.jpg',
  },
  {
    title: 'Phương pháp học lập trình của Admin F8?',
    view: 228.866,
    like: 5.83,
    comment: 229,
    time_video: '34:51',
    thumbnail: '	https://i.ytimg.com/vi/DpvYHLUiZpc/maxresdefault.jpg',
  },
  {
    title: '"Code Thiếu Nhi Battle" Tranh Giành Trà Sữa Size L',
    view: 228.866,
    like: 5.83,
    comment: 229,
    time_video: '34:51',
    thumbnail: '	https://i.ytimg.com/vi/sgq7BH6WxL8/maxresdefault.jpg',
  },
  {
    title: 'Bạn sẽ làm được gì sau khóa học?',
    view: 228.866,
    like: 5.83,
    comment: 229,
    time_video: '34:51',
    thumbnail: 'https://i.ytimg.com/vi/R6plN3FvzFY/maxresdefault.jpg',
  },
  {
    title: 'Làm sao để có thu nhập cao và đi xa hơn trong ngành',
    view: 228.866,
    like: 5.83,
    comment: 229,
    time_video: '34:51',
    thumbnail: 'https://i.ytimg.com/vi/oF7isq9IjZM/maxresdefault.jpg',
  },
  {
    title: 'Javascript có thể làm được gì? Giới thiệu qua về trang',
    view: 228.866,
    like: 5.83,
    comment: 229,
    time_video: '34:51',
    thumbnail: 'https://i.ytimg.com/vi/0SJE9dYdpps/maxresdefault.jpg',
  },
  {
    title: 'ReactJS là gì? Tại sao nên học ReactJS?',
    view: 228.866,
    like: 5.83,
    comment: 229,
    time_video: '34:51',
    thumbnail: 'https://i.ytimg.com/vi/x0fSBAgBrOQ/maxresdefault.jpg',
  },
];

const HomeContainer = memo(() => {
  return <Home coursesFree={coursesFree} coursesVip={courses} posts={posts} videos={videos} />;
});
export default HomeContainer;
