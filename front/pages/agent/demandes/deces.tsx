import axios from 'axios'
import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import { GetServerSideProps } from 'next'

export default function Deces({data}:{data:StructData[]}){
    return<>
        <main>
            <div>
                <h2>Demandes de deces</h2>
                <p>Traiter les differentes demandes</p>
               </div>

            <div>
            {data.map((item)=>(
                <ul key={item.id}>
                    <li >
                        <div>
                            <Image/>
                            <p>{item.numeroDoc}</p>
                            <p>{item.prenom} {item.nom}</p>
                            <Image/>
                        </div>
                    </li>
                </ul>
            ))}
                
            </div>
        </main>
    </>
}

type StructData={
    id:'',
    numeroDoc: 0,
    nom: '',
    prenom: ''
    }
 
export const getServerSideProps: GetServerSideProps = async() => {
    const res = await fetch('http://localhost:8000/api/liste-demande-deces')
    const data:StructData[]= await res.json()
    return{props:{data}}
}