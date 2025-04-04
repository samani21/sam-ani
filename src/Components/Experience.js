import styled from "styled-components";

export const ExperienceContainer = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
`;

export const Container = styled.div`
    max-width: 500px;
    background: #1e1e1e;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
    h2 {
            text-align: center;
            color: #ffffff;
    }
`;

export const TimeLine = styled.div`
    position: relative;
    padding-left: 20px;
`;

export const Item = styled.div`
    margin: 20px 0;
    padding-left: 20px;
    border-left: 3px solid #00aaff;
`;

export const Date = styled.div`
    font-weight: bold;
    color: #00aaff;
`;
export const Content = styled.div`
   h3{
    margin: 5px 0;
    color: #ffffff;
   }
   p{
    margin: 0;
    color: #cccccc;
   }
`;