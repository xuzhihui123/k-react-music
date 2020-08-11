import styled from "styled-components";

export const Wrapper = styled.div`
  .tab-bar {
    height: 30px;
    background: #c20c0c;
    .tab-bar_inner {
      display: flex;
      padding-left: 180px;
      align-items: center;
      color: #fff;
      .link-a {
        color: #fff;
        padding: 3px 13px;
        margin: 0 17px;
        margin-top:1px;
        font-size:12px;
        &:hover {
          text-decoration: none;
          background-color: #9b0909;
          border-radius: 20px;
        }
      }
      .link-a.active {
        text-decoration: none;
        background-color: #9b0909;
        border-radius: 20px;
      }
    }
  }
`;
