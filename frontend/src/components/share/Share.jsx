import React, { useContext, useRef, useState } from "react";
import "./Share.css";
import { Analytics, Face, Gif, Image } from "@mui/icons-material";
import { AuthContext } from "../../state/AuthContext";
import axios from "axios";

export default function Share() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);

  const [file, setFile] = useState(null);
  console.log(file);
  const desc = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        //画像APIを叩く
        await axios.post("http://localhost:5001/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post("http://localhost:5001/api/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <img
              src={
                user.profilePicture
                  ? PUBLIC_FOLDER + user.profilePicture
                  : PUBLIC_FOLDER + "/person/noAvatar.png"
              }
              alt=""
              className="shareProfileImg"
            />
            <input
              type="text"
              className="shareInput"
              placeholder="What's happening?"
              ref={desc}
            />
          </div>
          <hr className="shareHr" />

          <form className="shareButtons" onSubmit={(e) => handleSubmit(e)}>
            <div className="shareOptions">
              <label className="shareOption" htmlFor="file">
                <Image className="shareIcon" />
                <span className="shareOptionText">photo</span>
                <input
                  type="file"
                  id="file"
                  accept=".png, .jpeg, .jpg"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
              <div className="shareOption">
                <Gif className="shareIcon" />
                <span className="shareOptionText">GIF</span>
              </div>
              <div className="shareOption">
                <Face className="shareIcon" />
                <span className="shareOptionText">mood</span>
              </div>
              <div className="shareOption">
                <Analytics className="shareIcon" />
                <span className="shareOptionText">Ask a question...</span>
              </div>
            </div>
            <button className="shareButton" type="submit">
              POST
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
