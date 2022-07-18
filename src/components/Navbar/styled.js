import styled from 'styled-components';
import Logos from "../../images/logo.png"

export const Fluid = styled.div`
    display: flex;
    background-color: #f6f6f6;
    border-color: rgba(231, 231, 231, 0);
    box-shadow: 0 0 10px rgb(0 0 0 / 15%);
    justify-content: end;
    color: #000;
    align-items: center;
    padding-bottom: 0;
    @media (min-width: 576px){   
        padding-left: 12rem;    
        height: 5rem;
    }
    button{
        display: flex;
        flex-wrap: inherit;
        align-items: center;
        justify-content: end;
        :focus{
            box-shadow: unset;
        }
    }
    a{
        text-decoration: none;
        color: #6f6f6f;
        font-size: 20px;
        padding: 0 5px;
        
    }
    button{
        margin: 1rem;
    }
    ul{
        text-align: end;
        padding: 10px 1rem;
        li{
            margin: 5px 0;
        }
        @media (max-width: 576px){   
            background: #dee5de;
        }
    }
`;
export const Logo = styled.div`
    background-image: url(${Logos});
    height: 100px;
    width: 100%;
    z-index: 99;
    background-position: center;
    background-size: cover;
    background-color: #f8f9fa;
    border-radius: 20%;
    border: 10px solid #f8f9fa;
    box-shadow: 5px 7px 15px -9px #888888;
`;