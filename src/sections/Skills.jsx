import React from "react";

const Skills = () => {
  const styles = {
    section: {
      padding: "50px 0",
    },

    skillTitle: {
      fontWeight: 600,
      marginTop: "10px",
    },
  };

  return (
    <section id="skills" className="skills" style={styles.section}>
      <div className="container text-center">
        <h2 className="mb-5">Tech skills</h2>
        <div className="row">
          <div className="col-md-3 col-6 mb-4">
            <i
              className="fab fa-react"
              style={{ fontSize: "2rem", color: "#61dbfb" }}
            ></i>
            <p style={styles.skillTitle}>React.js</p>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <i
              className="fab fa-node-js"
              style={{ fontSize: "2rem", color: "#3c873a" }}
            ></i>
            <p style={styles.skillTitle}>Node.js</p>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <i
              className="fab fa-php"
              style={{ fontSize: "2rem", color: "#8993be" }}
            ></i>
            <p style={styles.skillTitle}>PHP</p>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <i
              className="fas fa-database"
              style={{ fontSize: "2rem", color: "#454545" }}
            ></i>
            <p style={styles.skillTitle}>MongoDB/MySQL</p>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <i
              className="fab fa-js-square"
              style={{
                fontSize: "2rem",
                color: "#f0db4f",
              }}
            ></i>
            <p style={styles.skillTitle}>JavaScript</p>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <i
              className="fab fa-html5"
              style={{
                fontSize: "2rem",
                color: "#e34c26",
              }}
            ></i>
            <p style={styles.skillTitle}>HTML</p>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <i
              className="fab fa-css3-alt"
              style={{
                fontSize: "2rem",
                color: "#264de4",
              }}
            ></i>
            <p style={styles.skillTitle}>CSS</p>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <i
              className="fab fa-bootstrap"
              style={{ fontSize: "2rem", color: "#563d7c" }}
            ></i>
            <p style={styles.skillTitle}>Bootstrap</p>
          </div>
        </div>
        <h2 className="mt-5 mb-4">Tools</h2>
        <div className="row">
          <div className="col-md-4 col-6 mb-4">
            <i
              className="fab fa-git-alt"
              style={{ fontSize: "2rem", color: "#f34f29" }}
            ></i>
            <p style={styles.skillTitle}>Git/GitHub</p>
          </div>
          <div className="col-md-4 col-6 mb-4">
            <i
              className="fab fa-p"
              style={{ fontSize: "2rem", color: "#040c3c" }}
            ></i>
            <p style={styles.skillTitle}>Photoshop/Illustrator</p>
          </div>
          <div className="col-md-4 col-6 mb-4">
            <i
              className="fab fa-c"
              style={{ color: "#43C6AC", fontSize: "2rem" }}
            ></i>
            <p style={styles.skillTitle}>Canva</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
