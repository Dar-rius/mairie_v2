export default function Step2({change}){
    return<>
        <h1>Infos sur l'epoux</h1>
        <form >
            <input type="text" placeholder="Prenom de l'epoux" name="prenomEpoux" onChange={change} id="" />
            <input type="text" placeholder="Nom de l'epoux" name="nomEpoux" onChange={change} id="" />
            <input type="date" placeholder="Date de naissance" name="dateNaissanceEpoux" onChange={change} id="" />
            <input type="text" placeholder="Lieu de naissance" name="lieuNaissanceEpoux" onChange={change} id="" />
            <input type="text" placeholder="Profession" name="professionEpoux" onChange={change} id="" />
            <input type="text" placeholder="Domicile de l'epoux" name="domicileEpoux" onChange={change} id="" />
            <input type="text" placeholder="Residence de l'epoux" name="residenceEpoux" onChange={change} id="" />
            <input type="text" placeholder="Epouse" name="epouse" onChange={change} id="" />
        </form>
    </>
}