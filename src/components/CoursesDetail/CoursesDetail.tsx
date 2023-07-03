import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Modal,
  Typography,
} from '@mui/material';
import { orange } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { LeaningInfo } from '../../models/Leaning/Leaning.model';
import { coursesFree } from '../../pages/Home/Home.container';
import { ListLesson } from './CoursesDetailContainer';
import VideoPlayer from '../VideoJs/VideoPlayer';
import SpeedIcon from '@mui/icons-material/Speed';
import TheatersIcon from '@mui/icons-material/Theaters';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';

interface Prod {
  CourserList: LeaningInfo[];
}

function CoursesDetail(prod: Prod) {
  const [open, setOpen] = useState(false);
  const [currentListCouser, setCurrentListCouser] = useState<LeaningInfo[]>([]);
  const [openItems, setOpenItems] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  console.log('openItems', openItems);

  const listCouser = coursesFree;
  const LessonItems = ListLesson;

  const tottalChapter = LessonItems.length;
  const totalLessons = LessonItems.reduce((total, item) => {
    return total + ((item.lesson_item && item.lesson_item.length) || 0);
  }, 0);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 860,
    height: 575,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '16px',
    padding: '28px',
  };

  console.log('totalLessons', totalLessons);

  const filterCourserList = () => {
    const currentUrl = window.location.href;
    const urlParts = currentUrl.split('/');
    const pageName = decodeURIComponent(urlParts[urlParts.length - 1]);
    const titleCouse = pageName.replace(/-/g, ' ');
    const filteBlogs = listCouser.filter((courses) => courses.course_title === `${titleCouse}`);
    setCurrentListCouser(filteBlogs);
  };

  const handleClick = (idx: any) => {
    setOpenItems(idx);
    setOpen(!open);
  };

  const handleOpen = () => setOpenModal(true);

  const handleClose = () => setOpenModal(false);

  useEffect(() => {
    filterCourserList();
  }, []);
  return (
    <div className="pr-[40px] pl-[20px]">
      <div className="max-w-[1920px] w-full mx-auto">
        <div className="mt-[24px] px-[44px] pb-[68px] mx-[-12px] flex flex-wrap">
          <div className="w-[66.66667%] px-[12px]">
            <h1 className="text-[3.2rem] font-[700] mt-[16px] min-h-[33px] my-[16px]">
              {currentListCouser[0]?.course_title}
            </h1>
            <div className="text-[#333] text-[1.4rem] leading-[1.6]">{currentListCouser[0]?.course_content}</div>
            <h2 className="text-[2rem] font-[700] mt-[36px] mb-[4px]">Bạn sẽ học được gì?</h2>
            <div className="grid grid-cols-2 gap-y-[15px] mt-[20px] text-[#333] text-[1.4rem] leading-[1.6]">
              <div className="">
                <CheckIcon sx={{ color: orange[700], fontSize: 20 }} className="mr-[10px]"></CheckIcon>
                <span>Các kiến thức cơ bản, nền móng của ngành IT</span>
              </div>
              <div className="">
                <CheckIcon sx={{ color: orange[700], fontSize: 20 }} className="mr-[10px]"></CheckIcon>
                <span>Các mô hình, kiến trúc cơ bản khi triển khai ứng dụng</span>
              </div>
              <div className="">
                <CheckIcon sx={{ color: orange[700], fontSize: 20 }} className="mr-[10px]"></CheckIcon>
                <span>Các khái niệm, thuật ngữ cốt lõi khi triển khai ứng dụng</span>
              </div>
              <div className="">
                <CheckIcon sx={{ color: orange[700], fontSize: 20 }} className="mr-[10px]"></CheckIcon>
                <span>Hiểu hơn về cách internet và máy vi tính hoạt động</span>
              </div>
            </div>
            <h1 className="text-[2rem] font-[700] mt-[36px] mb-[10px]">Nội dung khóa học</h1>
            <div className="flex text-[1.4rem] justify-between">
              <ul className="flex m-0 pl-0">
                <li className="inline-block">
                  <strong>{tottalChapter} </strong> chương
                </li>
                <li className="text-[1.4rem] inline-block mt-[1px] opacity-[0.8] px-[8px]">•</li>
                <li>
                  <strong>{totalLessons} </strong> bài học
                </li>
                <li className="text-[1.4rem] inline-block mt-[1px] opacity-[0.8] px-[8px]">•</li>
                <li>
                  <span>
                    Thời lượng <strong>03 giờ 25 phút</strong>
                  </span>
                </li>
              </ul>
              <div className="text-[#f05123] font-[600] ml-auto select-none">Mở rộng tất cả</div>
            </div>
            <div>
              {LessonItems.map((data, index) => {
                const item = data.lesson_item?.length;
                const LessonItem = data.lesson_item;

                return (
                  <List
                    sx={{ width: '100%', bgcolor: 'background.paper', fontSize: 30 }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                  >
                    <ListItemButton
                      key={index}
                      onClick={() => handleClick(index)}
                      sx={{ bgcolor: '#f5f5f5', border: '1px solid #ebebeb', borderRadius: '6px' }}
                    >
                      <ListItemIcon sx={{ minWidth: 0, marginRight: '10px' }}>
                        {open ? (
                          <RemoveIcon sx={{ fontSize: '1.6rem', color: orange[600] }} />
                        ) : (
                          <AddIcon sx={{ fontSize: '1.6rem', color: orange[600] }} />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={`${index + 1}.${data.title_lesson_item}`}
                        primaryTypographyProps={{ fontSize: '1.6rem' }}
                      />
                      <ListItemText
                        primary={`${item} bài học`}
                        primaryTypographyProps={{
                          fontSize: '1.4rem',
                          minWidth: '72px',
                          marginLeft: '70px',
                          style: { float: 'right' },
                        }}
                      />
                    </ListItemButton>
                    {openItems === index && open && (
                      <Collapse in={open} timeout="auto" unmountOnExit>
                        {LessonItem?.map((item, idx) => {
                          return (
                            <List
                              component="div"
                              disablePadding
                              className="border-b-[1px] border-[#00000008] border-solid"
                            >
                              <ListItemButton sx={{ pl: 5 }}>
                                <ListItemIcon sx={{ minWidth: 0, marginRight: '10px' }}>
                                  <PlayCircleIcon sx={{ color: orange[600] }} />
                                </ListItemIcon>
                                <ListItemText
                                  primary={`${idx}. ${item.lesson_title}`}
                                  primaryTypographyProps={{ fontSize: '1.4rem' }}
                                />
                                <ListItemText
                                  primary={`${item.lesson_time}`}
                                  primaryTypographyProps={{
                                    fontSize: '1.4rem',
                                    minWidth: '72px',
                                    marginLeft: '70px',
                                    style: { float: 'right' },
                                  }}
                                />
                              </ListItemButton>
                            </List>
                          );
                        })}
                      </Collapse>
                    )}
                  </List>
                );
              })}
            </div>
          </div>
          <div className="w-[33.33333%] px-[12px]">
            <div className="items-center bg-white flex flex-col mb-[60px] ml-[24px] pb-[20px] sticky  top-[90px]">
              <button className="cursor-pointer" onClick={handleOpen}>
                <div className="rounded-[16px] mt-[2px] mb-[20px] overflow-hidden relative select-none w-full">
                  <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-b from-transparent to-black opacity-90 transition duration-300 after:content-[attr(data-content)]"></div>
                  <img className="w-full object-cover" src={currentListCouser[0]?.thumbnail} alt="" />
                  <PlayCircleIcon
                    sx={{ fontSize: '7rem', position: 'absolute', left: '43%', top: '38%', color: 'white' }}
                  />
                  <p className="text-white text-center text-[1.6rem] w-full font-[600]  left-0 right-0 bottom-0 absolute my-[16px]">
                    Xem giới thiệu khóa học
                  </p>
                </div>
              </button>
              <h5 className="text-[#f05123] text-[32px] font-[400] mx-auto opacity-[0.8]">Miễn phí</h5>
              <button className="text-[1.6rem] mt-[16px] min-w-[180px] py-[10px] px-[16px] bg-[#f05123] text-white border border-solid boder-[#f05123] rounded-[999px] inline-block font-[600] outline-none text-center">
                ĐĂNG KÝ HỌC
              </button>
              <ul className="pt-[24px] pb-[10px] pr-1 text-left">
                <li className="text-[#494949] text-[1.4rem] leading-[1.6] mb-[10px] pl-[35px] relative">
                  <SpeedIcon sx={{ fontSize: 20 }}></SpeedIcon>
                  <span className="ml-[10px]">Trình độ cơ bản</span>
                </li>
                <li className="text-[#494949] text-[1.4rem] leading-[1.6] mb-[10px] pl-[35px] relative">
                  <TheatersIcon sx={{ fontSize: 20 }}></TheatersIcon>
                  <span className="ml-[10px]">Tổng số {totalLessons} bài học</span>
                </li>
                <li className="text-[#494949] text-[1.4rem] leading-[1.6] mb-[10px] pl-[35px] relative">
                  <AccessTimeIcon sx={{ fontSize: 20 }}></AccessTimeIcon>
                  <span className="ml-[10px]">Thời lượng 03 giờ 25 phút</span>
                </li>
                <li className="text-[#494949] text-[1.4rem] leading-[1.6] mb-[10px] pl-[35px] relative">
                  <BatteryChargingFullIcon sx={{ fontSize: 20 }}></BatteryChargingFullIcon>
                  <span className="ml-[10px]">Học mọi lúc, mọi nơi</span>
                </li>
              </ul>
            </div>

            <Modal
              open={openModal}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="modal-modal-title"
                  component="h3"
                  sx={{ fontSize: '1.4rem', color: '#333', fontWeight: '600' }}
                >
                  Giới thiệu khóa học
                </Typography>
                <p style={{ color: '#333', fontSize: '2rem', fontWeight: '900', marginBottom: '24px' }}>
                  {currentListCouser[0]?.course_title}
                </p>
                <VideoPlayer
                  streamUrl="https://www.youtube.com/watch?v=M62l1xA5Eu8&t=1s"
                  thumbnail={currentListCouser[0]?.thumbnail}
                ></VideoPlayer>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesDetail;
