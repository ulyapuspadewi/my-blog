import styled from 'styled-components';

export const CardContentList = styled.div`
    position: relative;
    margin-bottom: 20px;

    :hover{
        opacity: .9;
    }
    a{
        width: 100%;
        color: #000;
        text-decoration: none;
        display: flex;
    }
    @media (min-width: 1024px){
        padding: 0 7rem;
    }
`;
export const CardImageWrap = styled.div`
    overflow: hidden;
    width: 35%;
    height: 100px;
    @media (min-width: 576px){
        height: 175px;
        width: 40%;
    }
`;
export const CardImagesList = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    :hover{
        transform: scale(1.2);
    }
`;
export const CardBoxList = styled.div`
    width: 65%;
    margin: auto;
    position: relative;
    margin: 10px 0 0 10px;
    @media (min-width: 576px){    
        width: 60%;
        margin: 20px 20px 10px;
    }
`;
export const CardTitleList = styled.div`
    width: auto;
    font-weight: bold;
    font-size: 14px;
    height: 45px;
    @media (min-width: 576px){ 
        margin-top: 3rem;
        font-size: 18px;
    }
`;
export const CardDescList = styled.div`
    width: auto;
    font-size: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    height: 38px;
    -webkit-box-orient: vertical;
`;
export const CardComp = styled.div`
    display: flex;
`;
export const CardText = styled.div`
    width: auto;
    margin-right: 15px;
    margin-bottom: 5px;
    position: relative;
    color: #5b7a81;
    font-size: 12px;
    display: inline-flex;
    img{
        width: 10px;
        height: 10px;
        margin-right: 5px;
    }
    @media (min-width: 576px){ 
        font-size: 14px;
        img{
            width: 20px;
            height: 20px;
        }
    }
`;