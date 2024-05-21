import Project from './Project';

const ProjectPage = (props) => {
  return (
    <section id="projects" className="text-xl h-[0rem] bg-red-500">
      <div className="projects-container">
        {/* flex flex-col justify-center items-center pt-5 */}
        <div
          className="heading flex flex-col justify-center items-center pt-5 text-white"
          style={{ position: 'relative', top: -1080 }}
        >
          <h3 className="title text-center text-4xl">My Works</h3>
          <p className="separator bg-[#f300b4] w-[150px] h-[2px] m-[1rem auto]" />
          <p className="subtitle text-center w-4/12 my-px-0 mx-px-auto pt-3">
            Here are some of my projects that I have worked as a team during my
            studies at the university. Most of them are front-end based, so I am
            thinking of working on more backend projects in the future.
            {/* Here's a list of <u>most</u> of the projects I've been working on
            lately. All of these were built during my coding camp adventure on{' '} */}
          </p>
        </div>
        <div
          className="projects-wrapper"
          style={{ position: 'relative', top: -1070 }}
        >
          <Project
            title="Landing Page Example."
            img={
              'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/LandingPage.jpg'
            }
            tech="js sass"
            link="https://codepen.io/yagoestevez/full/pOBLeK/"
            repo="https://github.com/yagoestevez/tomate-timer-landing-page"
          >
            <small style={{ fontStyle: 'italic' }}>
              Built using vanilla Javascript and Scss.
            </small>
            <p>
              A landing page for the Pomodoro Timer I made (shown previously in
              this section).
            </p>
          </Project>
          <Project
            title="Technical Documentation Page."
            img={
              'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Documentify.jpg'
            }
            tech="js react css"
            link="https://codepen.io/yagoestevez/full/QxOLKX/"
            repo="https://github.com/yagoestevez/documentify"
          >
            <small style={{ fontStyle: 'italic' }}>
              Built using React and CSS.
            </small>
            <p>
              A technical documentation page made for a little React library I
              published on NPM.
            </p>
          </Project>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
