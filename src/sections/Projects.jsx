import React from "react";
import WatchLogo from "../assets/Watch.png";
import HospitalLogo from "../assets/Hospital.png";

const Projects = () => {
  const projects = [
    {
      title: "Luna Times",
      description:
        "Luna Times is a sleek and modern watch shop website built using the MERN stack. It offers a seamless shopping experience with an intuitive UI, dynamic product listings, and secure payment options. The site is fully responsive, ensuring customers can browse and purchase their favorite watches from any device.",
      link: "https://github.com/SwethaG-2002/Project-Mern-Watch.git",
      image: WatchLogo,
    },
    {
      title: "Hospital Management System",
      description:
        "A hospital management system that streamlines administrative processes, patient management, and appointment scheduling. Built with modern web technologies, it ensures efficient handling of hospital operations and enhances patient care.",
      link: "https://github.com/SwethaG-2002/Project-Hospital-Management.git",
      image: HospitalLogo,
    },
  ];

  return (
    <div className="container my-5 projects" id="projects">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <div key={index} className="col-md-8 mb-4">
            <div
              className="card h-100 shadow flex-md-row mx-auto p-3"
              style={{ height: "180px" }}
            >
              <img
                src={project.image}
                className="card-img-left img-fluid"
                alt={project.title}
                style={{ width: "25%", objectFit: "cover" }}
              />
              <div
                className="card-body d-flex flex-column justify-content-center"
                style={{ padding: "10px" }}
              >
                <h5 className="card-title" style={{ fontSize: "1.1rem" }}>
                  {project.title}
                </h5>
                <p className="card-text lead" style={{ fontSize: "0.85rem" }}>
                  {project.description}
                </p>
                <div style={{ textAlign: "center" }}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
