import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  z-index: 1000;
  height: 75px;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 5px solid #c20c0c;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  .logo {
    text-indent: -999999em;
    width: 176px;
    height: 70px;
    background-position: 0 0;
  }
  .link-a {
    line-height: 70px;
    height: 70px;
    position: relative;
    padding: 0 20px;
    font-size: 14px;
    color: #ccc;
    text-decoration: none;
    &:hover,
    &:active {
      color: #fff;
    }
  }
  a.link-a:last-child::after {
    position: absolute;
    content: "";
    width: 28px;
    height: 19px;
    background-image: url(${require("@/assets/img/sprite_01.png")});
    background-position: -190px 0;
    top: 20px;
    right: -15px;
  }
  .a-active {
    color: #fff;
  }
  .a-active > .icon {
    position: absolute;
    display: inline-block;
    width: 12px;
    height: 7px;
    bottom: -1px;
    left: 50%;
    transform: translate(-50%, 0);
    background-position: -226px 0;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  .search {
    position: relative;
    box-sizing: border-box;
    width: 158px;
    height: 32px;
    border-radius: 16px;
    outline: none;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    .icon{
      font-size:14px;
      color:#444;
      position: absolute;
      z-index:2;
      top:50%;
      left:10px;
      transform:translateY(-50%)
    }
    > .search {
      padding: 4px 11px;
      padding-left:30px;
      width: 100%;
      height: 100%;
      outline: none;
      border-radius: 16px;
      position: absolute;
      top: 0;
      left: 0;
      border: 1px solid #d9d9d9;
      &::-webkit-input-placeholder {
        color: #ccc;
        font-size:12px;
      }
      &::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #ccc;
        font-size:12px;
      }
      &:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #ccc;
        font-size:12px;
      }
      &:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: #ccc;
        font-size:12px;
      }
    }
  }
  .edit {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    color: #ccc;
    cursor: pointer;
  }
  .login {
    color: #ccc;
    cursor: pointer;
  }
`;
