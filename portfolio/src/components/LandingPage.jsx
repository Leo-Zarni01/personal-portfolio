import profile from '../assets/images/leo_avatar.png';
import { useIsVisible } from '../hooks/useIsVisible';
import { useRef } from 'react';

const LandingPage = () => {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  return (
    <>
      <div
        ref={ref1}
        className="min-h-screen flex flex-col justify-center items-center"
      >
        <div>
          <h1
            class={`${
              isVisible1 && 'animate__animated animate__zoomIn'
            } text-white text-3xl font-mantinia`}
          >
            Greetings Traveler from beyond the fog
          </h1>
        </div>
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
            } text-[#84CEEB] text-3xl py-3 uppercase font-montserrat`}
          >
            Leo Zarni
          </h1>
        </div>
        <div>
          <p
            class={`${
              isVisible1 &&
              'animate__animated animate__fadeInUp animate__delay-3s'
            } text-white text-base font-montserrat`}
          >
            Welcome to my page!!
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
