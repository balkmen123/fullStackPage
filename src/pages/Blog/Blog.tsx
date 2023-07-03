import React, { useEffect, useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { BlogModel } from './Blog.model';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Pagination, PaginationItem, Typography } from '@mui/material';
interface Prod {
  listBlog?: BlogModel[];
}

function Blog(prod: Prod) {
  const { listBlog = [] } = prod;
  const [filteredBlogs, setFilteredBlogs] = useState<BlogModel[]>([]);
  const [page, setPage] = useState(1);

  const pageSize = 2;
  const pageCount = Math.ceil(filteredBlogs.length / pageSize);
  const paginatedData = _.chunk(filteredBlogs?.slice((page - 1) * pageSize), pageSize);

  const handleChange = (event: any, value: any) => {
    setPage(value);
  };
  const handMove = () => {
    setPage(1);
    setTimeout(() => {
      const currentUrl = window.location.href;
      const urlParts = currentUrl.split('/');
      const pageName = urlParts[urlParts.length - 1];
      if (listBlog && pageName != 'blog') {
        console.log('nam');

        const filteBlogs = listBlog.filter((blog) => blog.topic === `${pageName}`);
        setFilteredBlogs(filteBlogs);
      } else {
        console.log('123123');

        setFilteredBlogs(listBlog);
      }
    }, 200);
  };
  useEffect(() => {
    handMove();
  }, []);

  return (
    <div className="pl-[20px] pr-[40px] max-w-[calc(100% - 96px)]">
      <div className="max-w-[1920px] w-full mx-auto">
        <div className="mb-[60px] px-[44px] pt-2">
          <div className="mb-[80px]">
            <h1 className="text-[#242424] text-[2.8rem] font-[900]  my-[19px]">Bài viết nổi bật</h1>
            <div className="text-[1.5rem] leading-[1.6] max-w-[840px] break-words text-[#292929]">
              <p className="my-[6px]">
                Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online và các kỹ thuật lập trình web.
              </p>
            </div>
          </div>
          <div className="container-blog flex">
            <div className="content-left w-[66.66667%] pr-3">
              <div className="pr-[64px] pb-[44px]">
                {paginatedData[0]?.map((data) => {
                  return (
                    <div className="border-[2px] border-solid border-[#e8e8e8] rounded-[16px] p-[24px] mb-[20px]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img
                            className="w-[26px] h-[26px] object-cover rounded-[50%]"
                            src={data.imgAvt}
                            alt={data.nameUser}
                          />
                          <span className="text-[#292929] font-[600] text-[1.2rem] ml-2">{data.nameUser}</span>
                        </div>
                        <div>
                          <BookmarkBorderIcon color="action" sx={{ fontSize: 25 }}></BookmarkBorderIcon>
                          <MoreHorizIcon color="action" sx={{ fontSize: 25 }}></MoreHorizIcon>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="text-[1.4rem] flex-1 pr-[32px]">
                          <a href="/blog/cam-thay-kho-khan-khi-chuyen-sang-hoc-mot-ngon-ngu-moi.html">
                            <h2 className=" text-[#292929] text-[2rem] font-[700] leading-[1.6] mb-0 my-[8px]">
                              {data.headerBlog}
                            </h2>
                          </a>
                          <p className="text-[#505050] text-[1.5rem] leading-[1.6] mt-[4px] mb-[15px]">
                            {data.descripbeBlog}
                          </p>
                          <div className="text-[1.4rem] pr-[32px]">
                            <a
                              className="bg-[#f2f2f2] rounded-[100px] text-[#333] font-[500] leading-[2rem] mr-3 py-1 px-[10px]"
                              href="/blog/tag/reactjs?page=1"
                            >
                              ReactJS
                            </a>
                            <span>{data.postTime}</span>
                            <span className="mx-[8px] text-[1.4rem]">·</span>
                            {data.readingTime}
                          </div>
                        </div>
                        <div className="PostItem_thumb__m4iXl">
                          <a href="/blog/hoc-vien-funix-lac-duong-toi-f8.html">
                            <img
                              className=" bg-[#ebebeb] rounded-[15px] text-[#757575] block text-[1.4rem] max-h-[120px] object-cover overflow-hidden text-center w-[200px]"
                              src={data.thumbnailBlog}
                              alt="Học viên Funix lạc đường tới F8"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="content-right w-[33.3333%] px-3">
              <div>
                <h3 className="text-[1.4rem] text-[#757575] font-[500] leading-[1.8] uppercase my-[14px]">
                  Các chủ đề được đề xuất
                </h3>
                <div className="flex flex-wrap gap-4">
                  <div>
                    <Link
                      onClick={handMove}
                      to={'/blog/Front-end-Mobile'}
                      className="text-[1.4rem] bg-[#f2f2f2] rounded-[30px] text-[#333] block font-[500] leading-[1.8]  px-[16px] py-[6px]"
                    >
                      Front-end / Mobile apps
                    </Link>
                  </div>
                  <div>
                    <Link
                      onClick={handMove}
                      to={'/blog/Back-End-Devops'}
                      className="text-[1.4rem] bg-[#f2f2f2] rounded-[30px] text-[#333] block font-[500] leading-[1.8]  px-[16px] py-[6px]"
                    >
                      Back-end-Devops
                    </Link>
                  </div>
                  <div>
                    <Link
                      onClick={handMove}
                      to={'/blog/UI-UX-Design'}
                      className="text-[1.4rem] bg-[#f2f2f2] rounded-[30px] text-[#333] block font-[500] leading-[1.8]  px-[16px] py-[6px]"
                    >
                      UI / UX / Design
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Typography className="text-[15px]">Page: {page}</Typography>
            <Pagination
              page={page}
              defaultPage={1}
              count={pageCount}
              onChange={handleChange}
              shape="rounded"
              size="large"
              color="primary"
              // page={page}
              renderItem={(item) => {
                return <PaginationItem component={Link} to={`/Blog`} {...item} sx={{ fontSize: 15 }} />;
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
