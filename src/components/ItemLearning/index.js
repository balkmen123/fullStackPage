import {
  faCircle,
  faCircleCheck,
  faComment,
  faEye,
  faPlay,
  faThumbsUp,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function ItemLearning({ data }) {
  console.log(data);
  return (
    <Link to={data.link}>
      <div className="item relative">
        <div className="group h-[225px] relative">
          <img className="rounded-[16px] w-full h-full object-cover" src={data.thumbnail}></img>
          {!data.course_disable && (
            <div className="show-btn absolute  bg-black bg-opacity-50 w-full h-[225px] top-0 rounded-[16px] opacity-0 group-hover:opacity-100 cursor-pointer transition ease-out duration-500">
              <button className="  bg-white border-white text-black rounded-[99px] text-center text-[1.4rem] outline-none font-[600] px-[16px] py-[10px] absolute top-[40%] left-[35%] animate-bounce">
                Xem khóa học
              </button>
            </div>
          )}
          {data.comment && (
            <div className="absolute bottom-0 left-0 right-0 z-[1] items-center flex justify-between p-4">
              <div className="flex justify-center rounded-[10px] bg-[#fff] items-center h-[36px] w-[36px]">
                <FontAwesomeIcon icon={faPlay} className="text-[#333] text-[1.3rem]"></FontAwesomeIcon>
              </div>
              <div className="border-[2px] border-solid border-[#fff] px-[12px] py-[7px] rounded-[999px]  text-[1.3rem] font-[600] text-[#fff]">
                {data.time_video}
              </div>
            </div>
          )}
        </div>

        <div className="bg-black bg-opacity-30 rounded-[8px] left-[12px] p-[5px] absolute top-[12px] w-[26px] ">
          <img src="https://fullstack.edu.vn/static/media/crown_icon.3e4800f7485935ab6ea312a7080a85fe.svg"></img>
        </div>
        <a href="#" className="my-[12px] block font-semibold text-[1.6rem] leading-6">
          {data.course_title}
        </a>
        {data.course_pro && (
          <>
            <span className="text-[1.4rem] mr-[8px] line-through">{data.course_price}</span>
            <span className="text-[#f05123] text-[1.6rem] font-[600]">{data.course_discount}</span>
          </>
        )}
        {!data.course_pro && !data.avt && !data.comment && (
          <div className="flex items-center">
            <FontAwesomeIcon icon={faUsers} className="text-gray-500"></FontAwesomeIcon>
            <p className="ml-[8px] text-[#666] text-[1.4rem]">{data.course_studen}</p>
          </div>
        )}
        {data.avt && (
          <div>
            <div className="mb-[12px]">
              <a className="text-[#292929] text-[1.6rem] leading-[1.4] overflow-hidden font-[600]">{data.title}</a>
            </div>
            <div className="flex items-center">
              <img src={data.avt} className="rounded-[50%] h-[1.5em] object-cover w-[1.5em]"></img>
              <p className="ml-[10px] mr-2 text-[#292929] font-[600] text-[1.4rem]">{data.name}</p>

              {data.green_area && (
                <FontAwesomeIcon icon={faCircleCheck} className="text-[#1b74e4] text-[1.2rem]"></FontAwesomeIcon>
              )}
              <p className="ml-5 text-[#757575] text-[1.4rem]">{data.time} phút đọc</p>
            </div>
          </div>
        )}
        {data.comment && (
          <div>
            <p className="text-[#292929] text-[1.6rem] leading-[1.4] font-[600] mb-3">{data.title}</p>
            <div className="flex flex-wrap text-[#757575] text-[1.4rem]  gap-x-6">
              <div>
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> <span>{data.view}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon> <span>{data.like}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faComment}></FontAwesomeIcon> <span>{data.comment}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

export default ItemLearning;
