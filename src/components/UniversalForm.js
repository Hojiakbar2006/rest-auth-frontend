import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const UniversalForm = ({
  fields,
  onSubmit,
  isLoading,
  formText,
  link,
  message,
}) => {
  const [file, setFile] = useState(null);

  console.log();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    onSubmit(formData);
    // e.target.reset();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-group">
        <h1>{formText}</h1>
        {message && <p>{message}</p>}
        {fields.map((field, i) => {
          let { name, accept, type } = field;
          return (
            <label key={i}>
              {field.label}
              {field.type === "file" ? (
                <>
                  <input
                    autoComplete="off"
                    type="file"
                    id={name}
                    name={name}
                    accept={accept || ""}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  <div className="image-upload">
                    <span className="__btn">Choose Image</span>
                    <span className="file-name">
                      {file
                        ? file.name.length < 25
                          ? file.name
                          : `${file.name.split("").slice(0, 25).join("")}...`
                        : "No file"}
                    </span>
                  </div>
                </>
              ) : (
                <input
                  autoComplete="off"
                  type={type || "text"}
                  id={name}
                  name={name}
                  required
                />
              )}
            </label>
          );
        })}
        <label>
          <button className="__btn" type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : formText}
          </button>
        </label>
        <br />
        {link && link.message2 && <Link to={link.url}>{link.message}</Link>}
        {link && link.message2 && <Link to={link.url2}>{link.message2}</Link>}
      </form>
    </div>
  );
};

export default UniversalForm;
