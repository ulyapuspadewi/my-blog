import styled from 'styled-components';

// article home
export const CardContent = styled.div`
    position: relative;
    margin-bottom: 20px;
    cursor: pointer;
    :hover{
        opacity: .9;
    }
`;
export const CardImageWrap = styled.div`
    overflow: hidden;
    height: 250px;
`;
export const CardImages = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    :hover{
        transform: scale(1.2);
    }
`;
export const CardBox = styled.div`
    width: 100%;
    margin: auto;
    position: relative;
    margin: 20px 0 10px;
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
    font-size: 14px;
    display: inline-flex;
    img{
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
`;
export const CardTitle = styled.div`
    width: auto;
    font-weight: bold;
    font-size: 18px;
    height: 50px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
`;
