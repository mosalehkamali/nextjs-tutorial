import React from 'react'
import TopicHeader from '@/components/module/TopicHeader'
import Link from 'next/link'
import CodeBox from '@/components/module/CodeBox'


function FallbackTrue() {
  return (
    <>
    <TopicHeader></TopicHeader>
    <p className='topic-text'>
       زمانی که فال بک برابر با ترو باشد اگر کاربر ورودی بجر صفحه ها مشخص شده در پث بدهد آن صفحه اگر اطلاعاتش وجود داشته باشد سرور دوباره برای فچ اطلاعات صفحه مورد نظر کاربر تلاش میکند و آنها را به بروزر کاربر میفرستد و در بروز کاربر صفحه ساخته میشود و ان صفحه در سرور ذخیره میشود . وقتی فال بک ترو باشد پارامتری برای مت useRouter فعال میشد به نام isFallback مدتی که صفحه جدید در حال ساخت است مقدارش true میشود تا برای نمایش لودر به کاربر استفاه شود
    </p>
    <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths#generating-paths-on-demand">Next.js document about this topic</Link>
    <CodeBox code={
      `import { useRouter } from "next/router";
      import React from "react";
      
      function Product({ product }) {
        const router = useRouter();
      
        if (router.isFallback) { //حین ساخته شدن صفحه ایزفالبک مقددارش ترو است
          return <h1>Fallback page: Please wait</h1>;
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
          fallback: true, // اگر کاربر صفحه ای بجز سه صفحه ساخته شدده را بخواهد سرور دوباره اطلاعات صفحه را 
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

export default FallbackTrue
