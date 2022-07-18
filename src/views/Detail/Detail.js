import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../../utils/url";
import axios from "axios";
import MainLayout from "../../layouts/MainLayout"
import { Container, Wrapper } from '../../styled/styled';
import { Details, CardComp, DetailImages, DetailDesc, DetailAuthor, CardBoxDetail, CardText} from './styled';

const Detail = () => {

    const [postsDetails, setPostsDetails] = useState();
    const params = useParams([]);
    // const { states } = useContext(GlobalStateContext);
    // const { posts } = states;

    
    useEffect(() => {
      getPostsDetails();
    }, []);

      const getPostsDetails = () => { 
          axios
          .get(`${baseURL}/api/recipe/${params.key}`)
            .then((res) => {
              setPostsDetails(res.data);
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        };
      

    return (
        <MainLayout>
             <Container>
              {/* <h2>harusnya nampilin data</h2> */}
              
              {postsDetails && postsDetails.results && (
                 <Wrapper key={postsDetails.results.key}>
                  <Details>
                    <h1>{postsDetails.results.title}</h1>
                    <CardBoxDetail>
                    <DetailAuthor>
                      <p>Penulis: {postsDetails.results["author"].user}</p>
                      <p>{postsDetails.results["author"].datePublished}</p>
                    </DetailAuthor>
                      <DetailImages src={postsDetails.results.thumb} alt={postsDetails.results.title}/>
                      <CardComp>
                        <CardText><img src={require('../../images/portion.png')} />{postsDetails.results.servings}</CardText>
                        <CardText><img src={require('../../images/time.png')} />{postsDetails.results.times}</CardText>
                        <CardText><img src={require('../../images/level.png')} />{postsDetails.results.dificulty}</CardText>
                    </CardComp>
                    </CardBoxDetail>
                    <DetailDesc>{postsDetails.results.desc}</DetailDesc>
                    <hr />
                    <DetailDesc>
                      <h3>Bahaan yang perlu disiapkan:</h3>
                    {postsDetails &&
                        postsDetails.results.ingredient.map((ingredient) => {
                          return <p>{ingredient}</p>
                        })}
                    </DetailDesc>
                    <hr />
                    <DetailDesc>
                    <h3>Langkah memasak:</h3>
                    {postsDetails &&
                        postsDetails.results.step.map((step) => {
                          return <p>{step}</p>
                        })}
                    </DetailDesc>
                  </Details>
               </Wrapper>
              )}

             </Container>
        </MainLayout>
    )
    
}

export default Detail;
