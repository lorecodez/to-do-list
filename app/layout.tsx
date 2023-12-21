import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from '@/components/Head';

const inter = Inter({ subsets: ['latin'] })

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
      className={`${inter.className} w-full h-full min-h-screen bg-blue-100`}
      >
        <header className='mb-4'>
          <Head/>
        </header>
        {children}
        <footer>
          footer goes here
        </footer>
      </body>
    </html>
  )
}
