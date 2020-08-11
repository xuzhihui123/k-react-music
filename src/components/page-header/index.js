import React, { memo } from "react";
import { Wrapper, HeaderLeft, HeaderRight } from "./styled";
import {SearchOutlined} from '@ant-design/icons'

import { NavLink } from "react-router-dom";
import { headerLinks } from "@/services/local-data";

export default memo(function PageHeader() {
  const getLink = (item) => {
    if (item.link.startsWith("http")) {
      return (
        <a
          href={item.link}
          className="link-a"
          target="_blank"
          rel="noopener noreferrer"
          key={item.title}
        >
          {item.title}
        </a>
      );
    } else {
      return (
        <NavLink
          to={item.link}
          className="link-a"
          activeClassName="a-active"
          key={item.title}
        >
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    }
  };
  return (
    <Wrapper>
      <div className="wrap-v1 content">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">
            网易云音乐
          </a>
          {headerLinks.map((item, index) => {
            return getLink(item);
          })}
        </HeaderLeft>
        <HeaderRight>
          <span className="search">
            <SearchOutlined className="icon"/>
            <input
              type="text"
              name=""
              id=""
              className="search"
              placeholder="音乐/视频/电台/用户"
            />
          </span>
          <div className="edit">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
    </Wrapper>
  );
});
