import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. Computer Engineering</h4>
                <h5>Thadomal Shahani Engineering College</h5>
              </div>
              <h3>2024 - 2028</h3>
            </div>
            <p>
              Currently studying in Semester 4. Secured 9.45 SGPA in Sem-3. Actively participating in academic and extracurricular activities. Completed Class 12th HSC (80.17%) and Class 10th CBSE (84.60%).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathons & Competitions</h4>
                <h5>Smart-India Hackathon & MockUpp 3.0</h5>
              </div>
              <h3>2025, 2026</h3>
            </div>
            <p>
              Secured Runner-Up Position at MockUpp 3.0 (2026) by GDG TSEC for redesigning the Disney website. Participated in SIH 2025 building an AI-based Smart Allocation Engine for the PM Internship Scheme.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Positions of Responsibility</h4>
                <h5>IETE-TSEC & NSS-TSEC</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Junior Marketing Executive at Institution of Electronics & Telecommunication Engineers (IETE–TSEC). Also serving as an NSS Volunteer participating in multiple Social Service Events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
