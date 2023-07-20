import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter} from "next/router";
import Header from "../components/header";
import Footer from "../components/footer";
import Spline from '@splinetool/react-spline';

export default function Home() {
  const router = useRouter()

  return <div className={styles.page}>
    <Header/>
    <div className={styles.home}>
      <div className={styles.name1}>
        <div className={styles.title2}>
          Parce que vous le <span>valez</span> bien!
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing 
          and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. 
        </p>
        <a href="" className={styles.button}>Commencez !</a>  
      </div>
      
      <div id="canvas3d">
      <Spline scene='https://prod.spline.design/eCHEGykxgYjB1qHQ/scene.splinecode'/>
      </div>
    </div>

    <div className={styles.secondPart}>
      <p className={styles.title3}>Faites vos demandes</p>
      <div className={styles.acte}>
        <div>
         <Image src="/Icons/biberon-tetine.png" width={70} height={70}/>
         <p>Acte de Naissance</p> 
         <button onClick={()=>router.push('/demandeurs/naissance')}>Demarrer</button>
        </div>

        <div>
         <Image src="/Icons/tombeau.png" width={70} height={70}/>
         <p> Acte de Deces </p> 
         <button onClick={()=>router.push('/demandeurs/deces')}>Demarrer</button>
        </div>

        <div>
         <Image src="/Icons/anneaux.png" width={70} height={70} />
         <p>Acte de Mariage</p> 
         <button onClick={()=>router.push('/demandeurs/mariage')}>Demarrer</button>
        </div>
      </div>
    </div>
    <Footer/>
  </div>;
}
