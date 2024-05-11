import TopicContent from "@/components/module/TopicContent";
import React from "react";

function WhenClientComponent() {
  return (
    <>
      <TopicContent
      text={'در جدول زیر قابلیت ها و موارد استفاده servr component و client component آمده است :'}
      link={'https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#when-to-use-server-and-client-components'}
      ></TopicContent>
      <br></br>
        <iframe
          scrolling="no"
          src="https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#when-to-use-server-and-client-components"
          style={{"border": "0px none", "marginLeft":"-36px", "height": "812px", "marginTop": -"486px", "width": "650px"}}
        ></iframe>
    </>
  );
}

export default WhenClientComponent;
