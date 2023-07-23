import MultiStep from 'react-multistep'
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import Step4 from './step4'
import styles from '../../../../../styles/agents/forms.module.css'
import { useState } from 'react'
import { ObjectNaissance} from '../../structure'
import axios from 'axios'
import Header from '../../../../../components/header'

export default function Index(){
   const [data, setData] = useState(ObjectNaissance)
    
   const postData =()=>{
    axios.post("http://localhost:8000/api/declare-naissance", data)
        .then(res=>console.log(res.data))
        .catch(err=>console.error(err))
   }

    const handleChange =(e:any)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e:any)=>{
        e.preventDefault()
        console.log(data)
    }

    return<>
    <Header/>
    <main className={styles.main}>
        <MultiStep title={'Order Workflow'} 
                    activeStep={0}
                    showNavigation={false}>
            <Step1 change={handleChange} title='1'/>
            <Step2 change={handleChange} title="2"/>
            <Step3 change={handleChange} title='3'/>
            <Step4  change={handleChange} submit={handleSubmit} postData={postData} title='4'/>
        </MultiStep>
</main>
    </>
}
