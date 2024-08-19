import React from "react";
import Profile from "../assets/Profile.jpg";
import { ReactTyped } from "react-typed";

const Home = () => {
  const styles = {
    homeSection: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
    },
    profileImg: {
      maxWidth: "70%",
      height: "auto",
      borderRadius: "50%",
    },
    paragraph: {
      fontFamily: "'Open Sans', sans-serif",
      color: "#454545",
    },
  };

  return (
    <section id="home" className="home" style={styles.homeSection}>
      <div className="container text-center py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <img
              className="shadow-lg"
              src={Profile}
              alt="Your Friend's Name"
              style={styles.profileImg}
            />
          </div>
          <div className="col-md-6 mb-4">
            <h1 className="display-4 mb-3">
              <ReactTyped
                strings={["Hey!!", "I am Swetha", "MERN stack developer"]}
                typeSpeed={70}
                backSpeed={50}
                backDelay={1500}
                loop
              />
            </h1>
            <p style={styles.paragraph} className="lead">
              "I am a recent graduate, highly motivated and hardworking, with a
              strong passion for contributing to team-oriented environments
              where creativity is valued. I have a solid foundation in software
              development and hands-on experience with JavaScript, React.js,
              Node.js, HTML, and CSS."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
