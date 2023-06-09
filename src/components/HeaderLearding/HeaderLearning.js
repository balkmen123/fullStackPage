import { faChevronCircleRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HeaderLearning({ text, newLeaning, more }) {
  return (
    <div className=" flex items-baseline">
      <h1 className="text-[#242424] text-[2.4rem] font-[900] mr-auto">
        {text ? text : ''}
        {newLeaning && (
          <span className="bg-[#1473e6] rounded-[4px] text-white text-[1.2rem] font-[500] px-[6px] py-[3px] relative right-[-2px] top-[-8px]">
            MỚI
          </span>
        )}
      </h1>
      {more && (
        <a className="group hover:underline hover:outline-none bg-transparent text-[#f05123] cursor-pointer text-[1.5rem] font-[600] mr-1 p-4">
          Xem lộ trình
          <FontAwesomeIcon
            className="text-[1.1rem] ml-1 relative top-[-1] transition ease-out duration-300 transform group-hover:translate-x-2"
            icon={faChevronRight}
          ></FontAwesomeIcon>
        </a>
      )}
    </div>
  );
}

export default HeaderLearning;
