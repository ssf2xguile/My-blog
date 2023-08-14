import type { MicroCMSListContent } from "microcms-js-sdk";

export type PostTag = {
    tag: string
} & MicroCMSListContent

export type Post = {
    title: string;
    description: string,
    tag: PostTag[];
    text: string,
} & MicroCMSListContent