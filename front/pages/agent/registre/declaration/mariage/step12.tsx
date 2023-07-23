import styles from '../../../../../styles/agents/forms.module.css'

export default function Step12({change, submit, postData}){
    return<>
        <h1>Infos sur le 4eme temoin</h1>
        <form onSubmit={submit}>
            <input type="text" placeholder="nom du temoin" name="temoinNom4" onChange={change} id="" />
            <input type="text" placeholder="Prenom du temoin" name="temoinPrenom4" onChange={change} id="" />
            <input type="number" placeholder="Indenfication du temoin" name="temoinNumId4" onChange={change} id="" />            
            <div>
                <button onClick={postData} className={styles.btn}>Soumetre</button>
            </div>
        </form>
    </>
}