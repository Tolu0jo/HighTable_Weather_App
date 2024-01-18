'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/footer'
import AuthProvider from './lib/provider'
import { ApolloProvider } from '@apollo/client'
import client from './apolloclient'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
       <AuthProvider>
      <body className={inter.className}>
      <ApolloProvider client={client}>
        {children}
        </ApolloProvider>
      <Footer/>
      </body>
      </AuthProvider>
 
    </html>
  )
}
