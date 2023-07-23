export default function Step5({change}){
    return<>
        <h1>Infos sur l'epouse</h1>
        <form >
            <input type="text" placeholder="Prenom de l'epouse" name="prenomEpouse" onChange={change} id="" />
            <input type="text" placeholder="Nom de l'epouse" name="nomEpouse" onChange={change} id="" />
            <input type="date" placeholder="Date de naissance" name="dateNaissanceEpouse" onChange={change} id="" />
            <input type="text" placeholder="Lieu de naissance" name="lieuNaissanceEpouse" onChange={change} id="" />
            <input type="text" placeholder="Profession" name="professionEpouse" onChange={change} id="" />
            <input type="text" placeholder="Domicile de l'epouse" name="domicileEpouse" onChange={change} id="" />
            <input type="text" placeholder="Residence de l'epouse" name="residenceEpouse" onChange={change} id="" />
            <input type="text" placeholder="Epoux" name="epoux" onChange={change} id="" />
        </form>
    </>
}