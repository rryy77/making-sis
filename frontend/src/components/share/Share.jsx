import React from "react";
import "./Share.css";
import { Analytics, Face, Gif, Image } from "@mui/icons-material";

export default function Share() {
  return (
    <div>
      <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <img
              src="/assets/person/1.jpeg"
              alt=""
              className="shareProfileImg"
            />
            <input
              type="text"
              className="shareInput"
              placeholder="What's happening?"
            />
          </div>
          <hr className="shareHr" />

          <div className="shareButtons">
            <div className="shareOptions">
              <div className="shareOption">
                <Image className="shareIcon" />
                <span className="shareOptionText">photo</span>
              </div>
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
            <button className="shareButton">POST</button>
          </div>
        </div>
      </div>
    </div>
  );
}
