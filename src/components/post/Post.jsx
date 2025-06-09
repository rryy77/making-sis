import React from "react";
import MoreVert from "@mui/icons-material/MoreVert";
import "./Post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="./assets/person/1.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">R-code</span>
            <span className="postDate">5分前</span>
          </div>
          <div className="postTopRight"></div>
          <MoreVert className="postOptionsIcon" />
        </div>
        <div className="postCenter">
          <span className="postText">making sns</span>
          <img src="./assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="./assets/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">Liked by 5 people</span>
          </div>
          <div className="postBottom Right">
            <span className="postCommentText">4:comment </span>
          </div>
        </div>
      </div>
    </div>
  );
}
