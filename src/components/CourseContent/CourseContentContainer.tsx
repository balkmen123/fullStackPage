import { memo } from 'react';
import { Track } from './CourseContent.model';
import CourseContent from './CourseContent';

const ListTrack: Track[] = [
  { track: 'Tính thừa kế CSS' },
  { track: 'Thẻ inline và block' },
  { track: 'Đệm, viền, khoảng lề' },
  { track: 'Đơn vị trong CSS' },
  { track: 'Làm việc với font chữ' },
  { track: 'Làm việc với hình ảnh' },
  { track: 'Làm việc với background' },
  { track: 'Thuộc tính vị trí (position)' },
  { track: 'Sử dụng biến trong CSS' },
  { track: 'CSS selectors nâng cao' },
  { track: 'Đặt tên class chuẩn BEM' },
  { track: 'Semantic trong HTML5' },
  { track: 'Sử dụng Flexbox' },
  { track: 'Sử dụng CSS Grid' },
  { track: 'Forms và validations' },
  { track: 'Responsive web design' },
  { track: 'Grid system 12 columns' },
  { track: 'Sử dụng Animations' },
  { track: 'Hướng dẫn sử dụng Sass' },
  { track: 'Web accessibility' },
  { track: 'Tìm hiểu về UI và UX' },
  { track: 'Rèn luyện mắt thẩm mỹ' },
  { track: 'Sử dụng Git, Github' },
  { track: 'Kiến thức SEO cơ bản' },
  { track: 'Tra cứu thẻ HTML' },
  { track: 'Tính hợp lệ của HTML' },
  { track: 'Tìm hiểu pseudo-elements' },
];
const CourseContentContainer = memo(() => {
  return <CourseContent listTrack={ListTrack} />;
});
export default CourseContentContainer;
