import styled from 'styled-components';

export const BoxContent = styled.div`
    a{
        color: #000;
        text-decoration: none;
    }
`;
export const Button = styled.button`
    position: relative;
    margin: auto;
    display: block;
    border: none;
    cursor: pointer;    
    margin-top: 2em;
    padding: 10px 20px;
    border-radius: 5px;
    background: #212529;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    :hover{
        opacity: .5;
    }
    a{   
        padding: 15px 20px;
        background: #0f1112;
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        border-radius: 5px;
    }
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    text-transform: uppercase;
`;