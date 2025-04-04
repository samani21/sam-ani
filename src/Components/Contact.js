import styled from "styled-components";

export const ContactContainer = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    width: 500px;
    height: 400px;
    overflow: auto;
    &::-webkit-scrollbar{
        display: none;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    @media (max-width: 520px) {
        display: grid;
        justify-content: normal;
    }
`;


export const Email = styled.div`
    background: #143061;
    padding: 15px;
    width: 65%;
    border-radius: 20px;
    @media (max-width: 520px) {
        width: 100%;
    }
`;

export const Github = styled.div`
    background: linear-gradient(to bottom,#25262F,#0C0D16);
    padding: 15px;
    width: 50%;
    border-radius: 20px;
    @media (max-width: 520px) {
        width: 100%;
    }
`;
export const Gitlab = styled.div`
    background: linear-gradient(135deg, #FC6D26, #E24329);
    padding: 15px;
    width: 50%;
    border-radius: 20px;
    @media (max-width: 520px) {
        width: 100%;
    }
`;
export const Instagram = styled.div`
    background: linear-gradient(135deg, #ff512f, #dd2476);
    padding: 15px;
    width: 50%;
    border-radius: 20px;
    @media (max-width: 520px) {
        width: 100%;
    }
`;

export const Linkedin = styled.div`
 background: linear-gradient(135deg, #1e3c72, #2a5298);
    padding: 15px;
    width: 35%;
    border-radius: 20px;
    @media (max-width: 520px) {
        width: 100%;
    }
`;

export const Svg = styled.svg`
    filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.671));
`;

export const Icon = styled.img`
    margin-top: 10px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
`;

export const Detail = styled.div`
    margin-left: 10px;
`;