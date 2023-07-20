import axios from 'axios'
import { useState } from 'react'

export default function Naissance(){
    const structData = {
        numeroDoc:0,
        name:'',
        prenom:''
    }

    const postData=()=>{
        axios.post('http://localhost:8000/api/declare-mariage', 
        data).then((res)=>console.log(res.data))
            .catch((err)=>console.error(err))
    }

    const [data, setData] = useState(structData)

    const handleChange = (e:any) =>{
        setData({...data, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e:any) =>{
        e.preventDefault()
    }
    return<>
        <main>
            <div>
                <h2>Declaration de <span>Mariage</span></h2>
            </div>

            <form onSubmit={handleSubmit}>
                <input type="number" name='numeroDoc' onChange={handleChange} />
                <input type="text" name='nomEpoux' onChange={handleChange}/>
                <input type="text" name='prenomEpoux' onChange={handleChange}/>
                <button onClick={postData}>Soummettre</button>
            </form> 
        </main>
    </>
}