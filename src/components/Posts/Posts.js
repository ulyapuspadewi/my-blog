import React from 'react';
import { Link } from 'react-router-dom'
import  {CardContentList, CardImageWrap, CardImagesList, CardComp, CardText,  CardBoxList, CardTitleList, CardDescList} from './styled'

const Posts = ({ item, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <CardContentList className='list-group mb-4'>
        <Link to={{ pathname: `/detail/${item.key}`, state: { posts: item } }}>
            <CardImageWrap>
              <CardImagesList src={item.thumb} alt={item.title} />
            </CardImageWrap>
            <CardBoxList>
              <CardComp>
                <CardText><img src={require('../../images/portion.png')} />{item.portion}</CardText>
                <CardText><img src={require('../../images/time.png')} />{item.times}</CardText>
                <CardText><img src={require('../../images/level.png')} />{item.dificulty}</CardText>
              </CardComp>
              <CardTitleList>{item.title}</CardTitleList>
            </CardBoxList>
        </Link>
    </CardContentList>
  );
};

export default Posts;