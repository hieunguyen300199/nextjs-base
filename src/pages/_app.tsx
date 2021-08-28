import { useState } from 'react'
import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query/devtools'
import { appWithTranslation } from 'next-i18next'

import { AppContextProvider } from '@/contexts/app/app.context'

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AppContextProvider>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </AppContextProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}
export default appWithTranslation(App)
