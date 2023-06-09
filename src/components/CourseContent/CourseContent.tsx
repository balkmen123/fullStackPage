import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Track } from './CourseContent.model';

interface Prod {
  listTrack?: Track[];
}

function CourseContent(prod: Prod) {
  const { listTrack } = prod;
  return (
    <div className="mt-[100px] py-[64px]">
      <div className="container w-[1248px] mx-auto">
        <div className="inner px-[64px] py-[48px] rounded-[16px] bg-[#161b22]">
          <h2 className="second-heading leading-[1.4] text-[4.2rem] font-[700] text-white">
            Kiến thức đầy đủ và chi tiết nhất ✨
          </h2>
          <p className="desc max-w-[620px] mt-[16px] text-[2rem] text-[#8b949e]">
            Với
            <strong className="text-highlight text-transparent bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text">
              400+ bài học
            </strong>
            , bài tập và thử thách, đây sẽ là khóa học đầy đủ và chi tiết nhất bạn có thể tìm kiếm được ở trên Internet.
          </p>
          <div className="mt-[50px]  grid grid-cols-4 gap-x-10">
            {listTrack?.map((data) => {
              return (
                <div className="text-[18px] my-[10px] flex items-center">
                  <FiberManualRecordIcon sx={{ fontSize: 10 }} className="mr-[20px]"></FiberManualRecordIcon>
                  {data.track}
                </div>
              );
            })}
          </div>
          <div>
            <p className="help mt-[40px] italic text-[#8b949e] ">
              * Ở đây chỉ bao gồm nội dung tiêu biểu. Nếu muốn, bạn có thể
              <a
                className="text-highlight text-transparent bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text font-[600] ml-[5px]"
                href="https://htmlcss.fullstack.edu.vn/"
              >
                xem đầy đủ nội dung khóa học
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseContent;
