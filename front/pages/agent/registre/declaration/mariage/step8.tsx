export default function Step8({change, submit, postData}){
    return<>
        <h1>Autres information</h1>
        <form>
            <input type="text" placeholder="Declaration" name="declaration" onChange={change} id="" />
            <input type="text" placeholder="La Dote" name="dot" onChange={change} id="" />
            <input type="text" placeholder="Regime matrimonial" name="regimeMatrimonial" onChange={change} id="" />
            <input type="date" placeholder="Date de celebration" name="dateCelebration" onChange={change} id="" />
            <input type="text" placeholder="Lieu de celebration" name="lieuCelebration" onChange={change} id="" />
            <input type="text" placeholder="Numero de jugement" name="jugeAutoNumero" onChange={change} id="" />
            <input type="date" placeholder="date du jugement" name="jugeAutoDate" onChange={change} id="" />
        </form>
    </>
}