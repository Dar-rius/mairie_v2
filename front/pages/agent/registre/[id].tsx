import {useRouter} from 'next/router'
import axios from 'axios'
import { GetServerSideProps} from 'next'

export default function Registre({data}:{data:StructData}){

  return<>
    <main>
      <div>
        <p>Numero document</p>
        <p>{data.numeroDoc}</p>
      </div>
      
      <div>
        <p>Nom</p>
        <p>{data.nom}</p>
      </div>

      <div>
        <p>Prenom</p>
        <p>{data.prenom}</p>
      </div>
    </main>      
  </>
}

type StructData={
  numeroDoc:0,
  nom:'',
  prenom:''
}

export const getServerSideProps: GetServerSideProps = async(context) =>{
  const id = context.query
  const res = await fetch(`http://localhost/api/naissance/${id}`)
  const data:StructData = await res.json()
  return {props:{data}}
}