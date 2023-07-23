import MultiStep from 'react-multistep'
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import Step4 from './step4'
import Step5 from './step5'
import Step6 from './step6'
import Step7 from './step7'
import Step8 from './step8'
import Step9 from './step9'
import Step10 from './step10'
import Step11 from './step11'
import Step12 from './step12'
import styles from '../../../../../styles/agents/forms.module.css'
import { useState } from 'react'
import { ObjectDeces} from '../../structure'
import axios from 'axios'
import Header from '../../../../../components/header'


export default function Index(){
   const [data, setData] = useState(ObjectDeces)
    
   const postData =()=>{
    axios.post("http://localhost:8000/api/declare-mariage", data)
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
            <Step4 change={handleChange} title='4'/>
            <Step5 change={handleChange} title="5"/>
            <Step6 change={handleChange} title='6'/>
            <Step7 change={handleChange} title='7'/>
            <Step8 change={handleChange} title="8"/>
            <Step9 change={handleChange} title='9'/>
            <Step10 change={handleChange} title="10"/>
            <Step11 change={handleChange} title='11'/>
            <Step12  change={handleChange} submit={handleSubmit} postData={postData} title='12'/>
        </MultiStep>
</main>
    </>
}
