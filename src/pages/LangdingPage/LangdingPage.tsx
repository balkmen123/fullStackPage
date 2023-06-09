import CourseContent from '../../components/CourseContent/CourseContent';
import CourseContentContainer from '../../components/CourseContent/CourseContentContainer';
import DevEnv from '../../components/DevEnv/DevEnv';
import FeedbackContainer from '../../components/Feedback/FeedbackContainer';
import Flashcards from '../../components/Flashcards/Flashcards';
import Hero from '../../components/Hero/Hero';
import SectionFeaturesContainer from '../../components/SectionFeatures/SectionFeaturesContainer';
import SectionMentor from '../../components/SectionMentor/SectionMentor';
import SectionProjects from '../../components/SectionProjects/SectionProjects';
import Specifications from '../../components/Specifications/Specifications';
import StartFree from '../../components/StartFree/StartFree';
import TheEnd from '../../components/TheEnd/TheEnd';
import ShouldBuyContainer from '../../components/whyShouldBuy/ShouldBuyContainer';
import './LangdingPage.module.scss';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const LangdingPage = () => {
  const moveTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="content">
      <Hero></Hero>
      <DevEnv></DevEnv>
      <SectionProjects></SectionProjects>
      <SectionMentor></SectionMentor>
      <CourseContentContainer></CourseContentContainer>
      <Flashcards></Flashcards>
      <SectionFeaturesContainer></SectionFeaturesContainer>
      <ShouldBuyContainer></ShouldBuyContainer>
      <FeedbackContainer></FeedbackContainer>
      <StartFree></StartFree>
      <Specifications></Specifications>
      <TheEnd></TheEnd>
      <button
        onClick={moveTop}
        className="w-[56px] h-[56px] rounded-[50%] fixed z-[998] bottom-[100px] right-[100px] bg-[#739931]  animate-bounce "
      >
        <KeyboardDoubleArrowUpIcon color="secondary" sx={{ fontSize: 40 }}></KeyboardDoubleArrowUpIcon>
      </button>
    </div>
  );
};
export default LangdingPage;
