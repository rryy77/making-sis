import React from "react";
import Topbar from "../../components/topbar/Topbar";
import TimeLine from "../../components/timeline/TimeLine";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Profile.css";
import Rightbar from "../../components/rightbar/Rightbar";

export default function profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={PUBLIC_FOLDER + "/post/3.jpeg"}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={PUBLIC_FOLDER + "/person/1.jpeg"}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Ry Code</h4>
              <span className="profileInfoDesc">Udemnyfffff</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <TimeLine username="ry-code" />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
