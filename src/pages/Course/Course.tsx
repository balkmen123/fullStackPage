import ScrolListVertical from '../../components/ScrolListVertical/ScrolListVertical';
import { LeaningInfo } from '../../models/Leaning/Leaning.model';
import StudyRoute from '../StudyRoute/StudyRoute';

interface Course {
  course: LeaningInfo[];
  coursesFree?: LeaningInfo[];
}

function Course(prop: Course) {
  const { course, coursesFree } = prop;
  return (
    <div className="pl-[20px] pr-[40px]">
      <div className="max-w-[1920px] w-full mx-auto">
        <div className="pt-[8px] px-[44px] mb-[60px]">
          <div className="mb-[80px] ">
            <h1 className="text-[#242424] text-[2.8rem] font-[900] my-[18px]">Khóa học</h1>
            <div className="text-[1.5rem] leading-[1.6] max-w-[840px] break-words">
              <p>
                Các khóa học được thiết kế phù hợp cho cả người mới, nhiều khóa học miễn phí, chất lượng, nội dung dễ
                hiểu.
              </p>
            </div>
          </div>
          <ScrolListVertical data={course} more headerLearn="Khóa học miễn phí" newLean={false}></ScrolListVertical>
          <div className="mt-[50px]">
            <ScrolListVertical
              data={coursesFree}
              more
              headerLearn="Khóa học miễn phí"
              newLean={false}
            ></ScrolListVertical>
          </div>
          <div className="items-center flex justify-between mt-[50px] overflow-hidden">
            <div className="w-[400px]">
              <h2 className="font-[900] text-[2.4rem] leading-[1.6] my-[19px]">
                Bạn đang tìm kiếm lộ trình học cho người mới?
              </h2>
              <p className="text-[1.4rem] leading-[1.6] my-[19px]">
                Các khóa học được thiết kế phù hợp cho người mới, lộ trình học rõ ràng, nội dung dễ hiểu.
              </p>
              <a
                className="border-[2px] border-solid border-[#292929] rounded-[999px] inline-block text-[1.5rem] font-[600] mt-[8px] py-[10px] px-[16px] text-center"
                target="_blank"
                href="https://www.facebook.com/groups/f8official"
                rel="noopener"
              >
                Xem lộ trình
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
    </div>
  );
}

export default Course;
