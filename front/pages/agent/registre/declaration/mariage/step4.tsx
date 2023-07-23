export default function Step4({change}){
    return<>
        <h1>Infos sur la mere de l'epoux</h1>
        <form >
            <input type="text" placeholder="Prenom de la mere" name="prenomMereEpoux" onChange={change} id="" />
            <input type="text" placeholder="Nom de la mere" name="nomMere" onChange={change} id="" />
            <input type="date" placeholder="Date de naissance" name="dateNaissanceMereEpoux" onChange={change} id="" />
            <input type="text" placeholder="Lieu de naissance" name="lieuNaissanceMereEpoux" onChange={change} id="" />
            <input type="text" placeholder="Profession" name="professionMereEpoux" onChange={change} id="" />
            <input type="text" placeholder="Domicile" name="domicileMereEpoux" onChange={change} id="" />
        </form>
    </>
}