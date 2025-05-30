import React from "react";
import Nazim from '../img/Nazim.png'
import ProgressBar from "@ramonak/react-progress-bar";
import { useSpring, animated } from "react-spring";
import resume from '../img/Nazim_Cv.pdf'
function About() {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 300, friction: 60 },
  }));

  const skills = [
    { name: "HTML", val: "90" },
    { name: "CSS", val: "80" },
    { name: "Bootstrap", val: "92" },
    { name: "Material UI", val: "85" },
    { name: "Tailwind", val: "90" },
    { name: "JavaScript", val: "80" },
    { name: "React", val: "80" },
    { name: "NodeJs", val: "70" },
    { name: "ExpressJS", val: "70" },
    { name: "MongoDB", val: "80" },
    { name: "MySql", val: "70" },
    // {name:"React Native",val:"70"},
  ]

  return (

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="row">
          <animated.div
            className="col-lg-4"
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.to(trans) }}
          >
            <img src={Nazim} className="img-fluid borderNew" alt="not found" />
          </animated.div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Full Stack Developer </h3>
            
            <p className="fst-italic">
              My name is Nazim Saifi. I am a Full Stack Web Developer , as well as an Open Source enthusiast and a Computer Science student from India. I am passionate about working on new and exciting technologies emerging today. With significant experience as a MERN Stack Developer in startups and as a UI/UX Designer, I have been a core member of development teams and have made substantial contributions to open source projects.
            </p>

            <p className="fst-italic">
              My skills include React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, JavaScript, Material UI, Bootstrap, Tailwind.css, HTML, and CSS.
            </p>

            <div className="row">
              <div className="col-lg-6">
                <h5 style={{ color: "#728394" }}>Contact Contact Details</h5>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Email:</strong>
                    <a
                      href="mailto:nazim.saifi1908@gmail.com"
                      style={{ textDecoration: "none" }}
                    >
                      nazim.saifi1908@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://heynazim.netlify.app"
                      style={{ textDecoration: "none" }}
                    >
                      https://heynazim.netlify.app
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Phone:</strong>{" "}
                    <a
                      href="tel:+917880811002"
                      style={{ textDecoration: "none" }}
                    >
                      +91 9643685727
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>City:</strong> <span>Noida</span>
                  </li>
                </ul>

              </div>
              <div className="col-lg-6 d-flex  align-items-center">
                <a href={resume} className="button-58" download>
                  <span className="text">
                    <i className="fa-solid fa-download"></i> Download Resume
                  </span>
                </a>
              </div>

            </div>
          </div>


        </div>
        <div id="skills" className="skills section-bg my-5">
          <div className="container">
            <div className="section-title">
              <h2>Skills</h2>
              <p>I love working on new and exciting technologies emerging nowadays.I have good work experience as a MERN Stack Developer in startup(s) and UI/UX Designer where I was core member of the development team and done quite some contribution to open source as well</p>
            </div>
            <div className="row skills-content">
              {skills.map((item) => {
                return <div className="col-lg-6" key={item.name}>
                  <div className="progress" >
                    <span className="skill">{item.name} <i className="val">{item.val}%</i></span>
                    <div className="progress-bar-wrap" style={{ borderRadius: "5px" }}>
                      <ProgressBar completed={item.val} height="10px" isLabelVisible={false} transitionDuration="3s" animateOnRender={true} />
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>


    </section>

  );
}

export default About;
