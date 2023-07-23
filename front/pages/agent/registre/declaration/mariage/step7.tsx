export default function Step7({change}){
    return<>
        <h1>Infos sur la mere de l'epouse</h1>
        <form >
            <input type="text" placeholder="Prenom de la mere" name="prenomMereEpouse" onChange={change} id="" />
            <input type="text" placeholder="Nom de la mere" name="nomMere" onChange={change} id="" />
            <input type="date" placeholder="Date de naissance" name="dateNaissanceMereEpouse" onChange={change} id="" />
            <input type="text" placeholder="Lieu de naissance" name="lieuNaissanceMereEpouse" onChange={change} id="" />
            <input type="text" placeholder="Profession" name="professionMereEpouse" onChange={change} id="" />
            <input type="text" placeholder="Domicile" name="domicileMereEpouse" onChange={change} id="" />
        </form>
    </>
}