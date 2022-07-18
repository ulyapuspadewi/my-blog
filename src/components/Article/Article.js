import React from "react"
import { useNavigate } from 'react-router-dom'
import {CardContent, CardImages, CardBox, CardComp, CardText, CardTitle, CardDesc, CardImageWrap} from './styled';
import { goToDetailsPage } from "../../routes/coordinator";

const Article = ({ item }) => { 
    const navigate = useNavigate();
    return(                

        <CardContent 
            className='col-sm-6 col-lg-4'
            key={item.key}
            onClick={() => goToDetailsPage(navigate, item.key)}>  
            <CardImageWrap>
                <CardImages src={item.thumb} alt={item.title} />
            </CardImageWrap>
            <CardBox>
                <CardComp>
                    <CardText><img src={require('../../images/portion.png')} />{item.portion}</CardText>
                    <CardText><img src={require('../../images/time.png')} />{item.times}</CardText>
                    <CardText><img src={require('../../images/level.png')} />{item.dificulty}</CardText>
                </CardComp>
                <CardTitle>{item.title}</CardTitle>
            </CardBox>
    </CardContent>
        
    )
}

export default Article