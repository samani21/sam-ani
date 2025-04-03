import styled from "styled-components";

export const ProfilContainer = styled.div` 
    /* height: 100vh; */
    padding: 30px;
    padding-bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
`;


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    /* background: linear-gradient(to bottom, #2c3e50, #0f172a); */
    background-image: url('/bg/Subtract.png');
    border-radius: 20px;
    margin-top: 100px;
    background-size: 300px;
    background-repeat: no-repeat;
  &::before {
    content: "";
    position: absolute;
    width: 55%;
    height: 56%;
    background-image: url('/image/user.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    top: -86px;
    left: 50%;
    transform: translateX(-50%);
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  
`;


export const DetailContainer = styled.div`
  padding: 10px;
  position: relative;
  top: 90px;
`
export const Name = styled.p`
  font-family: "Inter", sans-serif;
  text-align: center;
  font-weight: 400;
  font-size: 26px;
`;
export const Add = styled.p`
  font-family: "Montserrat", sans-serif;
  text-align: center;
  font-weight: 300;
  font-size: 12px;
  cursor: pointer;  
`;

export const Detail = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  padding-left: 30px;
  padding-top: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
`;

export const Icon = styled.img`
  width: 20px;
`;

export const FooterDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 90px;
`;
