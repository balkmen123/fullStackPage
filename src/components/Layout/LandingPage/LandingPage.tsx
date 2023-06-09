import { ReactNode } from 'react';
import HeaderLandingPage from './HeaderLandingPage/HeaderLandingPage';
import Footer from '../DefaultLayout/Footer';
import HeaderLandingPageFixed from './HeaderLandingPageFixed/HeaderLandingPageFixed';

type Props = {
  children: ReactNode;
};

function LandingPage(prop: Props) {
  const { children } = prop;

  return (
    <div className="text-[#c9d1d9] text-[1.6rem] leading-[1.6] w-full h-full">
      <div>
        <HeaderLandingPage></HeaderLandingPage>
        <HeaderLandingPageFixed></HeaderLandingPageFixed>
      </div>
      <div>{children}</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default LandingPage;
