import React from 'react'

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Nazim Saifi</h4>
              <p><em>Full Stack Web Developer and Freelancer with 8+ months of experience</em></p>
              <ul>
                <li>Noida</li>
                <li><a href="tel:+917880811002" style={{ textDecoration: "none", color: "inherit" }}>+91 9643685727</a></li>
                <li><a href="mailto:heyshivanshu01@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>nazim.saifi@gmail.com</a></li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
        
            <div className="resume-item">
              <h4>Bachelors's in Computer Application(BCA)</h4>
              <h5>2019 - 2022</h5>
              <p><em>Chaudhary Charan Singh University</em></p>
              <p>I completed my BCA from IPEM college in 2022, Here I learned  About Web Development, How frontend and backend work Api intregration And many thing that help me in present</p>
            </div>
            <div className="resume-item">
              <h4> Masters in Computer Application(MCA)</h4>
              <h5>2023 - 2025</h5>
              <p><em>HI-TECH INSTITUTE OF ENGINEERING AND TECHNOLOGY, GHAZIABAD</em></p>
              <p>Pursuing...</p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            {/* <div className="resume-item">
              <h4>FullStack Developer(MERN)</h4>
              <h5>Mer 2023 - Present</h5>
              <p><em>Akonto Payment Solution pvt ltd. </em></p>
              <ul>
                <li>My role is FullStack Developer and My responsibilities are to maintain and Develop Frontend and backend both... The complete UI is based on React and Backend on Nodejs, ExpressJs and MySql.</li>
                
              </ul>
            </div> */}
            <div className="resume-item">
              <h4>FullStack Developer(MERN)</h4>
              <h5>DEC 2022 - MAY 2023</h5>
              <p><em>IT Breakcom Pvt.Ltd</em></p>
              <ul>
                <li>

                 
                  I am a passionate MERN stack developer with a strong foundation in MongoDB, Express.js, React, and Node.js. I thrive on turning innovative ideas into functional and user-friendly web applications. In ITbreak my role was Collaborate with project stakeholders, such as product managers and designers, to understand project requirements.
                  Design the overall architecture of the application, including database schema, backend APIs, and frontend components.
                  Choose the appropriate technologies and tools for the project.
                  Develop server-side logic and APIs using Node.js and Express.js.
                  Set up and configure the server environment.
                  Integrate with databases (usually MongoDB) for data storage.
                  Implement authentication and authorization mechanisms.
                  here i learn lot of things they help me in future.
                </li>

              </ul>
            </div>
            <div className="resume-item">
              <h4>Frontend Developer</h4>
              <h5>Jan 2022 -  Jun 2022</h5>
              <p><em>Delberto PVT.LTD</em></p>
              <ul>
                <li>My Role was Frontend  Developer and my responsibility are to develop Website  Using HTML, CSS, JavaScript, Jquery and Bootstrap. andalso make responsive layout and here I done some work on figma</li>

              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Resume