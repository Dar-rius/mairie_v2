import Image from 'next/image'
import {useRouter} from 'next/router'
import { GetServerSideProps } from 'next'

export default function Dashboard({data}:{data:StructData}){
    const router = useRouter()
    console.log(data)
    return<>
    <main>
        <div>
            <div>
                <h2>Demandes a traiter</h2>
                <p>Visionner et traiter les differentes demandes</p>
            </div>
            <div>
                <div onClick={()=>router.push("demandes/naissance")}>
                    <Image />
                    <p>{data.count_naiss}</p> 
                    <p>Naissance</p>
                    <Image />
                </div>
                
                <div onClick={()=>router.push("demandes/deces")}>
                    <Image />
                    <p>{data.count_deces}</p>                    
                    <p>Deces</p>
                    <Image />
                </div>
                
                <div onClick={()=>router.push("demandes/mariage")}>
                    <Image />
                    <p>{data.count_mariage}</p>                    
                    <p>Mariage</p>
                    <Image />
                </div>
            </div>
        </div>

        <div>
            <div>
                <h2>Declarations</h2>
                <p>Effectuer uen Declaration</p>
            </div>

            <div>
                <div onClick={()=>router.push("registre/naissance")}>
                    <Image/>
                    <p>Naissance</p>
                </div>

                <div onClick={()=>router.push("registre/deces")}>
                    <Image/>
                    <p>Deces</p>
                </div>

                <div onClick={()=>router.push("registre/mariage")}>
                    <Image/>
                    <p>Mariage</p>
                </div>
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