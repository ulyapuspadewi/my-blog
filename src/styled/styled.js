import breakpoint from './breakpoints';
import styled from 'styled-components';

export const Container = styled.div`
    @media only screen and ${breakpoint.device.mobileS}{
        margin: auto;
        padding: 0 1rem;
    }
    @media only screen and ${breakpoint.device.mobileL}{
        padding: 0 2rem;
    }
    @media only screen and ${breakpoint.device.laptop}{
        max-width: 1200px
    }
    @media only screen and ${breakpoint.device.laptopL}{
        max-width: 1300px
    }
`;
export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding-top: 3rem;
    margin-bottom: 3rem;
`;