import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { WidthContext } from '@/context/WidthContext'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next e-commerce template',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.JSX.Element
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </head>

      <body>
        <WidthContext>
          <Header />
          {children}
          <Footer />
        </WidthContext>
      </body>
    </html>
  )
}
