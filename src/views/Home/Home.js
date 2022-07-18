import React, {useContext} from 'react'
import MainLayout from '../../layouts/MainLayout'
import Banner from '../../components/Banner/Banner';
import Article from '../../components/Article/Article';
import { goToListPost } from "../../routes/coordinator";
import { BoxContent, Button, Title } from './styled';
import { Container, Wrapper } from '../../styled/styled';
import GlobalStateContext from "../../global/GlobalStateContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const { states } = useContext(GlobalStateContext);
    const { posts } = states;
    // const { setPosts } = setters;

    return (

        <MainLayout>
            <Banner />
            <Container>
                <Wrapper>
                    <Title>Resep Terbaru</Title>
                    <BoxContent className='row'>
                        {posts && posts.slice(0, 5).map((posts) => 
                            <Article key={posts.key} item={posts} />
                        )}
                    </BoxContent>
                    {/* <Button><Link onClick={() => { window.location.href = "/ListPosts" }}>VIEW MORE</Link></Button> */}
                    {/* <Button onClick={() => goToListPost(navigate)}>VIEW MORE</Button> */}
                </Wrapper>
            </Container>
        </MainLayout>

    )
}

export default Home