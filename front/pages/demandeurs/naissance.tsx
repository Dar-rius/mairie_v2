import axios from "axios"
import { useState } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import styles from '../../styles/demandeur/form.module.css' 
import { useRouter} from "next/router"

export default function Naissance(){
    const router = useRouter()
    const structData={
        numeroDoc:0,
        prenom:'',
        nom:'',
        prenomPere:'',
        nomPere:'',
        prenomMere:'',       
        nomMere:'',
    }
    const [data, setData] = useState(structData)

    const postData= ()=>{
       axios.post('http://localhost:8000/api/demande-naissance', data)
        .then((res)=>{console.log(res.data)
        router.push("/")})
        .catch((err)=>console.error(err))
    }
    
    const handleChange=(e:any)=>{
        setData({...data, [e.target.name]:e.target.value,})
    }

    const handleSubmit =(e:any)=>{
        e.preventDefault()
    }

    return<>
    <Header/>
    <main className={styles.main}>
        <h1>Demande d'acte de <span>Naissance</span></h1>
        <div className={styles.element}>
            <form onSubmit={handleSubmit}>
                <input placeholder="Numero de document" type="number" name="numeroDoc" onChange={handleChange} id="" />
                <input placeholder="Prenom"type="text" name="prenom" onChange={handleChange} id="" />
                <input placeholder="Nom"type="text" name="nom"  onChange={handleChange} id="" />
                <input placeholder="Prenom du pere"type="text" name="prenomPere" onChange={handleChange}  id="" />
                <input placeholder="Nom du pere"type="text" name="nomPere" onChange={handleChange}  id="" />
                <input placeholder="Prenom de la mere" type="text" name="prenomMere" onChange={handleChange}  id="" />
                <input placeholder="Nom de la mere" type="text" name="nomMere" onChange={handleChange}  id="" />
                <div className={styles.sub}>
                    <button type="submit" onClick={postData}>Soumettre</button>
                </div>
            </form>
        </div>
    </main>
    <Footer/>
    </>
}