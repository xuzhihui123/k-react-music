import styled from 'styled-components'


export const Wrapper = styled.div`
   height:270px;
   background:url(${props=>props.bigImg}) no-repeat center center/6000px;
   >.content{
     height:100%;
     display:flex;
     position:relative;
   }
`;
export const LeftWrapper = styled.div`
   width:730px;
   height:270px;
   .img-item{
     img{
       width:100%;
       height:100%;
     }
   }
`;


export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 254px;
  height: 270px;
  background: url(${require("@/assets/img/download.png")});
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`