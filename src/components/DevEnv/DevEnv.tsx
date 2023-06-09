import VideoPlayer from '../VideoJs/VideoPlayer';

function DevEnv() {
  return (
    <div className="py-[64px] pb-[130px] relative">
      <div className="w-[1248px] mx-auto">
        <h2 className="py-[30px] text-center text-[2rem] font-[600] bg-gradient-to-tl from-[#9773ff] to-red-500 text-transparent bg-clip-text">
          <span>Làm bài tập ngay trên trang web...</span>
          <span className="animate-spin">|</span>
        </h2>
        <VideoPlayer
          streamUrl="https://live-par-1-abr-cdn.livepush.io/live_abr_cdn/emaIqCGoZw-6/index.m3u8"
          thumbnail="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
        ></VideoPlayer>
      </div>
      <img
        className="absolute  left-[-128px] bottom-[20px] z-[-1]"
        src="https://fullstack.edu.vn/landing/htmlcss/assets/img/hero-bg-square.svg"
        alt=""
      />
      <img
        className="right-[-128px] top-[200px] absolute z-[-1]"
        src="https://fullstack.edu.vn/landing/htmlcss/assets/img/hero-bg-circle.svg"
        alt=""
      />
      <img
        src="https://fullstack.edu.vn/landing/htmlcss/assets/img/glow-new.png"
        className="w-[90%] absolute inset-0 m-auto z-[-1]"
        alt=""
      />
    </div>
  );
}

export default DevEnv;
