import React from "react";
import "./Rightbar.css";
import Online from "../online/Online";
import { Users } from "../../dummyData";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="eventContainer">
          <img src="assets/star.png" alt="" className="starImg" />
          <span className="eventText">
            <b>Followers</b> only Event
          </span>
        </div>
        <img src="assets/event.jpeg" alt="" className="eventImg" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </ul>
        <p className="promotionTitle">Promo Ad</p>
        <img
          src="assets/promotion/promotion1.jpeg"
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">Shopping</p>
        <img
          src="assets/promotion/promotion2.jpeg"
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">Carshop</p>
        <img
          src="assets/promotion/promotion3.jpeg"
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">c-code company</p>
      </div>
    </div>
  );
}
