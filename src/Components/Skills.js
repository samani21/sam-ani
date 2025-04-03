import styled from "styled-components";

export const SkillsContainer = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    background: #1e1e1e;
    padding: 20px;
    width: 400px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

    h1{
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 15px;
        text-align: center;
        color: #ffffff;
    }
`;

export const Skill = styled.div`
    margin-bottom: 15px;
        .skill-name {
                font-size: 14px;
                font-weight: 500;
                margin-bottom: 5px;
        }

        .skill-bar {
            height: 12px;
            background: #333;
            border-radius: 6px;
            overflow: hidden;
            position: relative;
        }

        .skill-progress {
            height: 100%;
            width: 0;
            border-radius: 6px;
            transition: width 2s ease-in-out;
        }

        /* Warna dan Animasi untuk Setiap Skill */
        &.html .skill-progress {
            width: 90%;
            background: linear-gradient(90deg, #ff5722, #ff9800);
            animation: animateHtml 2s ease-in-out;
        }

        &.css .skill-progress {
            width: 85%;
            background: linear-gradient(90deg, #3f51b5, #2196f3);
            animation: animateCss 2s ease-in-out;
        }

        &.javascript .skill-progress {
            width: 80%;
            background: linear-gradient(90deg, #ffeb3b, #ff9800);
            animation: animateJavascript 2s ease-in-out;
        }

        &.react .skill-progress {
            width: 85%;
            background: linear-gradient(90deg, #00bcd4, #009688);
            animation: animateReact 2s ease-in-out;
        }

        &.nextjs .skill-progress {
            width: 80%;
            background: linear-gradient(90deg, #9c27b0, #673ab7);
            animation: animateNext 2s ease-in-out;
        }
          /* Tambahan Skill: MySQL, PHP, Laravel, CI */
        &.mysql .skill-progress {
            width: 75%;
            background: linear-gradient(90deg, #00758f, #00acc1);
            animation: animateMysql 2s ease-in-out;
        }

        &.php .skill-progress {
            width: 80%;
            background: linear-gradient(90deg, #6c5ce7, #a29bfe);
            animation: animatePhp 2s ease-in-out;
        }

        &.laravel .skill-progress {
            width: 70%;
            background: linear-gradient(90deg, #f73164, #ff5e6d);
            animation: animateLaravel 2s ease-in-out;
        }

        &.ci .skill-progress {
            width: 65%;
            background: linear-gradient(90deg, #1c1b18, #585858);
            animation: animateCI 2s ease-in-out;
        }
 /* Animasi */
 @keyframes animateHtml {
            from { width: 0%; }
            to { width: 90%; }
        }

        @keyframes animateCss {
            from { width: 0%; }
            to { width: 85%; }
        }

        @keyframes animateJavascript {
            from { width: 0%; }
            to { width: 80%; }
        }

        @keyframes animateReact {
            from { width: 0%; }
            to { width: 85%; }
        }

        @keyframes animateNext {
            from { width: 0%; }
            to { width: 80%; }
        }

        @keyframes animateMysql {
            from { width: 0%; }
            to { width: 75%; }
        }

        @keyframes animatePhp {
            from { width: 0%; }
            to { width: 80%; }
        }

        @keyframes animateLaravel {
            from { width: 0%; }
            to { width: 70%; }
        }

        @keyframes animateCI {
            from { width: 0%; }
            to { width: 65%; }
        }
`;