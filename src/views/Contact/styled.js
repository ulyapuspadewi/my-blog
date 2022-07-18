import styled from 'styled-components';

export const Background = styled.div`
    background-position: 50%;
    background-size: cover;
    padding-top: 5rem;
`
export const ContactWrap = styled.div`
    margin: auto;    
	color: #fff;
    width: 100%;
    display: flex;
    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
`