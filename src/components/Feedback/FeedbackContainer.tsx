import { memo } from 'react';
import { feedback } from './Feedback.model';
import Feedback from './Feedback';

const ListFeedback: feedback[] = [
  {
    comment:
      'Kiến thức siêu đầy đủ, chi tiết (vì chi tiết quá nên đôi lúc các bạn cũng sẽ tự lướt qua mà không muốn xem ấy :v). Các features đi kèm cực kỳ xịn sò mà các trang như Udemy, Udacity không có',
    avt: 'https://fullstack.edu.vn/landing/htmlcss/assets/avatars/feedback-1.jpg',
    nameUser: 'Nam Thanh',
    course: 'Người học khóa HTML CSS Pro',
  },

  {
    comment:
      'Flashcard ôn lại kiến thức lý thuyết cũng khá đầy đủ và bao quát, thoải mái sử dụng ( web , mobile ) đều được. Ghi chú : Note lại thoải mái luôn , cái note này là key của các anh chị đọc sách.',
    avt: 'https://fullstack.edu.vn/landing/htmlcss/assets/avatars/feedback-2.jpg',
    nameUser: 'Tuan Nguyen',
    course: 'Người học khóa HTML CSS Pro',
  },
  {
    comment:
      'Thích chỗ mỗi phần lý thuyết đều đi kèm 4-5 bài tập, bài nào làm không ra thì có 3-4 phương án gợi ý support luôn (từ gợi ý => gợi ý nhiều => so sánh => full đáp án). rất tiện lợi!',
    avt: 'https://fullstack.edu.vn/landing/htmlcss/assets/avatars/feedback-3.jpg',
    nameUser: 'Ngọc Đoàn',
    course: 'Người học khóa HTML CSS Pro',
  },
  {
    comment:
      'Quả thực không ngoa khi nói đây là khóa học đầy đủ và chi tiết nhất trên internet! Cảm ơn Anh Sơn và đội ngũ F8 đã nỗ lực tạo nên khóa học chất lượng như thế này ạ. Ngóng khóa JS Pro và React Pro ạ',
    avt: 'https://fullstack.edu.vn/landing/htmlcss/assets/avatars/feedback-4.jpg',
    nameUser: 'Khải Võ',
    course: 'Người học khóa HTML CSS Pro',
  },
];

const FeedbackContainer = memo(() => {
  return <Feedback listFeedback={ListFeedback} />;
});

export default FeedbackContainer;
