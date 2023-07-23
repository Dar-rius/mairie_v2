export default function Step1({change}){
    return<>
        <h1>Infos sur le mariage</h1>
        <form >
            <input type="text" placeholder="Annee" name="Annee" onChange={change} id="" />
            <input type="date" placeholder="Date de declaration" name="dateDeclaration" onChange={change} id="" />
            <input type="text" placeholder="Lieu du mariage" name="nom" onChange={change} id="" />
            <input type="text" placeholder="Devant" name="dateNaissance" onChange={change} id="" />
            <input type="text" placeholder="Officier d'etat" name="officierEtat" onChange={change} id="" />
        </form>
    </>
}

