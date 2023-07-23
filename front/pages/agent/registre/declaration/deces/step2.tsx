export default function Step2({change}){
    return<>
        <h1>Information concernant le pere</h1>
        <form >
            <input type="text" placeholder="Prenom du pere" name="prenomPere" onChange={change} id="" />
            <input type="text" placeholder="Nom du pere" name="nomPere" onChange={change} id="" />
            <input type="text" placeholder="Profession" name="professionPere" onChange={change} id="" />
            <input type="text" placeholder="Domicile du pere" name="domicilePere" onChange={change} id="" />
        </form>
    </>
}