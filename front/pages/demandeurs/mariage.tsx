import axios from 'axios'
import { useState } from 'react'

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
    <main>
        <h2>Demande d'acte de <span>Mariage</span></h2>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" name="numeroDoc" onChange={handleChange} id="" />
                <input type="text" name="prenomEpoux" onChange={handleChange} id="" />
                <input type="text" name="nomEpoux"  onChange={handleChange} id="" />
                <input type="text" name="prenomEpouse" onChange={handleChange}  id="" />
                <input type="text" name="nomEpouse" onChange={handleChange}  id="" />
                <input type="date" name="dateDeclaration" onChange={handleChange}  id="" />
                <input type="text" name="dateLieuCelebration" onChange={handleChange}  id="" />
                <button type="submit" onClick={postData}>Soumettre</button>
            </form>
        </div>
    </main>
    </>
}