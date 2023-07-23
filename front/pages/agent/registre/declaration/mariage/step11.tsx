export default function Step11({change}){
    return<>
        <h1>Infos sur le 3eme temoin</h1>
        <form >
            <input type="text" placeholder="nom du temoin" name="temoinNom3" onChange={change} id="" />
            <input type="text" placeholder="Prenom du temoin" name="temoinPrenom3" onChange={change} id="" />
            <input type="number" placeholder="Indenfication du temoin" name="temoinNumId3" onChange={change} id="" />
        </form>
    </>
}