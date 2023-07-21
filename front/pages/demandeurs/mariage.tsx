import axios from 'axios'
import { useState } from 'react'
import styles from '../../styles/demandeur/form.module.css' 
import Header from '../../components/header'
import Footer from '../../components/footer'

export default function Mariage(){
    const structData={
        numeroDoc:0,
        prenomEpoux:'',
        nomEpoux:'',
        prenomEpouse:'',
        nomEpouse:'',
        dateDeclaration:'',       
        dateLieuCelebration:'',
    }
    const [data, setData] = useState(structData)

    const postData= ()=>{
       axios.post('http://localhost:8000/api/demande-mariage', data)
        .then((res)=>{console.log(res.data)})
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
        <h1>Demande d'acte de <span>Mariage</span></h1>
        <div className={styles.element}>
            <form onSubmit={handleSubmit}>
                <input placeholder='Numero de document' type="number" name="numeroDoc" onChange={handleChange} id="" />
                <input placeholder="Prenom de l'epoux" type="text" name="prenomEpoux" onChange={handleChange} id="" />
                <input placeholder="Nom de l'epoux" type="text" name="nomEpoux"  onChange={handleChange} id="" />
                <input placeholder="Prenom de l'epouse" type="text" name="prenomEpouse" onChange={handleChange}  id="" />
                <input placeholder="Nom de l'epouse" type="text" name="nomEpouse" onChange={handleChange}  id="" />
                <input placeholder="Date de declaration" type="date" name="dateDeclaration" onChange={handleChange}  id="" />
                <input placeholder="Date et lieu de celebration" type="text" name="dateLieuCelebration" onChange={handleChange}  id="" />
                <div className={styles.sub}>
                    <button type="submit" onClick={postData}>Soumettre</button>
                </div>
            </form>
        </div>
    </main>
    <Footer/>
    </>
}