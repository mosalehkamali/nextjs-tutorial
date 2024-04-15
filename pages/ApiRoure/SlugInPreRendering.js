import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function SlugInPreRendering() {
  return (
    <>
     <TopicContent
     text={'برای استفاده از api در صفحاتی که در سرور رندر میشوند نیاز به ارسال ریکوئست به سرور نیست در همان متد هاس getStaticProps و getServerSideProps با کد های node میتوانیم داده ها را از سرور بگیریم'}
     link={"https://nextjs.org/docs/pages/building-your-application/routing/api-routes"}
     code={`
     export async function getStaticProps(contaxt) {

        const dbPath = path.join(process.cwd(), "data", "users.json");//process.cwd() روتی که پروژه در آن اجرا میشود را برمیگردانند
        const data = fs.readFileSync(dbPath)//بامتد readFileSync(dbPath) فایلی که باید خوانده شود را دریافت میکند
        const jsonData = JSON.parse(data);//داده ها را به جیسون پارس تبدیل میکنیم تا قابل خواندن شوند
        return{
          props:{
            data:jsonData.users //داده ها را به کامپوننت ارسال میکنیم
          }
        }
      }
     `}
     >
        </TopicContent> 
    </>
  )
}

export default SlugInPreRendering
