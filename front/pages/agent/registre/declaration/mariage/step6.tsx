export default function Step6({change}){
    return<>
        <h1>Infos sur le pere de l'epouse</h1>
        <form >
            <input type="text" placeholder="Prenom du pere" name="prenomPereEpouse" onChange={change} id="" />
            <input type="text" placeholder="Nom du pere" name="nomPere" onChange={change} id="" />
            <input type="date" placeholder="Date de naissance" name="dateNaissancePereEpouse" onChange={change} id="" />
            <input type="text" placeholder="Lieu de naissance" name="lieuNaissancePereEpouse" onChange={change} id="" />
            <input type="text" placeholder="Profession" name="professionPereEpouse" onChange={change} id="" />
            <input type="text" placeholder="Domicile" name="domicilePereEpouse" onChange={change} id="" />
        </form>
    </>
}