import { useRef, useState } from 'react';
import profile from '../assets/images/leo_avatar.png';
import { useIsVisible } from '../hooks/useIsVisible';
import CurvedText from './CurvedText';
import ReactCurvedText from 'react-curved-text';

const AboutMePage = () => {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  return (
    <div
      ref={ref1}
      className="flex flex-row justify-center items-center gap-10 h-0"
      style={{ position: 'relative', top: -600 }}
    >
      <div className="relative flex flex-col justify-center items-center">
        <div className="absolute top-0 left-0 animate-spin [animation-duration:_3s]">
          {/* <CurvedText /> */}
          <ReactCurvedText
            width="400"
            height="400"
            cx="224"
            cy="224"
            rx="224"
            ry="224"
            startOffset="10"
            reversed={true}
            text="About me"
            textProps={{ style: { fontSize: '26' } }}
            textPathProps={{ fill: '#854c4c' }}
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
        <p className="text-center py-8 text-white font-montserrat w-96">
          Hello, I'm Leo and I am a third year Computer Science student here at
          UNSW. I'm in my final year of studies, so I am focusing on connecting
          with new people, and learning the latest technology to keep myself
          updated. In my spare time, I like to listen to music, play some
          sports, or play video games.
        </p>
      </div>
      <div style={{ position: 'relative', top: -50 }}>
        <h1 className="text-center py-3 text-slightly-desaturated-magenta">
          Entertainment
        </h1>
        <img
          className={`${
            isVisible1 &&
            'animate__animated animate__fadeInRight animate__delay-1s'
          } rounded-full size-32`}
          src={profile}
          alt="profile"
        />
      </div>
      <div style={{ position: 'relative', top: -50 }}>
        <h1 className="text-center py-3 text-slightly-desaturated-magenta">
          Hobbies
        </h1>
        <img
          className={`${
            isVisible1 &&
            'animate__animated animate__fadeInRight animate__delay-1s'
          } rounded-full size-32`}
          src={profile}
          alt="profile"
        />
      </div>
      <div style={{ position: 'relative', top: -50 }}>
        <h1 className="text-center py-3 text-slightly-desaturated-magenta">
          Technical skills
        </h1>
        <img
          className={`${
            isVisible1 &&
            'animate__animated animate__fadeInRight animate__delay-1s'
          } rounded-full size-32`}
          src={profile}
          alt="profile"
        />
      </div>
    </div>
  );
};

export default AboutMePage;
