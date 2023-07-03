import { useEffect, useState } from 'react';
import Blog from './Blog';
import { BlogModel } from './Blog.model';
import { Link } from 'react-router-dom';

const BlogList: BlogModel[] = [
  {
    imgAvt: '	https://files.fullstack.edu.vn/f8-prod/user_photos/323800/6464902b20c91.jpg',
    nameUser: 'Alan King',
    headerBlog: 'Cảm thấy khó khăn khi chuyển sang học một ngôn ngữ mới',
    descripbeBlog:
      'Tôi làm chuyên môn về phân tích dữ liệu, chủ yếu là dùng phần mềm chuyên môn sâu và dùng rất nhiều SQL db, python. Hai món đó cũng...',
    postTime: 'một tháng trước',
    readingTime: '2 phút đọc',
    thumbnailBlog: '	https://files.fullstack.edu.vn/f8-prod/blog_posts/7256/64448752c63c4.jpg',
    topic: 'Front-end-Mobile',
  },
  {
    imgAvt: '	https://files.fullstack.edu.vn/f8-prod/user_avatars/164944/6442473f625f6.jpg',
    nameUser: 'GzW',
    headerBlog: 'Đánh giá ÉP TÁM với một số trường',
    descripbeBlog:
      'Hí anh em! Vào vấn đề luôn, trong thời gian mình có quá nhiều thời gian rỗi nên mình đã bỏ 1 ít thời gian và tiền đi kiểm chứng và...',
    postTime: '2 tháng trước',
    readingTime: '2 phút đọc',
    thumbnailBlog: '	https://files.fullstack.edu.vn/f8-prod/blog_posts/7242/64424fe6e225f.jpg',
    topic: 'Front-end-Mobile',
  },
  {
    imgAvt: 'https://files.fullstack.edu.vn/f8-prod/user_photos/184722/62383632b8e58.jpg',
    nameUser: 'Minh Trịnh',
    headerBlog: 'Learn JavaScript while Playing Games — Gamify Your Learning',
    descripbeBlog:
      'Trong bài viết này, tôi muốn giới thiệu các trang web khác nhau mà bạn có thể sử dụng để học JavaScript khi chơi trò chơi. Phương...',
    postTime: '3 tháng trước',
    readingTime: '8 phút đọc',
    thumbnailBlog: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/6936/6422afa5a62f8.jpg',
    topic: 'Front-end-Mobile',
  },
  {
    imgAvt: '	https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg',
    nameUser: 'Anh Tuấn Nguyễn',
    headerBlog: 'Tìm hiểu về Serif và Sans-serif?',
    descripbeBlog: '',
    postTime: '3 tháng trước',
    readingTime: '12 phút đọc',
    thumbnailBlog: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/6782/6412fd42b7052.jpg',
    topic: 'Back-End-Devops',
  },
  {
    imgAvt: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/256991/63b63dc6657a1.jpg',
    nameUser: 'Vịt Vịt',
    headerBlog: 'Ngành gì đang hot hiện nay? Top ngành nghề dự báo trở thành xu thế ',
    descripbeBlog:
      'Nếu bạn đang phân vân trong việc chọn ngành, chuyển ngành thì có thể tham khảo bài viết này để biết ngành gì đang hot hiện nay và...',
    postTime: '4 tháng trước',
    readingTime: '7 phút đọc',
    thumbnailBlog: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/6630/63fd6b687b938.jpg',
    topic: 'UI-UX-Design',
  },
];
function BlogContainer() {
  return (
    <div>
      <Blog listBlog={BlogList}></Blog>
    </div>
  );
}

export default BlogContainer;
