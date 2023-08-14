import {
    Box,
    HStack,
    Link,
    Text
} from "@chakra-ui/react";
import { BLOG_PER_PAGE } from 'settings/siteSettings'

type Props = {
    totalCount: number;
    currentPage?: number;
    tagId?: string;
};

export const Pagination = ({ totalCount, currentPage = 1, tagId }: Props) => {
    const range = (start: number, end: number) =>
        [...Array(end - start + 1)].map((_, i) => start + i)
    const pageCount = Math.ceil(totalCount / BLOG_PER_PAGE)
    
    const getPath = (p: number) => {
        if (tagId) return `/tags/${tagId}/page/${p}`
        return `/page/${p}`
    }

    // 追加 現在ページか否かで返す要素を分ける
    const getPaginationItem = (p: number) => {
        if (p === currentPage) return <Text color="gray.700" fontSize="3xl">{p}</Text>
        return <Link href={getPath(p)} color="gray.400" fontSize="3xl">{p}</Link>
    }
    return (
        <HStack spacing='10' justifyContent="center">
            {range(1, pageCount).map((number, index) => (
                <Box key={index}>
                    {getPaginationItem(number)}
                </Box>
            ))}
        </HStack >
    );
};