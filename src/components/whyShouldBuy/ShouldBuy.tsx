import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Should } from './ShouldBuy.model';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

interface Prop {
  listShould?: Should[];
}

function ShoulBuy(prop: Prop) {
  const { listShould } = prop;
  return (
    <div className="mt-[150px] py-[70px] px-0 pb-[100px] bg-[#161b22]">
      <div className="w-[1248px] mx-auto">
        <header className="text-center">
          <h2 className="second-heading leading-[1.4] font-[700] text-[4.2rem] text-white">
            Tại sao bạn nên sở hữu khóa học này?
          </h2>
          <p className="group desc mt-[20px] text-[2rem] font-[600] ">
            <a href="https://htmlcss.fullstack.edu.vn/" className="text-[#c9d1d9] no-underline">
              <span> Cách khóa học này giúp bạn thành thạo HTML CSS? </span>
              <ChevronRightIcon
                className="relative transform transition duration-500 ease-in-out group-hover:translate-x-2 top-[-2px]"
                sx={{ fontSize: 30 }}
              ></ChevronRightIcon>
            </a>
          </p>
        </header>
        <div className="grid grid-cols-2 gap-[80px] mt-[90px]">
          {listShould?.map((data) => {
            return (
              <div>
                <div className="flex items-center justify-center w-[56px] h-[56px] text-[#8957e5] text-[2.4rem] bg-[#20242b] rounded-[50%] ">
                  {data.icon}
                  {/* <AutoFixHighIcon sx={{ fontSize: 30 }}></AutoFixHighIcon> */}
                </div>
                <h3 className="third-heading my-[20px] leading-[1.4] text-[2.8rem] font-[700] text-white">
                  {data.header}
                </h3>
                <p className="item-desc text-[#8b949e] text-[2rem]">{data.descripbe}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShoulBuy;
