import styled from 'styled-components';

// detail
export const Details = styled.h1`
    padding-top: 5rem;
    @media (min-width: 1024px){
        padding: 5rem 7rem 2rem;
    }
`;
export const DetailImages = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;
export const DetailDesc = styled.div`
    font-size: 18px;
    font-weight: 400;
    h3{
        margin: 1rem 0;
    }
`;
export const DetailAuthor = styled.div`
    display: flex;
    p{
        font-size: 16px;
        font-style: italic;
        font-weight: 400;
        margin-right: 10px;
        color: #5b7a81;
    }
`;
export const CardContentDetail = styled.div`
    position: relative;
    margin-bottom: 20px;
`
export const CardImagesDetail = styled.img`
    width: calc(100% - 10px);
    height: calc(100% - 11em);
    object-fit: cover;
`;
export const CardBoxDetail = styled.div`
    width: 100%;
    margin: auto;
    position: relative;
    margin: 20px 0 10px;
`;
export const CardDateDetail = styled.div`
    width: 100%;
    margin-bottom: 10px;
    position: relative;
    color: #5b7a81;
    font-size: 14px;
`;
export const CardTitleDetail = styled.div`
    width: auto;
    font-weight: bold;
    font-size: 18px;
    height: 45px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
`;
export const CardDescDetail = styled.div`
    width: auto;
    font-size: 16px;
`;
export const CardComp = styled.div`
    display: flex;    
    justify-content: center;
    margin: 2rem;
`;
export const CardText = styled.div`
    width: auto;
    margin-right: 15px;
    position: relative;
    color: #5b7a81;
    font-size: 16px;
    display: inline-flex;
    img{
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
`;