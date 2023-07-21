import Image from 'next/image'
import {useRouter} from 'next/router'
import { GetServerSideProps } from 'next'
import Header from '../../components/header'
import styles from '../../styles/agents/dashboard.module.css'

export default function Dashboard({data}:{data:StructData}){
    const router = useRouter()
    console.log(data)
    return<>
    <Header/>
    <main className={styles.main}>
        <div>
            <div className={styles.sec1}>
                <div className={styles.demande}>
                    <div>Demandes a traiter</div>
                    <p>Visionner et traiter les differentes demandes</p>
                </div>
                <a href="" onClick={""}>
                    <Image src="/ajouter.png" width={40} height={40}/>                
                </a>
            </div>
            <div className={styles.cards}>
                <div className={styles.card} >
                    <Image src="/Icons/biberon-tetine.png" width={70} height={70}/>
                    <p className={styles.count}>{data.count_naiss}</p> 
                    <a className={styles.subCard} onClick={()=>router.push("demandes/naissance")}>
                       <p>Naissance</p>
                        <Image src={'/go.png'} width={25} height={25}/>
                    </a>
               </div>
                
                <div className={styles.card} >
                    <Image src="/Icons/tombeau.png" width={70} height={70}/>
                    <p className={styles.count} >{data.count_deces}</p>                    
                    <div>
                    <a className={styles.subCard} onClick={()=>router.push("demandes/deces")}>
                        <p>Deces</p>
                        <Image src={'/go.png'} width={25} height={25}/>
                    </a>
                    </div>
                </div>
                
                <div className={styles.card} >
                    <Image src="/Icons/anneaux.png" width={70} height={70}/>
                    <p className={styles.count}>{data.count_mariage}</p>                    
                    <div>
                    <a className={styles.subCard} onClick={()=>router.push("demandes/mariage")}>
                        <p>Mariage</p>
                        <Image src={'/go.png'} width={25} height={25}/>
                    </a>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.secondSec}>
            <div className={styles.declaration}>
                <div >Declarations</div>
                <p>Effectuer uen Declaration</p>
            </div>

            <div>
                <a onClick={()=>router.push("registre/naissance")}>
                    <Image src="/Icons/biberon-tetine.png" width={50} height={50}/>
                    <p>Naissance</p>
                </a>

                <a onClick={()=>router.push("registre/deces")}>
                    <Image src="/Icons/tombeau.png" width={50} height={50}/>
                    <p>Deces</p>
                </a>

                <a onClick={()=>router.push("registre/mariage")}>
                    <Image src="/Icons/anneaux.png" width={50} height={50}/>
                    <p>Mariage</p>
                </a>
            </div>
        </div>
    </main>
    </>
}

type StructData = {
        count_naiss:0,
        count_deces:0,
        count_mariage:0
    }
 
export const getServerSideProps: GetServerSideProps = async() => {
    const res = await fetch('http://localhost:8000/api/dashboard')
    const data:StructData= await res.json()
    return{props:{data}}
}