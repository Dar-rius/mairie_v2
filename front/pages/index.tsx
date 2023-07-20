import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter} from "next/router";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  const router = useRouter()
  return <div>
    <Header/>
    <div>
      <h2>
        Parce que vous le <span>valez</span> bien!
      </h2>
      <p>
      Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. 
      </p>
      <button>Commecez</button>
    </div>
    <hr/>
    <div>
      <h2>Faites vos demandes</h2>
      <div>
        <div>
         <Image />
         <p>Acte de Naissance</p> 
         <button onClick={()=>router.push('/demandeurs/naissance')}>Demarrer</button>
        </div>

        <div>
         <Image />
         <p>Acte de Deces</p> 
         <button onClick={()=>router.push('/demandeurs/deces')}>Demarrer</button>
        </div>

        <div>
         <Image />
         <p>Acte de Mariage</p> 
         <button onClick={()=>router.push('/demandeurs/mariage')}>Demarrer</button>
        </div>
      </div>
    </div>
    <Footer/>
  </div>;
}
