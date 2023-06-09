import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface Prop {
  colorText?: string;
  colorBg?: string;
  text?: string;
  classN?: string;
}

function BtnBuy(prop: Prop) {
  const { colorText, colorBg, text, classN } = prop;
  return (
    <div>
      <button
        className={`group ${colorText} ${colorBg} ${classN}  inline-flex items-center justify-center h-[52px] rounded-[16px] border-[1.5px] border-solid border-[#494b52] px-[28px] py-[2px] text-[2rem] font-[700] hover:opacity-[0.9] `}
      >
        {text}
        <ChevronRightIcon
          className="relative top-[2px] transition-all duration-300 ease-linear group-hover:translate-x-1"
          sx={{ fontSize: 30 }}
        ></ChevronRightIcon>
      </button>
    </div>
  );
}

export default BtnBuy;
