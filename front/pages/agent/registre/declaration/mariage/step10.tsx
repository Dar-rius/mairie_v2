export default function Step9({change}){
    return<>
        <h1>Infos sur le 2eme temoin</h1>
        <form >
            <input type="text" placeholder="nom du temoin" name="temoinNom2" onChange={change} id="" />
            <input type="text" placeholder="Prenom du temoin" name="temoinPrenom2" onChange={change} id="" />
            <input type="number" placeholder="Indenfication du temoin" name="temoinNumId2" onChange={change} id="" />
        </form>
    </>
}