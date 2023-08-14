import {
    Link,
    Tag,
    TagLabel
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";
import type { PostTag } from "types/blog";

export const TagLink: FC<{ tag: PostTag }> = ({ tag }) => {
    return (
        <NextLink href={`/tags/${tag.id}/page/1`} passHref>
            <Link>
                <Tag variant='subtle' colorScheme='cyan'>
                    <TagLabel fontSize="md">{tag.tag}</TagLabel>
                </Tag>
            </Link>
        </NextLink>
    );
};