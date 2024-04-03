import React from 'react'
import TopicHeader from '@/components/module/TopicHeader'
import Link from 'next/link'
import CodeBox from '@/components/module/CodeBox'


function FallbackBlocking() {
  return (
    <>
    <TopicHeader></TopicHeader>
    <p className='topic-text'>
    عملکرد blocking مانند true  است تنها تفاوتی که دارد پراپرتی isFallback  در useRouter دیگر true نمیشود و صفحه لودری ساخته نمیشود و در حین ساخت صفحه مورد نظر کاربر در همان صفجه قبل میماند
    </p>
    <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths#generating-paths-on-demand">Next.js document about this topic</Link>
    <CodeBox code={
      `import { useRouter } from "next/router";
      import React from "react";
      
      function Product({ product }) {
        const router = useRouter();
      
        if (router.isFallback) { //دیگر از این متد نمیتوان استفادده کرد 
              return <h1>Fallback page: Please wait</h1>;//بجای این کاربر در صفحه قبل میماند تا صفحه جدید ساخته شود
        }
      
        return <h1>Product Title: {product.title}</h1>;
      }
      
      export async function getStaticPaths() {
        const res = await fetch("https://fakestoreapi.com/products?limit=7");
        const data = await res.json();
      
        const paths = data.slice(0, 3).map((product) => { //تنها اطلاعات سه صفحه جدا شده و سسه صفحه
                                                         // اس اس جی در سرور آماده میشود
          return {
            params: { id: String(product.id) },
          };
        });
      
        return {
          paths,
          fallback: "blocking", // اگر کاربر صفحه ای بجز سه صفحه ساخته شدده را بخواهد سرور دوباره اطلاعات صفحه را 
                          //در تابع getStaticProps میگیرد و به مرورگر کاربر میفرستد تا صفحه در آنجا ساخته شود
                          // سپس صفحه در سرور ذخیره میشود
        };
      }
      
      export async function getStaticProps(context) {
        const productID = context.params.id;
        const res = await fetch("https://fakestoreapi.com/products/{productID}");
        const data = await res.json();
      
        return {
          props: {
            product: data,
          },
        };
      }
      
      export default Product;`
    }></CodeBox> 
   </>
  )
}

export default FallbackBlocking
