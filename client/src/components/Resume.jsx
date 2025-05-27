import React from 'react';

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Nazim Saifi</h4>
              <p><em>Full Stack Web Developer with 2+ years of experience in designing, developing, and maintaining dynamic web and mobile applications.</em></p>
              <ul>
                <li>Noida</li>
                <li><a href="tel:+919643685727" style={{ textDecoration: "none", color: "inherit" }}>+91 9643685727</a></li>
                <li><a href="mailto:nazim.saifi1908@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>nazim.saifi1908@gmail.com</a></li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor's in Computer Application (BCA)</h4>
              <h5>2019 - 2022</h5>
              <p><em>Chaudhary Charan Singh University</em></p>
              <p>Completed BCA from IPEM College in 2022. Gained strong foundational knowledge in web development, API integration, and the working of front-end and back-end systems.</p>
            </div>
            <div className="resume-item">
              <h4>Master's in Computer Application (MCA)</h4>
              <h5>2023 - 2025</h5>
              <p><em>Hi-Tech Institute of Engineering and Technology, Ghaziabad</em></p>
              <p>Currently pursuing.</p>
            </div>
          </div>

          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Full Stack Developer</h4>
              <h5>Jan 2023 – Dec 2024</h5>
              <p><em>Brand Mechanic Communications</em></p>
              <ul>
                <li>Designed and developed responsive, visually appealing websites.</li>
                <li>Handled complete web development lifecycle from concept to deployment.</li>
                <li>Ensured cross-browser compatibility and mobile responsiveness.</li>
                <li>Implemented SEO best practices and performance optimizations.</li>
                <li>Worked with a variety of modern web development tools and technologies.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Full Stack Developer</h4>
              <h5>Dec 2024 – Present</h5>
              <p><em>Innodem Pvt Ltd</em></p>
              <ul>
                <li>Led the development of <strong>Dial Export Mart</strong>, a full-featured marketplace platform using <strong>Next.js</strong>.</li>
                <li>Built a native mobile application for Dial Export Mart to expand user accessibility.</li>
                <li>Enabled users to buy and sell products with personal dashboards, customer support integration, and automated website generation.</li>
                <li>Integrated modern features like real-time notifications, product management, and analytics dashboards.</li>
                <li>Focused on delivering scalable and maintainable code across both web and mobile platforms.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
