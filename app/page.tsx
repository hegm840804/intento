'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import tona from './tona.module.css';
import { Container } from 'postcss';


export default function Home() {
  return (
    <main>
      <div className={tona.enca}>
        <h1 className={tona.head}>Lo que la gente opina</h1>
        <h2 className={tona.shead}>Sus comentarios son muy importante para nosotros</h2>
      </div>
      <div className={tona.comentarios}>
        <span className={tona.coment}>
          <p className={tona.titcom}>bueno</p>
          <p className={tona.txtcom}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, dolore.</p>
          <p className={tona.autcom}>Lorem ipsum dolor sit.</p>
        </span>
        <span className={tona.coment}>
          <p className={tona.titcom}>bueno</p>
          <p className={tona.txtcom}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, impedit numquam distinctio magni, tempora perferendis obcaecati ad quas vero officia non eligendi saepe nemo possimus.</p>
          <p className={tona.autcom}>Lorem ipsum dolor sit.</p>
        </span>
        <span className={tona.coment}>
          <p className={tona.titcom}>bueno</p>
          <p className={tona.txtcom}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rem veritatis possimus, a quibusdam maxime, earum autem, non aut est obcaecati reprehenderit doloremque dolore sapiente quo nulla natus! Culpa vitae similique vel, earum quod sed nemo magnam praesentium commodi at.</p>
          <p className={tona.autcom}>Lorem ipsum dolor sit.</p>
        </span>
        <span className={tona.coment}>
          <p className={tona.titcom}>bueno</p>
          <p className={tona.txtcom}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid optio placeat voluptates accusamus ab sequi deserunt odit nulla nam? Animi voluptatem praesentium delectus quas, recusandae quo. Eum illo minima fugiat?</p>
          <p className={tona.autcom}>Lorem ipsum dolor sit.</p>
        </span>
        <span className={tona.coment}>
          <p className={tona.titcom}>bueno</p>
          <p className={tona.txtcom}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, dolore.</p>
          <p className={tona.autcom}>Lorem ipsum dolor sit.</p>
        </span>
        <span className={tona.coment}>
          <p className={tona.titcom}>bueno</p>
          <p className={tona.txtcom}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur minus dicta perspiciatis accusamus, illum expedita minima molestias amet optio dolor, consequuntur maxime.</p>
          <p className={tona.autcom}>Lorem ipsum dolor sit.</p>
        </span>
      </div>
      <div className={tona.update}>
        <p className={tona.updhead}>Novedades</p>
        <p className={tona.updshead}>No te pierdas nuestras novedades y unete a nuestros amigos para que sepas todo lo que hacemos</p>
        <center>
          <section className={tona.fotm}>
            <input type="email" className={tona.correo} id="correo" placeholder="Escriba su correo" />
            <input type="submit" className={tona.alta} value="Registrarse" />            
          </section>
          <p className={tona.updpie}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sint harum doloribus, obcaecati accusantium cumque!</p>
          <Image src="./next.svg.png" className={tona.updimg} fluid />
        </center>  
      </div>
      <div className={tona.spie}>
        <span className={tona.as1}>
          <Image src="./tona.png" className={tona.pieimg} fluid />
          <p className={tona.txtpie}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo eaque ipsum ullam doloribus odit reprehenderit facilis perspiciatis atque aspernatur!</p>
          <a href="#" className={tona.vin1}>Vinculo 1</a>
        </span>
        <span className={tona.as1}>
          <p className={tona.txtpie}>Lorem, ipsum dolor.</p>
          <a href="#" className={tona.vin2}>Vinculo 1</a>
          <a href="#" className={tona.vin2}>Vinculo 1</a>
          <a href="#" className={tona.vin2}>Vinculo 1</a>
          <a href="#" className={tona.vin2}>Vinculo 1</a>
        </span>
        <span className={tona.as1}>
          <p className={tona.txtpie}>Lorem, ipsum dolor.</p>
          <a href="#" className={tona.vin3}>Vinculo 1</a>
          <a href="#" className={tona.vin3}>Vinculo 1</a>
          <a href="#" className={tona.vin3}>Vinculo 1</a>
          <a href="#" className={tona.vin3}>Vinculo 1</a>
          <a href="#" className={tona.vin3}>Vinculo 1</a>
          <a href="#" className={tona.vin3}>Vinculo 1</a>
          <a href="#" className={tona.vin3}>Vinculo 1</a>
        </span>
        <span className={tona.as1}>
          <p className={tona.txtpie}>Lorem, ipsum dolor.</p>
          <a href="#" className={tona.vin2}>Vinculo 1</a>
          <a href="#" className={tona.vin2}>Vinculo 1</a>
          <a href="#" className={tona.vin2}>Vinculo 1</a>
          <p className={tona.txtpie1}>Buscar</p>
          <section className={tona.fotm}>
            <input type="email" className={tona.buscar} id="correo" placeholder="Que desea Buscar" />
            <input type="submit" className={tona.search} value="Buscar" />            
          </section>
        </span>
      </div>
      <div className={tona.fpie}>
        <span className={tona.ads1}>
        <p className={tona.stpie}>Lorem ipsum dolor sit amet consectetur. | <a href="#" className={tona.fvin}>Vinculo 1</a> | <a href="#" className={tona.fvin}>Vinculo 2</a></p>
        </span>
        <span className={tona.ads2}>
          <Image src="./logo1.png" className={tona.fimg} fluid />
          <Image src="./logo2.png" className={tona.fimg} fluid />
          <Image src="./logo3.png" className={tona.fimg} fluid />
          <Image src="./logo4.png" className={tona.fimg} fluid />
          <Image src="./logo5.png" className={tona.fimg} fluid />
          <Image src="./logo6.png" className={tona.fimg} fluid />
        </span>
      </div>
    </main>
  )
}
