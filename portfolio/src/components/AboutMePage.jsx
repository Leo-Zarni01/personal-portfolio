import { useRef, useState } from 'react';
import profile from '../assets/images/leo_avatar.png';
import ReactCurvedText from 'react-curved-text';
import { useIsVisible } from '../hooks/useIsVisible';

const AboutMePage = () => {
  //   const [width, setWidth] = useState(300);
  //   const [height, setHeight] = useState(300);
  //   const [cx, setCx] = useState(150);
  //   const [cy, setCy] = useState(150);
  //   const [rx, setRx] = useState(100);
  //   const [ry, setRy] = useState(100);
  //   const [startOffset, setStartOffset] = useState(0);
  //   const [reversed, setReversed] = useState(false);
  //   const [text, setText] = useState('About Me');
  //   const currentJsx = (
  //     <ReactCurvedText
  //       width={width}
  //       height={height}
  //       cx={cx}
  //       cy={cy}
  //       rx={rx}
  //       ry={ry}
  //       startOffset={startOffset}
  //       reversed={reversed}
  //       text={text}
  //       //   textProps={textProps}
  //       //   textPathProps={textPathProps}
  //       //   tspanProps={tspanProps}
  //       //   ellipseProps={ellipseProps}
  //       svgProps={{ className: 'rotating-curved-text' }}
  //     />
  //   );
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  return (
    <div
      ref={ref1}
      className="flex flex-row justify-center items-center gap-10 h-0"
      style={{ position: 'relative', top: -500 }}
    >
      <div className="flex flex-col justify-center items-center">
        {/* {currentJsx} */}
        <h1 className="text-center py-8 text-slightly-desaturated-magenta text-xl">
          About Me
        </h1>
        <img
          className={`${
            isVisible1 &&
            'animate__animated animate__fadeInRight animate__delay-1s'
          } rounded-full size-96`}
          src={profile}
          alt="profile"
        />
        <p className="text-center py-8 text-white font-montserrat">
          Hello, my name is Leo and I am a third year Computer Science student
          here at UNSW.
        </p>
      </div>
      <div>
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
      <div>
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
      <div>
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
