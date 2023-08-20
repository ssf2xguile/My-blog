import type { NextPage } from 'next';
import Link from 'next/link';
import { MetaHead } from 'components/MetaHead';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import {
  Container,
  Text,
} from "@chakra-ui/react";


const Error404: NextPage = () => {
    return (
        <>
            <MetaHead />
            <Header />
            <Container as="main" maxW="container.lg" marginTop="4" marginBottom="4" minHeight="100vh" display="flex" flexDirection="column">
                <Text fontSize="2xl" my={4}>404 - 指定されたページはありません</Text>
                <Link href="/">ホームへ戻る</Link>
            </Container>
            <Footer />
        </>
    )
}

export default Error404