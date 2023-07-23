import styles from '../../../../../../styles/agents/forms.module.css'

export default function Step4({change, submit, postData}){
    return<>
        <h1>Autres information</h1>
        <form  onSubmit={submit}>
            <input type="text" placeholder="Prenom du declarateur" name="prenomDeclarateur" onChange={change} id="" />
            <input type="text" placeholder="Nom du declarateur" name="nomDeclarateur" onChange={change} id="" />
            <input type="text" placeholder="Adresse du declarateur" name="adresseDeclarateur" onChange={change} id="" />
            <input type="text" placeholder="Numero d'identification" name="numeroIdentification" onChange={change} id="" />
            <input type="text" placeholder="Numero du jugement" name="jugeAutoNumero" onChange={change} id="" />
            <input type="date" placeholder="date du jugement" name="jugeAutoDate" onChange={change} id="" />
            <div>
                <button onClick={postData} className={styles.btn}>Soumetre</button>
            </div>
        </form>
    </>
}