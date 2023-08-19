import { Pagination } from 'components/Pagination';
import { client } from 'libs/client';
import { GetStaticPaths, GetStaticProps, } from "next";
import type { Post } from "types/blog";
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { PostList } from 'components/PostList';
import { Breadcrumbs } from 'components/Breadcrumbs';
import {
    Box,
    Container,
    Heading,
} from "@chakra-ui/react";
import { BLOG_PER_PAGE } from 'settings/siteSettings';

type Props = {
    posts: Post[]
    totalCount: number
    currentPage: number
};

export default function BlogPageId({ posts, totalCount, currentPage }: Props) {
    return (
        <Box>
            <Header />
            <Container as="main" maxW="container.lg" marginTop="4" marginBottom="4" minHeight="100vh" display="flex" flexDirection="column">
                <Breadcrumbs />
                <PostList posts={posts} />
                <Pagination totalCount={totalCount} currentPage={currentPage} />
            </Container>
            <Footer />
        </Box>
    );
}

// 静的ファイルの生成
export const getStaticPaths: GetStaticPaths = async () => {
    const repos = await client.get({ endpoint: "post" });
    const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);
    const paths = range(1, Math.ceil(repos.totalCount / BLOG_PER_PAGE)).map((repo) => `/page/${repo}`);
    return { paths, fallback: false };
};

// アクセスされたpageナンバーに応じたデータの取得
export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({ params }) => {
    if (!params) throw new Error("Error Page Number Not Found");
    const pageId = Number(params.id);
    const data = await client.getList({
        endpoint: "post",
        queries: {
            offset: (Number(pageId) - 1) * BLOG_PER_PAGE,
            limit: BLOG_PER_PAGE
        }
    });
    return {
        props: {
            posts: data.contents,
            totalCount: data.totalCount,
            currentPage: pageId
        },
    };
};