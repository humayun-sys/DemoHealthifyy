import React from "react";

import { Avatar } from "antd";
// import { MdAddCircle } from "react-icons/md";

import {
  BulbOutlined,
  HeartOutlined,
  CommentOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

import "./Card.scss";

function Card() {
  return (
    <div className="col-md-4 col-sm-6 blog__card">
      <div className="blog__card__header">
        <div className="user__btn">
          <Avatar
            className="avatar"
            style={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
            }}
            icon={<BulbOutlined />}
          />
          <h4 style={{ marginLeft: "20px" }}>Hacks</h4>
        </div>
        <p>Yesterday</p>
      </div>
      <div className="blog__card__content">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <img
          className="img-fluid"
          src="assets/img/blog/blog-06.jpg"
          alt="Post"
        />
      </div>
      <div className="blog__card__footer">
        <p>19 likes 31 comments</p>
        <div className="blog__actions">
          <HeartOutlined />
          <CommentOutlined />
          <ShareAltOutlined />
        </div>
        {/* <div className="icon__wrapper">
        <MdAddCircle className="add__icon" />
      </div> */}
      </div>
    </div>
  );
}

export default Card;
