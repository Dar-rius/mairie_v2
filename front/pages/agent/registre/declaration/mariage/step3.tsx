export default function Step3({change}){
    return<>
        <h1>Infos sur le pere de l'epoux</h1>
        <form >
            <input type="text" placeholder="Prenom du pere" name="prenomPereEpoux" onChange={change} id="" />
            <input type="text" placeholder="Nom du pere" name="nomPere" onChange={change} id="" />
            <input type="date" placeholder="Date de naissance" name="dateNaissancePereEpoux" onChange={change} id="" />
            <input type="text" placeholder="Lieu de naissance" name="lieuNaissancePereEpoux" onChange={change} id="" />
            <input type="text" placeholder="Profession" name="professionPereEpoux" onChange={change} id="" />
            <input type="text" placeholder="Domicile" name="domicilePereEpoux" onChange={change} id="" />
        </form>
    </>
}