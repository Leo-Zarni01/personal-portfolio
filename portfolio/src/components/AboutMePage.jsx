import { useRef, useState } from 'react';
import profile from '../assets/images/leo_avatar.png';
import gojo from '../assets/images/gojo.gif';
import luffy from '../assets/images/luffy.gif';
import omen from '../assets/images/omen-valorant.gif';
import { useIsVisible } from '../hooks/useIsVisible';
import ReactCurvedText from 'react-curved-text';

const AboutMePage = () => {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  return (
    <div
      ref={ref1}
      className="flex flex-row justify-center items-center gap-16 h-0"
      style={{ position: 'relative', top: '-30rem' }}
    >
      <div className="relative flex flex-col justify-center items-center">
        <div
          className={`${
            isVisible1 && 'animate-spin [animation-duration:_3s]'
          } absolute top-0 left-0`}
        >
          {/* <CurvedText /> */}
          <ReactCurvedText
            width="400"
            height="400"
            cx="192"
            cy="192"
            rx="192"
            ry="192"
            startOffset="90"
            reversed={true}
            text="About me"
            textProps={{ style: { fontSize: '32' } }}
            textPathProps={{ fill: '#999' }}
            tspanProps={null}
            ellipseProps={null}
            svgProps={{ className: 'rotating-curved-text' }}
          />
        </div>
        {/* {currentJsx} */}
        {/* <h1 className="text-center py-8 text-slightly-desaturated-magenta text-xl">
          About Me
        </h1> */}
        <img
          className={`${
            isVisible1 &&
            'animate__animated animate__fadeInRight animate__delay-1s'
          } rounded-full size-96`}
          style={{ position: 'relative' }}
          src={profile}
          alt="profile"
        />
        <p
          className={`${
            isVisible1 &&
            'animate__animated animate__fadeInUp animate__delay-2s'
          } text-center py-8 text-white font-montserrat w-96`}
        >
          Hello!! I'm Leo and I am a third year Computer Science student here at
          UNSW. I'm in my final year of studies, so I am focusing on connecting
          with new people, and learning the latest technology to keep myself
          updated. In my spare time, I like to listen to music, play some
          sports, or play video games.
        </p>
      </div>
      <div style={{ position: 'relative', top: -100 }}>
        <img
          className={`${
            isVisible1 &&
            'animate__animated animate__fadeInRight animate__delay-1s'
          } rounded-full size-48`}
          src={luffy}
          alt="profile"
        />
      </div>
      <div style={{ position: 'relative', top: -100 }}>
        <img
          className={`${
            isVisible1 &&
            'animate__animated animate__fadeInRight animate__delay-1s'
          } rounded-full size-48`}
          src={omen}
          alt="profile"
        />
      </div>
      <div style={{ position: 'relative', top: -100 }}>
        <img
          className={`${
            isVisible1 &&
            'animate__animated animate__fadeInRight animate__delay-1s'
          } rounded-full size-48`}
          src={gojo}
          alt="profile"
        />
      </div>
    </div>
  );
};

export default AboutMePage;
