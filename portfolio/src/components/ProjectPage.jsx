import { useRef } from 'react';
import Project from './Project';
import { useIsVisible } from '../hooks/useIsVisible';
import nerdStation from '../assets/images/nerd-station.JPG';

const ProjectPage = (props) => {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  return (
    <section ref={ref1} id="projects" className="text-xl h-[0rem] bg-red-500">
      <div className="projects-container">
        {/* flex flex-col justify-center items-center pt-5 */}
        <div
          className="heading flex flex-col justify-center items-center pt-5 text-white"
          style={{ position: 'relative', top: -1080 }}
        >
          <h3
            className={`${
              isVisible1 &&
              'animate__animated animate__zoomIn animate__delay-1s'
            } title text-center text-4xl`}
          >
            My Works
          </h3>
          <p className="separator bg-[#f300b4] w-[150px] h-[2px] m-[1rem auto]" />
          <p
            className={`${isVisible1} animate__animated animate__zoomIn animate__delay-1s subtitle text-center w-4/12 my-px-0 mx-px-auto pt-3`}
          >
            Here are some of my projects that I have worked as a team during my
            studies at the university. Both of them are front-end based, so I am
            thinking of working on more backend projects in the future.
          </p>
        </div>
        <div
          className={`${isVisible1} && projects-wrapper`}
          style={{ position: 'relative', top: -1070 }}
        >
          <Project
            title="MyFridge"
            img={nerdStation}
            tech="js sass"
            link="https://codepen.io/yagoestevez/full/pOBLeK/"
            repo="https://github.com/yagoestevez/tomate-timer-landing-page"
          >
            <small style={{ fontStyle: 'italic' }}>
              Built using vanilla Javascript and Scss.
            </small>
            <p className="text-white">
              Food management app that scans receipts to offer healthy grocery
              shopping tips and sends expiration reminders.
            </p>
          </Project>
          <Project
            title="Nerd Station"
            img={nerdStation}
            tech="js react css"
            link="https://codepen.io/yagoestevez/full/QxOLKX/"
            repo="https://github.com/yagoestevez/documentify"
          >
            <small style={{ fontStyle: 'italic' }}>
              Built using React and CSS.
            </small>
            <p className="text-white">
              Nerd Station 🤓 is a web app that we thoughtfully designed to help
              university students overcome common hurdles that hinder their
              academic progress. It has a diverse range of features where each
              demonstrates a strategy to help students overcome the lack of
              motivation assosciated with uni work.
            </p>
          </Project>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
