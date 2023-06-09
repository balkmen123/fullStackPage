import { ReactElement } from 'react';
import ScrolListVertical from '../../components/ScrolListVertical/ScrolListVertical';
import { LeaningInfo, Post, VideoInfo } from '../../models/Leaning/Leaning.model';
import Slider from '../../components/Slider/Slider';
import './Home.module.scss';

interface IProps {
  coursesVip?: LeaningInfo[];
  coursesFree?: LeaningInfo[];
  posts?: Post[];
  videos?: VideoInfo[];
}

function Home(prop: IProps): ReactElement | null {
  const { coursesFree, coursesVip, posts, videos } = prop;

  return (
    <div className="home">
      <div className="">
        <Slider></Slider>
      </div>

      <div className="mt-[70px] pt-0 pb-[70px] px-[64px]">
        <ScrolListVertical
          data={coursesVip}
          headerLearn="Khóa học Pro"
          newLean={true}
          more={undefined}
        ></ScrolListVertical>
        <p className="text-[#82919b] text-[1.4rem] mb-0 mt-[50px]">322.335+ người khác đã học</p>
        <ScrolListVertical data={coursesFree} more headerLearn="Khóa học miễn phí" newLean={false}></ScrolListVertical>
        <div className="mt-[50px]"></div>
        <ScrolListVertical data={posts} more headerLearn="Bài viết nổi bật" newLean={false}></ScrolListVertical>
        <div className="mt-[50px]"></div>
        <ScrolListVertical data={videos} more headerLearn="Bài viết nổi bật" newLean={false}></ScrolListVertical>
      </div>
    </div>
  );
}

export default Home;
