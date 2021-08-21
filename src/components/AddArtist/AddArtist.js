import React, { useState } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const AddArtist = () => {
const [info, setInfo] = useState({});
  console.log(info);
  const [file, setFile] = useState();
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileUpload = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    console.log(info);
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("email", info.email);
    formData.append("position", info.position);
    formData.append("facebook", info.facebook);
    formData.append("linkedin", info.linkedin);
    formData.append("instagram", info.instagram);
    formData.append("phone", info.phone);

    fetch(`http://localhost:8000/addArtist`, {
      method: "POST",
      mode: "no-cors",
      headers : { 
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "http://localhost:8080/addArtist",
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section style={{Right: "0px"}} className="container-fluid row">
      <div style={{ marginLeft: "-23px" }} className="col-md-2 me-5 col-2">
        <Sidebar></Sidebar>
      </div>
      <div
        className="col-md-4 p-4 col-9"
        style={{
          marginTop: "10px",
          marginLeft: "145px",
          backgroundColor: "#F4FDFB",
        }}
      >
        <div className="justify-content-center">
          <h5 className="text-brand">Add an Artist & Photographer</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="text-primary">Name*</label>
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="name"
                required
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label className="text-primary">Position*</label>
              <input
                onBlur={handleBlur}
                type="text"
                required
                className="form-control"
                name="position"
                placeholder="Position Title"
              />
            </div>
            <div className="form-group">
              <label className="text-primary">Email address*</label>
              <input
                onBlur={handleBlur}
                type="email"
                className="form-control"
                name="email"
                required
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label>Facebook</label>
              <input
                onBlur={handleBlur}
                type="url"
                className="form-control"
                name="facebook"
                placeholder="https://www.facebook.com/SAShahedBD71/"
                pattern="https://.*"
              />
            </div>
            <div className="form-group">
              <label>Linkedin</label>
              <input
                onBlur={handleBlur}
                type="url"
                className="form-control"
                name="linkedin"
                placeholder="https://www.linkedin.com/in/mohammad-shahed/"
                pattern="https://.*"
              />
            </div>
            <div className="form-group">
              <label>Instagram</label>
              <input
                onBlur={handleBlur}
                type="url"
                className="form-control"
                name="instagram"
                pattern="https://.*"
                placeholder="https://www.instagram.com/cristiano/"
              />
            </div>
            <div className="form-group">
              <label className="text-primary">Phone*</label>
              <input
                onBlur={handleBlur}
                type="number"
                className="form-control"
                name="phone"
                pattern="[+]{1}[0-9]{11,14}"
                required
                placeholder="01811112233"
              />
            </div>
            <div className="form-group">
              <label className="text-primary">Upload a image*</label>
              <input
                onChange={handleFileUpload}
                type="file"
                required
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-lg mt-2 btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddArtist;
