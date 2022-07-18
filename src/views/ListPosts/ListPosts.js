import React, { useState, useContext } from 'react';
import MainLayout from '../../layouts/MainLayout'
import { Container, Wrapper } from '../../styled/styled';
import { Cover } from './styled';
import Posts from '../../components/Posts/Posts';
import Pagination from '../../components/Pagination';
import GlobalStateContext from "../../global/GlobalStateContext";

const ListPosts = () => {
  const { states } = useContext(GlobalStateContext);
  const { posts } = states;
  // const { setPosts } = setters;

  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <MainLayout>
    <Cover></Cover>
    <Container>
      <Wrapper>
          {posts && currentPosts.slice(0, 5).map(posts => (
            <Posts posts={currentPosts} loading={loading} key={posts.key} item ={posts}/>
          ))}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </Wrapper>
    </Container>
    </MainLayout>
  );
};

export default ListPosts;