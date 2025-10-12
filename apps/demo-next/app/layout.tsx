import '@/styles/globals.css'

import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { ThemeProvider } from '@/lib/theme-provider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <NuqsAdapter>
          <ThemeProvider>{children}</ThemeProvider>
        </NuqsAdapter>
      </body>
    </html>
  )
}
