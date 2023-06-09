import { memo } from 'react';
import ShoulBuy from './ShouldBuy';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import BackHandIcon from '@mui/icons-material/BackHand';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Should } from './ShouldBuy.model';

const list: Should[] = [
  {
    icon: <AutoFixHighIcon sx={{ fontSize: 30 }}></AutoFixHighIcon>,
    header: 'Theo lộ trình bài bản',
    descripbe:
      'Kiến thức được sắp xếp từ cơ bản tới nâng cao, phù hợp cho dù bạn là người mới bắt đầu. Sơn Đặng có trên 8 năm kinh nghiệm thực tế, những kiến thức anh chia sẻ đều sẽ giúp ích khi bạn đi làm tại doanh nghiệp.',
  },
  {
    icon: <BackHandIcon sx={{ fontSize: 30 }}></BackHandIcon>,
    header: 'Thực hành 8 dự án',
    descripbe:
      'Phần lớn người học chỉ cần xem hướng dẫn tới dự án I. Từ dự án II trở đi họ đã bắt đầu tự làm mà không phụ thuộc vào hướng dẫn. Trải qua 8 dự án, chắc chắn bạn sẽ tự làm được hầu hết các giao diện trang web mà bạn thấy.',
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 30 }}></TrendingUpIcon>,
    header: 'Học trên nền tảng hàng đầu',
    descripbe:
      'Khóa học Pro được thiết kế riêng biệt, không học chung với nền tảng Free. Các tính năng, các tiện ích luôn được phát triển để đáp ứng tối đa nhu cầu tự học lập trình. Hướng tới mục tiêu cá nhân hóa trải nghiệm học tập cho từng học viên.',
  },
  {
    icon: <PermIdentityIcon sx={{ fontSize: 30 }}></PermIdentityIcon>,
    header: 'Người "thầy" tâm huyết',
    descripbe:
      'Một trong những yếu tố quan trọng để chọn lựa khóa học online đó là chọn "thầy". Từ kiến thức, giọng nói, cách truyền đạt, ... của họ đều phải phù hợp thì người học mới có thêm động lực. Bạn có thể trải nghiệm miễn phí các bài học từ Sơn Đặng.',
  },
];

const ShouldBuyContainer = memo(() => {
  return <ShoulBuy listShould={list} />;
});
export default ShouldBuyContainer;
