import styled from 'styled-components';

export const Container = styled.div`
    img {
        margin-top: 1.7%;
    }

    h2 {
        font-family: Roboto;
        font-weight: bold;
        font-size: 220%;
        line-height: 56px;
        width: 400px;

        margin-top: 8%;
        display: flex;
    }

    form {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
        margin-top: 40px;

        input {
            width: 450px;
            border: 0;
            padding: 10px;
            background: #ffffff;
            border-radius: 5px 0 0 5px;
            height: 60px;
            box-sizing: border-box;
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            padding: 10px;
            width: 150px;
            height: 60px;
            box-sizing: border-box;

            /* Correto */

            background: #04d361;
            border: 0;
            border-radius: 0px 5px 5px 0px;
            color: #ffffff;
        }
    }
`;
