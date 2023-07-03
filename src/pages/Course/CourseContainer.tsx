import { courses, coursesFree } from '../Home/Home.container';
import Course from './Course';

function CourseContainer() {
  return (
    <div>
      <Course coursesFree={coursesFree} course={courses}></Course>
    </div>
  );
}

export default CourseContainer;
