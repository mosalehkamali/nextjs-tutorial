import TopicContent from "@/components/module/TopicContent";
import React from "react";

function googleFonts() {
  return (
    <>
      <TopicContent
        text={
          "به شکل زیر میتوانیم  از فونت های گوگل در پروژه خودمون توسط نکست استفاده کنیم ."
        }
        link={
          "https://nextjs.org/docs/app/building-your-application/optimizing/fonts"
        }
        code={`import { Inter } from 'next/font/google'
 
     // If loading a variable font, you don't need to specify the font weight
     const inter = Inter({
       subsets: ['latin'],
       display: 'swap',
     })
      
     export default function RootLayout({ children }) {
       return (
         <html lang="en" className={inter.className}>
           <body>{children}</body>
         </html>
       )
     }`}
      ></TopicContent>
    </>
  );
}

export default googleFonts;
