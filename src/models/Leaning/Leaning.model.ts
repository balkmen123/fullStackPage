class LeaningInfo {
  course_id?: number;

  course_title?: string;

  thumbnail?: string;

  course_price?: string;

  course_discount?: string;

  course_studen?: number;

  course_pro?: boolean;

  course_disable?: boolean;

  course_content?: string;

  link?: string;
}

class VideoInfo {
  title?: string;

  view?: number;

  like?: number;

  comment?: number;

  time_video?: string;

  thumbnail?: string;
}

class Post {
  thumbnail?: string;

  title?: string;

  name?: string;

  time?: number;

  green_area?: boolean;

  avt?: string;
}

export { LeaningInfo, VideoInfo, Post };
