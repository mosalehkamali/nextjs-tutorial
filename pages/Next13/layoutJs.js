import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function layoutJs() {
  return (
    <>
     <TopicContent
     text={'فایل layout.js بجای _app.js آمده است html را ریترین میکند که در آن محتوای صفحه در به عنوان children در  body قرار میگیرند'}
     link={'https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates'}
     code={`// app/layout.js
     import { Inter } from "next/font/google";
     import "./globals.css";
     
     const inter = Inter({ subsets: ["latin"] });
     
     export const metadata = {
       title: "Create Next App",
       description: "Generated by create next app",
     };
     
     export default function RootLayout({ children }) {
       return (
         <html lang="en">
           <body className={inter.className}>
             <h1>Header</h1>
             {children}
             </body>
         </html>
       );
     }
     `}
     ></TopicContent> 
    </>
  )
}

export default layoutJs