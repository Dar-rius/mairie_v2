import axios from 'axios'
import {useState} from 'react'

export default function Deces(){
    const structData={
        numeroDoc:0,
        prenom:'',
        nom:'',
        dateHeureDeces:Date,
        nomPere:'',
        prenomPere:'',
        nomMere:'',
        prenomMere:'',       
    }
    const [data, setData] = useState(structData)

    const postData= ()=>{
       axios.post('http://localhost:8000/api/demande-deces', data)
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
        <h2>Demande d'acte de <span>Deces</span></h2>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" name="numeroDoc" onChange={handleChange} id="" />
                <input type="text" name="prenom" onChange={handleChange} id="" />
                <input type="text" name="nom"  onChange={handleChange} id="" />
                <input type="date" name="dateHeureDeces"  onChange={handleChange} id="" />
                <input type="text" name="prenomPere" onChange={handleChange}  id="" />
                <input type="text" name="nomPere" onChange={handleChange}  id="" />
                <input type="text" name="prenomMere" onChange={handleChange}  id="" />
                <input type="text" name="nomMere" onChange={handleChange}  id="" />
                <button type="submit" onClick={postData}>Soumettre</button>
            </form>
        </div>
    </main>
    </>
  
}