import styled from 'styled-components';

export const ContactBoxed = styled.div`
    position: relative;
    max-width: 600px;
    margin: auto;
    padding: 5rem 0;
    h2{
        text-align: center;
        margin-bottom: 2rem;
    }    
    @media screen and (max-width: 1024px) {
       padding: 3rem 0;
    }
`
export const ContactBoxed2 = styled.div`
    position: relative;
    margin: auto;
    max-width: 400px;
    padding: 5rem 0 0;
    h2{
        text-align: center;
        margin-bottom: 2rem;
    }
    @media screen and (max-width: 1024px) {
        padding: 2rem 0;
     }
`
export const FormOption = styled.div`
    position: relative;
    padding: 0 3rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2{
        margin-bottom: 1rem;
    }
    label{
        margin-bottom: 15px;
    }
`
export const FormInput = styled.div`
    display: flex;
    justify-content: space-between;
`
export const FormOptions = styled.div`
    select{    
        padding: 0.5em;
        border: none;
        border-radius: 3px;
        width: 100%;   
        border: 1px solid;
        margin: 10px 0;
    }
`
export const FormMessage = styled.div`
    textarea{    
        height: 300px;
        border: 1px solid;
        padding: 10px;
        font-family: inherit;
    }
`
export const Input = styled.input`
	padding: 0.5em;
	border: none;
	border-radius: 3px;
    width: 49%;
    margin-top: 20px;   
    border: 1px solid;
`

export const Button = styled.button`
    position: relative;
    margin: auto;
    display: block;
    border: none;
    cursor: pointer;    
    margin-top: 2em;
    padding: 10px 20px;
    border-radius: 5px;
    background: #fff;
    color: #000;
    text-decoration: none;
    font-weight: bold;
    .fab{
        margin-left: 10px;
    }
`
export const SocialMedia = styled.ul`
    position: relative;
    margin:0;
    padding: 0 3rem 2rem;
    display:flex;
    justify-content: center;
`
export const Sos = styled.li`
    list-style: none;
    a{
        position: relative;
        width:40px;
        height:40px;
        display:block;
        text-align:center;
        margin:0 5px;
        border-radius: 50%;
        padding: 6px;
        box-sizing: border-box;
        text-decoration:none;
        box-shadow: 0 10px 15px rgba(0,0,0,0.3);
        background: linear-gradient(0deg, #ddd, #fff);
        transition: .5s;
    }
    a:hover {
        box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        text-decoration:none;
      }
.fab {
    widht: 100%;
    height:100%;
    display:block;
    background: linear-gradient(0deg, #fff, #ddd);
    border-radius: 50%;
    line-height: normal;
    font-size: 26px;
    color: #262626;
    transition: .5s;
  }
  
:nth-child(1) a:hover .fab {
    color: #3b5998;
  }
  
:nth-child(2) a:hover .fab {
    color: #00aced;
  }
  
:nth-child(3) a:hover .fab {
    color: #dd4b39;
  }
  
:nth-child(4) a:hover .fab {
    color: #007bb6;
  }
  
:nth-child(5) a:hover .fab {
    color: #e4405f;
  }
`