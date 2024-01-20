import type { Metadata } from 'next';
import { Inter, Raleway } from 'next/font/google';
import './globals.css';
import Head from '@/components/Head';
import Provider from '@/components/Provider';

const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],subsets: ['latin'], variable:'--font-raleway'})

export const metadata: Metadata = {
  title: 'Task Hunter',
  description: 'A web app for managing tasks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
      className={`${inter.className} ${raleway.className} w-full h-full min-h-screen bg-gray-50`}
      >
        <Provider>
          <header className='mb-4'>
            <Head/>
          </header>
          {children}
          <footer className='bottom-0 absolute'>
            footer goes here
          </footer>
        </Provider>
      </body>
    </html>
  )
}
