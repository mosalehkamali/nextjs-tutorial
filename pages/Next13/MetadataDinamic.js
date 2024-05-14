import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function MetadataDinamic() {
  return (
    <>
      <TopicContent
      text={'برای ایجاد متا دیتا داینامیک باید فانکشن generateMetadata را اکسپورت بکنیم که در ورودی آن به پارامتر های آن صفحه و کوئری ها دسترسی داریم و آبجکتی از متا ها را ریترن میکند.'}
      link={'https://nextjs.org/docs/app/building-your-application/optimizing/metadata'}
      code={`export async function generateMetadata({ params, searchParams }, parent) {
        // read route params
        const id = params.id
       
        // fetch data
        const product = await fetch('https://.../{id}').then((res) => res.json())
       
        // optionally access and extend (rather than replace) parent metadata
        const previousImages = (await parent).openGraph?.images || []
       
        return {
          title: product.title,
          openGraph: {
            images: ['/some-specific-page-image.jpg', ...previousImages],
          },
        }
      }
       
      export default function Page({ params, searchParams }) {}`}
      ></TopicContent>
    </>
  )
}

export default MetadataDinamic
