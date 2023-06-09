import { IconComma } from '../Icons/Icon';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { feedback } from './Feedback.model';

interface Prop {
  listFeedback?: feedback[];
}

function Feedback(prop: Prop) {
  const { listFeedback } = prop;
  return (
    <div className="mt-[90px] py-[90px]">
      <div className="w-[1248px] mx-auto">
        <header className="text-center">
          <h2 className="second-heading leading-[1.4] text-[4.2rem] font-[700] text-white">
            Mọi người nói gì về khóa học này?
          </h2>
        </header>
        <div className="grid grid-cols-2 mt-[32px] gap-[32px]">
          {listFeedback?.map((data) => {
            return (
              <div className="rounded-[32px] bg-[#161b22] box-shadow p-[32px]">
                <FeedbackIcon sx={{ fontSize: 90, color: '#9333ea' }}></FeedbackIcon>
                <blockquote className="content mt-[10px] text-[2.8rem] text-white">{data.comment}</blockquote>
                <div className="user flex items-center mt-[32px]">
                  <img
                    src={data.avt}
                    alt="Người học khóa HTML CSS Pro"
                    className="avatar w-[40px] h-[40px] rounded-[50%] object-cover"
                  />
                  <div className="info flex-[1] ml-[10px]">
                    <span className="name text-[2rem] block leading-[1.4]">{data.nameUser}</span>
                    <span className="title text-[1.4rem] font-mono text-[#8b949e] block leading-[1.4]">
                      {data.course}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Feedback;
