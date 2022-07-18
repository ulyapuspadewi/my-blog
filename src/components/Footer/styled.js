import styled from 'styled-components';


export const Footers = styled.footer`
    color: #000;
    position: relative;
    bottom: 0;
    width: 100%;
    background-color: #dee5de;
`;
export const Fotcont = styled.div`  
    h6{
        letter-spacing: 2px;
        position: relative;
        padding-bottom: 12px;  
        :after {
            content: '';
            width: 25px;
            border-bottom: 1px solid #FFF;
            position: absolute;
            left: 0;
            bottom: 0;
            display: block;
            border-bottom: 1px solid #1bbc9b;
        }
        @media screen and (max-width: 576px) {
            margin-top: 2rem;
        }
    }    
    ul {
        list-style: none;
        margin: 4px 0;
        padding: 0;
        a{
            color: #acacac;
            line-height: 40px;
            font-size: 14px;
            transition: all 0.5s;
            text-decoration: none;
            font-weight: 600;
            :hover {
                color: #1bbc9b;
            }
    }
    p{
        color: #acacac;
        font-size: 14px;
        font-weight: 600;
    }
`;
export const Copyright = styled.div`
    padding: 10px;
    background: #212529;
    color: #fff;   
    h6{
            font-size: 12px;
            text-align: center;
            margin: 0
        }
`;
export const FotBox = styled.div`
    padding: 2rem 0 ;    
`;