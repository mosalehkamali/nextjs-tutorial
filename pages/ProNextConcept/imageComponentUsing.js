import TopicContent from '@/components/module/TopicContent'
import React from 'react'
import Image from 'next/image'

function imageComponentUsing() {
    return (
        <>
            <TopicContent
                text={"کامپوننت Image  را میتوانیم بجای تگ img استفاده کنیم این کامپوننت عکس ها ار تا ده برابر بهینه تر و کم حجم تر میکند و عکس افت کیفیت ندارد برای این کار کامپوننت Image رااز next/image ایمپورت میکنیم"}
                link={"https://nextjs.org/docs/pages/api-reference/components/image"}
                code={ ` <Image src={'/images/post01.png'} width={850} height={400} alt={'course'}></Image>`}
            ></TopicContent>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <h1>img tag</h1>
            <img src='/images/post03.png' alt='course' />
            <h1>Image component</h1>
            <Image src={'/images/post03.png'} width={850} height={400} alt={'course'}></Image>
        </>
    )
}

export default imageComponentUsing
