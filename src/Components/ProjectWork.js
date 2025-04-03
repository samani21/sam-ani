import styled from "styled-components";

export const ProjectWorkContainer = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
`;

export const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    max-width: 500px;
    h2{
        font-size: 36px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 30px;
        color: #ffffff;
    }
`;

export const List = styled.div`
`;

export const Card = styled.div`
    background-color: #1e1e1e;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    margin-bottom: 20px;
    &:hover{
        transform: translateY(-10px);
    }
`;

export const Image = styled.div`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

export const Info = styled.div`
    padding: 20px;
    h3{
        font-size: 20px;
        font-weight: 600;
        color: #ff9800;
        margin-bottom: 10px;
    }
    p{
        font-size: 14px;
        color: #bbb;
        line-height: 1.5;
    }
`;