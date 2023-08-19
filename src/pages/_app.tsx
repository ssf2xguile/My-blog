// 必要なモジュールをインポートする
import type { AppProps } from 'next/app'; // Next.jsのAppProps型をインポート
import { ChakraProvider } from '@chakra-ui/react'; // Chakra UIのChakraProviderコンポーネントをインポート
import theme from '../libs/theme'; // Chakra UIのテーマをインポート

// MyAppという関数コンポーネントを定義する
function MyApp({ Component, pageProps }: AppProps) {
  // MyAppコンポーネントはAppPropsという型の引数を受け取り、それを解構してComponentとpagePropsに分割代入している

  // ChakraProviderコンポーネントでアプリケーション全体をラップする
  return (
    <ChakraProvider theme={theme}>
      {/* ラップされたアプリケーションのコンポーネントを表示する */}
      <Component {...pageProps}/>
    </ChakraProvider>
  );
}

// MyAppコンポーネントをデフォルトエクスポートする
export default MyApp;
