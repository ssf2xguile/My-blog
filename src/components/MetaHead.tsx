import Head from 'next/head';
import { FC } from 'react';

type Meta = {
    title?: string;
    description?: string;
}

export const MetaHead: FC<Meta> = ({ title = "A.M.R Blog", description = "A.M.Rによるブログ記事" }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            {/* 他に必要なメタ情報があればここに追加 */}
        </Head>
    );
}
