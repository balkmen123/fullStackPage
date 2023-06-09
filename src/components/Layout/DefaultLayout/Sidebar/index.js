import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHouse, faLightbulb, faNewspaper, faPlus, faRoad } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Sidebar() {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  let ClassFocus = 'bg-[#e8ebed]';

  const handLink = (index) => {
    setFocusedIndex(index);
    console.log(index);
  };
  console.log('focusedIndex', focusedIndex);
  return (
    <aside class="w-[96px] h-full mt-[20px] fixed top-[80px] ">
      <div class="menu flex flex-col items-center">
        <div
          class={` mb-[20px] flex items-center justify-center bg-[#1473e6] rounded-[50%] text-white cursor-pointer h-[44px] w-[44px]`}
        >
          <FontAwesomeIcon class="w-full h-full p-5 motion-safe:hover:scale-125" icon={faPlus}></FontAwesomeIcon>
        </div>
        <ul class="grid grid-cols-1 gap-y-[5px]">
          <li>
            <Link
              onClick={() => handLink(1)}
              key={3}
              to="/"
              class={` ${
                focusedIndex === 1 ? 'bg-[#e8ebed]' : ''
              } focus:bg-[#e8ebed] hover:bg-[#e8ebed] text-[#1a1a1a] flex items-center justify-center flex-col h-[72px] w-[72px] cursor-pointer rounded-2xl`}
            >
              <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
              <span className="text-[1.1rem] pt-[6px] font-semibold">Home</span>
            </Link>
          </li>

          <li>
            <Link
              onClick={() => handLink(2)}
              to="/"
              class={`${
                focusedIndex === 2 ? 'bg-[#e8ebed]' : ''
              } focus:bg-[#e8ebed] hover:bg-[#e8ebed] text-[#1a1a1a] flex items-center justify-center flex-col h-[72px] w-[72px] cursor-pointer rounded-2xl`}
            >
              <FontAwesomeIcon icon={faRoad}></FontAwesomeIcon>
              <span className="text-[1.1rem] pt-[6px] font-semibold">Lộ trình</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handLink(3)}
              class={`${
                focusedIndex === 3 ? 'bg-[#e8ebed]' : ''
              } focus:bg-[#e8ebed]  hover:bg-[#e8ebed] text-[#1a1a1a] flex items-center justify-center flex-col h-[72px] w-[72px] cursor-pointer rounded-2xl`}
            >
              <FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon>
              <span className=" text-[1.1rem] pt-[6px] font-semibold">Học</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handLink(4)}
              class={`${
                focusedIndex === 4 ? 'bg-[#e8ebed]' : ''
              } focus:bg-[#e8ebed] hover:bg-[#e8ebed]  text-[#1a1a1a] flex items-center justify-center flex-col h-[72px] w-[72px] cursor-pointer rounded-2xl`}
            >
              <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>
              <span className="text-[1.1rem] pt-[6px] font-semibold">Blog</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
