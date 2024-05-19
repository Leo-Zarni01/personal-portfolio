import profile from '../assets/images/leo_avatar.png';
import instagram from '../assets/images/instagram-logo.png';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import { useIsVisible } from '../hooks/useIsVisible';
import { useRef } from 'react';
const ContactPage = () => {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  return (
    <>
      <div
        // min-h-screen dont forget to put this back in className
        ref={ref1}
        className="flex flex-col justify-center items-center h-0"
        style={{ position: 'relative', top: -500 }}
      >
        <div>
          <img
            className={`${
              isVisible1 &&
              'animate__animated animate__fadeInRight animate__delay-1s'
            } rounded-full size-96`}
            src={profile}
            alt="profile"
          />
        </div>
        <div>
          <h1
            class={`${
              isVisible1 &&
              'animate__animated animate__fadeInUp animate__delay-2s'
            } text-slightly-desaturated-magenta text-xl py-3 uppercase font-montserrat`}
          >
            Contact me!
          </h1>
        </div>
        <div>
          <div className="flex flex-row gap-4">
            <div className="hover:scale-125">
              <a target="_blank" href="https://www.instagram.com/leozarni/">
                <img
                  className={`${
                    isVisible1 &&
                    'animate__animated animate__fadeInRight animate__delay-1s'
                  } rounded-full size-10`}
                  src={instagram}
                  alt="instagram"
                />
              </a>
            </div>
            <div className="hover:scale-125">
              <a target="_blank" href="https://www.linkedin.com/in/khant-zarni">
                <img
                  className={`${
                    isVisible1 &&
                    'animate__animated animate__fadeInRight animate__delay-1s'
                  } rounded-full size-10`}
                  src={linkedin}
                  alt="linkedin"
                />
              </a>
            </div>
            <div className="hover:scale-125">
              <a href="https://www.github.com/Leo-Zarni01">
                <img
                  className={`${
                    isVisible1 &&
                    'animate__animated animate__fadeInRight animate__delay-1s'
                  } rounded-full size-10`}
                  src={github}
                  alt="github"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
