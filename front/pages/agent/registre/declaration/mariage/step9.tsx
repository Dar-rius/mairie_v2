export default function Step9({change}){
    return<>
        <h1>Infos sur le 1er temoin</h1>
        <form >
            <input type="text" placeholder="nom du temoin" name="temoinNom1" onChange={change} id="" />
            <input type="text" placeholder="Prenom du temoin" name="temoinPrenom1" onChange={change} id="" />
            <input type="number" placeholder="Indenfication du temoin" name="temoinNumId1" onChange={change} id="" />
        </form>
    </>
}