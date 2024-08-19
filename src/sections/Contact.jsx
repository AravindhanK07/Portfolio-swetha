import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "579d8c29-2a2d-4dca-9231-d88275c6894b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      className="vh-100 d-flex justify-content-center align-items-center"
      id="contact"
    >
      <div className="container my-5 contact">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="text-center mb-4">Contact me</h2>
            <form
              onSubmit={onSubmit}
              className=" bg-transparent p-4 rounded shadow-sm"
            >
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows="4"
                  className="form-control"
                ></textarea>
              </div>
              <div style={{ textAlign: "center" }}>
                <button
                  type="submit"
                  className="btn btn-transparent w-70"
                  style={{ color: "black", border: "1px solid black" }}
                >
                  Submit Form
                </button>
              </div>
            </form>
            <div className="text-center mt-3">
              <span className="text-success">{result}</span>
            </div>
            <div className="text-center mt-4">
              <h5>Connect with me:</h5>
              <div className="d-flex justify-content-center mt-3">
                <a
                  href="https://www.linkedin.com/in/swetha-ganesan-642763306
"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <i
                    className="fab fa-linkedin fa-2x"
                    style={{ color: "black" }}
                  ></i>
                </a>
                <a
                  href="https://github.com/SwethaG-2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <i
                    className="fab fa-github fa-2x"
                    style={{ color: "black" }}
                  ></i>
                </a>
                <a
                  href="https://www.instagram.com/_pra_bha_4?igsh=a2loOHh5OWh4cDFy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <i
                    className="fab fa-instagram fa-2x"
                    style={{ color: "black" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
