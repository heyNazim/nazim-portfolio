import React from "react";
import projec0 from "../img/neelkanth.png";
import projec1 from "../img/skilloceans.png";
import projec2 from "../img/project2.png";
// import projec3 from "../img/project3.png";
import projec5 from "../img/Srinagar.png";
import projec6 from "../img/BMC.png";
// import projec4 from "../img/project4.png";
import projec7 from "../img/project6.png";
// import pro5 from "../img/project5.png";
import flamingoimage from "../img/flamingo.png";
import abstractimage from "../img/abstract.png";
import herbalshadesimage from "../img/herbalshades.png";
// import herbalshadesimage2 from "../img/herbal2.png";

function Work() {
  const project = [
    {
      url: "https://dialexportmart.com/",
      github: "#",
      img: projec7  ,
    },
    // {
    //   url: "https://buildherbalshades.netlify.app/",
    //   github: "https://github.com/heyNazim/Herbalshades-ReduxToolkit",
    //   img: herbalshadesimage2,
    // },
    {
      url: "https://herbalshades.com",
      github: "#",
      img: herbalshadesimage,
    },
    {
      url: "https://flamingobookcompany.com",
      github: "#",
      img: flamingoimage,
    },
    {
      url: "https://abstractbookspublishing.com",
      github: "#",
      img: abstractimage,
    },
    {
      url: "https://www.neelkanthhospital.com",
      github: "#",
      img: projec0,
    },
    {
      url: "https://www.neelkanthivfsrinagar.com",
      github: "#",
      img: projec5,
    },
    {
      url: "https://brandmechanic.in",
      github: "#",
      img: projec6,
    },
    {
      url: "https://skilloceans.com",
      github: "https://github.com/heyNazim/skilloceans",
      img: projec1,
    },
    {
      url: "https://www.theecsindia.com",
      github: "https://github.com/heyNazim/ECS-ENVIRONMENTAL",
      img: projec2,
    },
    // {
    //   url: "https://heysptechnoweld.netlify.app",
    //   github: "https://github.com/heyNazim/SP_TECHNO_WELD",
    //   img: projec3,
    // },
 
    // {
    //   url: "https://n-food.netlify.app",
    //   github: "https://github.com/heyNazim/MY-Food",
    //   img: projec4,
    // },
    // {
    //   url: "https://nazim-e-commerce-app.netlify.app",
    //   github: "https://github.com/heyNazim?tab=repositories",
    //   img: pro5,
    // },
  ];

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Work</h2>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {project.map((item) => (
            <Card
              key={item.url}
              img={item.img}
              url={item.url}
              github={item.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const Card = ({ img, url, github }) => {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
      <div className="portfolio-wrap">
        <img src={img} className="img-fluid" alt="" height="100%" />
        <div className="portfolio-info">
          <div
            className="portfolio-links  d-flex justify-content-between my-3"
            style={{ width: "28%" }}
          >
            <a href={url} className="linkedin" target="_blank" rel="noreferrer">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_gp7ouyyz.json"
                background="transparent"
                style={{ width: "30px", height: "30px" }}
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </a>
            <a
              href={github}
              className="linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_6HFXXE.json"
                background="transparent"
                style={{ width: "30px", height: "30px" }}
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
