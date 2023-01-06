import React from "react";
import "./all.css";
import TextField from "@mui/material/TextField";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

const upload = () => {
  return (
    <div className="upload">
      <div className="c1">
        <div className="r1 u1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Avatar"
            width="50px"
          />
          <div className="aq">
            <TextField
              id="outlined-small"
              label="Ask a Questions.."
              sx={{
                width: 400
            }}
              variant="outlined"
            />
          </div>
        </div>
        <div className="r1 u2">
          <button className="button1">
            <AddAPhotoIcon />
            Upload Photo
          </button>
          <button className="button2">
            Cancel
          </button>
          <button className="button3">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default upload;
