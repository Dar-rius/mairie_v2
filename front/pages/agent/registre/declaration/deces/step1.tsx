export default function Step1({change}){
    return<>
        <h1>Information concernant du defunt</h1>
        <form >
            <input type="text" placeholder="Annee" name="Annee" onChange={change} id="" />
            <input type="date" placeholder="Date de deces" name="dateDeces" onChange={change} id="" />
            <input type="text" placeholder="Heure de deces" name="heureDeces" onChange={change} id="" />
            <input type="text" placeholder="Lieu de deces" name="lieuDeces" onChange={change} id="" />
            <input type="text" placeholder="Formation sanitaire" name="formationSanitaire" onChange={change} id="" />
            <input type="text" placeholder="Prenom" name="prenom" onChange={change} id="" />
            <input type="text" placeholder="Nom" name="nom" onChange={change} id="" />
            <select name="sexe" id="" onChange={change}>
                <option value="" selected>Selectionner le sexe</option>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
            </select>
            <input type="date" placeholder="Date de naissance" name="dateNaissance" onChange={change} id="" />
            <input type="text" placeholder="Lieu de naissance" name="lieuNaissance" onChange={change} id="" />
            <input type="text" placeholder="Profession" name="profession" onChange={change} id="" />
            <input type="text" placeholder="Domicile" name="domicile" onChange={change} id="" />
            <input type="text" placeholder="Mari" name="mari" onChange={change} id="" />
        </form>
    </>
}

