import { useRef } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';

const Project = (props) => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node',
  };

  const link = props.link || 'http://';
  const repo = props.repo || 'http://';
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  return (
    <div
      ref={ref1}
      className="project"
      style={{
        margin: '1rem auto',
        width: '70%',
        padding: '2rem',
        display: 'grid',
        gridTemplateColumns: `1fr 1fr`,
        gridTemplateRows: `1fr`,
        gridGap: `1rem`,
      }}
    >
      <a
        className={`project-link size-48 ${
          isVisible1 &&
          'animate__animated animate__fadeInLeft animate__delay-1s'
        }`}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'relative',
          left: '10rem',
          top: '7rem',
          display: 'block',
          margin: 'auto 0',
          color: '#252934',
          overflow: 'hidden',
          textAlign: 'center',
          borderRadius: '50%',
          border: '1px solid #fafafa',
          boxShadow: '0 20px 10px -10px #25293450',
          transition: '300ms',
        }}
      >
        <img
          className="project-image size-[13rem] hover:scale-125"
          style={{
            filter: 'saturate(1)',
            transition: 'all 300ms',
          }}
          src={props.img}
          alt={'Screenshot of ' + props.title}
        />
      </a>
      <div
        className={`project-details ${
          isVisible1 && 'animate__animated animate__fadeInUp animate__delay-2s'
        }`}
        style={{
          margin: 'auto',
          position: 'relative',
          left: -100,
          top: '5rem',
        }}
      >
        <div
          className="project-tile font-dosis"
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: 0,
            color: '#f9f9f9',
          }}
        >
          <p
            className="icons"
            style={{
              margin: '0',
              color: '#252934',
            }}
          >
            {props.tech.split(' ').map((t) => (
              <i
                style={{
                  marginRight: '0.4rem',
                  fontWeight: 'normal',
                  fontSize: '1.4rem',
                }}
                className={tech[t]}
                key={t}
              />
            ))}
          </p>
          {props.title}{' '}
        </div>
        {props.children}
        <div className="buttons relative top-3 flex flex-row justify-between">
          <a
            className="
          hover:bg-[#02edf6] hover:text-[#333] transition duration-300 ease-in delay-[150ms] hover:shadow-custom w-full
          "
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '49%',
              padding: '0.5rem',
              border: 'none',
              borderBottom: '1px solid #f300b4',
              color: '#f9f9f9',
              fontSize: '1.2rem',
              textAlign: 'center',
            }}
          >
            <button className="hover:text-[#333] transition duration-300 ease-in delay-[150ms] hover:shadow-custom w-full">
              View Source
            </button>
            {/* View source <i className="fas fa-external-link-alt" /> */}
          </a>
          <a
            className="
          hover:bg-[#02edf6] hover:text-[#333] transition duration-300 ease-in delay-[150ms] hover:shadow-custom w-full
          "
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '49%',
              padding: '0.5rem',
              border: 'none',
              borderBottom: '1px solid #f300b4',
              color: '#f9f9f9',
              fontSize: '1.2rem',
              textAlign: 'center',
            }}
          >
            <button className="hover:text-[#333] transition duration-300 ease-in delay-[150ms] hover:shadow-custom w-full">
              Try it live
            </button>
            {/* Try it Live <i className="fas fa-external-link-alt" /> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
