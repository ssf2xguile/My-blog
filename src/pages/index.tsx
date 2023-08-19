/* src/pages/index.tsx */
import type { NextPage } from 'next';
import type { Post } from 'types/blog';

import { client } from 'libs/client';

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { PostList } from 'components/PostList';
import { Pagination } from 'components/Pagination';
import { Breadcrumbs } from 'components/Breadcrumbs';

import {
  Container,
} from "@chakra-ui/react";

import { BLOG_PER_PAGE } from 'settings/siteSettings';


export const getStaticProps = async () => {
  const data = await client.getList({ endpoint: "post", queries: { limit: BLOG_PER_PAGE } });
  return {
    props: {
      posts: data.contents,
      totalCount: data.totalCount
    },
  };
};

type Props = {
  posts: Post[];
  totalCount: number;
};

const Home: NextPage<Props> = ({ posts, totalCount }) => {
  return (
    <>
      <Header />
      <Container as="main" maxW="container.lg" marginTop="4" marginBottom="4" minHeight="100vh" display="flex" flexDirection="column">
        <Breadcrumbs />
        <PostList posts={posts} />
        <Pagination totalCount={totalCount}></Pagination>
      </Container>
      <Footer />
    </>
  )
}

export default Home