export default function Step3({change}){
    return<>
        <h1>Information concernant la mere</h1>
        <form >
            <input type="text" placeholder="Prenom du mere" name="prenomMere" onChange={change} id="" />
            <input type="text" placeholder="Nom du mere" name="nomMere" onChange={change} id="" />
            <input type="date" placeholder="Date de naissance" name="dateNaissanceMere" onChange={change} id="" />
            <input type="text" placeholder="Lieu de naissance" name="lieuNaissanceMere" onChange={change} id="" />
            <input type="text" placeholder="Profession" name="professionMere" onChange={change} id="" />
            <input type="text" placeholder="Domicile du mere" name="domicileMere" onChange={change} id="" />
        </form>
    </>
}