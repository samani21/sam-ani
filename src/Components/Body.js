import styled from "styled-components";

export const BodyController = styled.div`
    height: 100vh;
    background: linear-gradient(to bottom, #142131, #000113);
`;

export const BackgroundTop = styled.div`
    background-image: url('/bg/Ellipse 1086.png');
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    z-index: 1;
`;

export const ContentContainer = styled.div`
    position: absolute;
    z-index: 2;
    top: 0;
    width: 100%;
`;

export const Content = styled.div`
    width: 100%;
`;


export const Menus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 20px;
`;

export const Menu = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  cursor: pointer;
  &.active {
    border-bottom: 2px solid #FFB829;
  }
`;
