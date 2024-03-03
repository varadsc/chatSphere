import React from 'react'
import Styles from './ChatBody.module.css'

export const ChatBody = () => {

  const messages = [
    {"message":"Hello","issent":true,"time":"08:24"},
    {"message":"How are you?","issent":false,"time":"15:09"},
    {"message":"Good morning!","issent":true,"time":"12:37"},
    {"message":"Have a nice day!","issent":true,"time":"19:52"},
    {"message":"Greetings!","issent":true,"time":"01:11"},
    {"message":"What's up?","issent":false,"time":"03:42"},
    {"message":"Nice to meet you!","issent":false,"time":"16:58"},
    {"message":"See you later!","issent":false,"time":"17:46"},
    {"message":"Hi there!","issent":true,"time":"22:34"},
    {"message":"Long time no see!","issent":true,"time":"14:39"},
    {"message":"Hey!","issent":true,"time":"11:21"},
    {"message":"Take care!","issent":false,"time":"06:57"},
    {"message":"Hola!","issent":false,"time":"09:33"},
    {"message":"Howdy!","issent":false,"time":"20:58"},
    {"message":"Bonjour!","issent":true,"time":"00:25"},
    {"message":"Ciao!","issent":true,"time":"05:19"},
    {"message":"Salut!","issent":true,"time":"13:07"},
    {"message":"Shalom!","issent":false,"time":"23:13"},
    {"message":"Namaste!","issent":false,"time":"10:52"},
    {"message":"Guten Tag!","issent":false,"time":"18:06"}
]

  return (
    <div  style={{flex: 1,  padding:'1rem',  marginBottom :'128px',  overflowY: 'auto'}}>

      {/* <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptas cupiditate eos magni quae. Reprehenderit a doloremque est asperiores iure maiores ullam illo animi eius deserunt, aperiam voluptates sunt ipsum quidem odio? Quam maiores atque beatae modi veritatis harum perspiciatis ipsa, voluptates culpa eaque? Numquam corporis iure ut consequuntur expedita? Nostrum numquam eaque nam molestiae iste, delectus consequuntur ipsam sequi sint temporibus hic magnam minus? Distinctio eum commodi, in consequatur, itaque dolorem sequi maxime perspiciatis voluptatibus reiciendis provident quasi ea vel a, illum ipsum incidunt natus ex expedita. Harum repellendus fugit neque sequi ipsam sapiente nulla minus ratione cumque similique, porro consectetur? Nesciunt repudiandae error eveniet earum! Facilis obcaecati reprehenderit itaque corrupti vero cum laborum non at perspiciatis blanditiis laudantium, laboriosam neque quae illum eligendi voluptatibus veniam. Quidem magnam ipsam cumque exercitationem excepturi assumenda saepe mollitia sit aperiam consequatur suscipit dolorem, iusto rem reiciendis in autem et praesentium facere corporis molestiae alias explicabo error vel. Non quidem accusamus pariatur, nobis, ipsam corrupti excepturi perspiciatis praesentium dolore, cupiditate odit aspernatur modi rem necessitatibus similique obcaecati unde. Sunt hic quisquam veritatis accusantium aliquid harum nisi atque itaque sed facere pariatur eligendi maiores autem nobis, praesentium assumenda quo laboriosam maxime voluptates exercitationem obcaecati culpa. Cumque eum voluptate aspernatur expedita dolore asperiores labore. Iusto alias qui labore, adipisci neque tempora iste perspiciatis, assumenda nobis dolore mollitia ad voluptates eligendi quo provident ea? Doloremque, quas sit ipsam exercitationem assumenda adipisci magni ducimus laboriosam? Voluptas ex, esse vel minus, ullam voluptates veniam perferendis aspernatur, provident fugit quod! Error distinctio quo asperiores rem? Nesciunt sunt porro sit laboriosam nam earum itaque non excepturi, nostrum ab praesentium odit id placeat fugit quasi dolorum incidunt? Adipisci similique harum, aliquam, aperiam porro facere repellat reprehenderit molestias illo minus debitis facilis dolorem assumenda nulla, cumque soluta aliquid at! Qui quasi at tempore, vel deserunt velit rem. Tempora dicta sed aliquid unde iste incidunt, itaque facilis totam sunt a blanditiis minima eveniet quas et eos iure pariatur, vitae dolor. Iste ipsum assumenda, laborum obcaecati dolores nostrum earum possimus est quam quo tempore, nesciunt perferendis aut, inventore id! Suscipit harum, dolore incidunt repudiandae mollitia deleniti saepe voluptatibus consequuntur corrupti laudantium quasi adipisci accusamus. Corporis optio ut accusamus fuga repellendus ducimus fugit, porro iure perferendis! Voluptatum animi voluptatibus unde labore, illum obcaecati asperiores? Magnam ipsa facere in minima magni nobis, nesciunt dolores deleniti quas fuga voluptatibus iste similique amet sit nulla, quos quasi dolor excepturi id iusto consequuntur. Incidunt ab labore ad debitis, provident a qui quibusdam nobis accusamus! Dignissimos perspiciatis reprehenderit veritatis dolorum aut inventore autem eligendi sit corporis repellendus quae et sint facere, dolorem quibusdam blanditiis atque tempore voluptate tempora! Placeat saepe quidem omnis nam. Quia vero explicabo esse hic! Maiores, beatae accusamus eligendi repudiandae quae sit obcaecati non nostrum, veritatis ad nam accusantium sapiente hic sint illo vel alias id dicta perferendis odit. Non ratione fugiat odit modi soluta voluptatibus ut repellendus commod accusamus eligendi repudiandae quae sit obcaecati non nostrum, veritatis ad nam accusantium sapiente hic sint illo vel alias id dicta perferendis odit. Non rdit. Non ratione fugiat odit modi soluta voluptatibus ut repellendus commod accusamus eligendi repudiandae quae sitdae quae sit obcaecati non nostrum, veritatis ad nam accusantium sapiente hic sint illo vel alias id dicta perferendis odit. Non ratione fugiat odit modi soluta voluptatibus ut repellendus commod accusamus eligendi repudiandae quae sit obcaecati non nostrum, veritatis ad nam accusantium sapiente hic sint illo vel alias id dicta perferendis odit. Non rdit. Non ratione fugiat odit modi soluta voluptatibus ut repellendus commod accusamus eligendi repudiandae quae sit   obcaecati non nostrum, veritatis ad nam accusantium sapiente hic sint illo vel alias id dicta perferendis odit. Non ratione fugiat odit modi soluta voluptatibus ut 
            repellendus commod
      </div> */}

      {messages?.map((el) => (
        <>
        {el.issent ? 
          <div className='d-flex justify-content-end my-4 mx-1'>
            <div className={`px-1 py-2  ${Styles.sentMsg}`} >
              {el.message} and <sub> {el.time}  </sub> 
            </div>
          </div>
          :
          <div className='d-flex justify-content-start my-4 mx-1'>
            <div className={`px-1 py-2  ${Styles.recievedMsg}`} >
              {el.message} and <sub> {el.time}  </sub> 
            </div>
          </div>

      }
        </>
      ))}

 
    </div>
  )
}
