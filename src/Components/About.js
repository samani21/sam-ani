import styled from "styled-components";

export const AboutContainer = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    background: #1e1e1e;
    color: #ffffff;
    padding: 20px;
    max-width: 500px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    h1{
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 10px;
        color: #00bcd4;
    }
    p{
        font-size: 14px;
        line-height: 1.6;
        margin-bottom: 10px;
    }
    b{
        color: #ffcc00;
    }
`;