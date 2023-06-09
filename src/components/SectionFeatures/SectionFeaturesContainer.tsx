import { memo } from 'react';
import { Features } from './SectionFeatures.model';
import SectionFeatures from './SectionFeatures';

const ListFeatures: Features[] = [
  { features: 'Chuyên sâu và bài bản hơn' },
  { features: 'Thực hành 8 dự án thực tế' },
  { features: '400+ bài học, 300+ bài tập' },
  { features: '200+ flashcards, 3+ games' },
  { features: 'Đáp án cho mọi bài tập' },
  { features: 'Kênh hỏi đáp riêng tư' },
  { features: 'Tặng 20+ Figma bản Pro' },
];
const SectionFeaturesContainer = memo(() => {
  return <SectionFeatures listFeatures={ListFeatures} />;
});
export default SectionFeaturesContainer;
