import { GetServerSideProps } from "next";
import styles from "../../../../styles/agents/declaration.module.css";
import Header from "../../../../components/header";
import { TypeNaissance } from "../structure";

export default function Registre({ data }: { data: StructData }) {
  console.log(data);
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div>
          <h1>Infomations du registre No {data.numeroDoc}</h1>
        </div>
        <div className={styles.data}>
          <div>
            <p>Numero document</p>
            <p>{data.numeroDoc}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Annee</p>
            <p>{data.Annee}</p>
          </div>

          <div>
            <p>Date de declaration</p>
            <p>{data.dateDeclaration}</p>
          </div>
          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Lieu de  mariage</p>
            <p>{data.lieuMariage}</p>
          </div>

          <div>
            <p>Devant</p>
            <p>{data.devant}</p>
          </div>
          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Officier d'etat</p>
            <p>{data.officierEtat}</p>
          </div>


          <div>
            <p>Prenom de l'epoux</p>
            <p>{data.prenomEpoux}</p>
          </div>
          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Nom de l'epoux</p>
            <p>{data.nomEpoux}</p>
          </div>
          <div >
            <p>Date de Naissance de l'epoux</p>
            <p>{data.dateNaissEpoux}</p>
          </div>
          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Lieu de naissance de l'epoux</p>
            <p>{data.lieuNaissEpoux}</p>
          </div>
          <div>
            <p>Profession de l'epoux</p>
            <p>{data.professionEpoux}</p>
          </div>
          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Domicile de l'epoux</p>
            <p>{data.domicileEpoux}</p>
          </div>
          <div>
            <p>Profession de l'epoux</p>
            <p>{data.professionEpoux}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Domicile de l'epoux</p>
            <p>{data.domicileEpoux}</p>
          </div>
          <div>
            <p>Residence de l'epoux </p>
            <p>{data.residenceEpoux}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Epouse</p>
            <p>{data.epouse}</p>
          </div>
          <div>
            <p>Prenom du pere de l'epoux </p>
            <p>{data.prenomPereEpoux}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Nom du pere de l'epoux</p>
            <p>{data.nomPereEpoux}</p>
          </div>
          <div>
            <p>Date de naissance du pere de l'epoux</p>
            <p>{data.dateNaissPereEpoux}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Lieu de naissance du pere de l'epoux</p>
            <p>{data.lieuNaissMereEpoux}</p>
          </div>
          <div>
            <p>Profession du pere de l'epoux</p>
            <p>{data.professionPereEpoux}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Domicile du pere de l'epoux</p>
            <p>{data.domicilePereEpoux}</p>
          </div>

          <div>
            <p>Prenom du mere de l'epoux </p>
            <p>{data.prenomMereEpoux}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Nom du mere de l'epoux</p>
            <p>{data.nomMereEpoux}</p>
          </div>
          <div>
            <p>Date de naissance du mere de l'epoux</p>
            <p>{data.dateNaissMereEpoux}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Lieu de naissance du mere de l'epoux</p>
            <p>{data.lieuNaissMereEpoux}</p>
          </div>
          <div>
            <p>Profession du mere de l'epoux</p>
            <p>{data.professionMereEpoux}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Domicile du mere de l'epoux</p>
            <p>{data.domicileMereEpoux}</p>
          </div>

          <div>
            <p>Prenom de l'epouse</p>
            <p>{data.prenomEpouse}</p>
          </div>
          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Nom de l'epouse</p>
            <p>{data.nomEpouse}</p>
          </div>
          <div >
            <p>Date de Naissance de l'epouse</p>
            <p>{data.dateNaissEpouse}</p>
          </div>
          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Lieu de naissance de l'epouse</p>
            <p>{data.lieuNaissEpouse}</p>
          </div>
          <div>
            <p>Profession epouse</p>
            <p>{data.professionEpouse}</p>
          </div>
          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Domicile de l'epouse</p>
            <p>{data.domicileEpouse}</p>
          </div>
          <div>
            <p>Profession de l'epouse</p>
            <p>{data.professionEpouse}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Domicile de l'epouse</p>
            <p>{data.domicileEpouse}</p>
          </div>
          <div>
            <p>Residence de l'epouse</p>
            <p>{data.residenceEpouse}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Epoux</p>
            <p>{data.epoux}</p>
          </div>
          <div>
            <p>Prenom du pere de l'epouse </p>
            <p>{data.prenomPereEpouse}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Nom du pere de l'epouse</p>
            <p>{data.nomPereEpouse}</p>
          </div>
          <div>
            <p>Date de naissance du pere de l'epouse</p>
            <p>{data.dateNaissPereEpouse}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Lieu de naissance du pere de l'epouse</p>
            <p>{data.lieuNaissMereEpouse}</p>
          </div>
          <div>
            <p>Profession du pere de l'epouse</p>
            <p>{data.professionPereEpouse}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Domicile du pere de l'epouse</p>
            <p>{data.domicilePereEpouse}</p>
          </div>

          <div>
            <p>Prenom du mere de l'epouse</p>
            <p>{data.prenomMereEpouse}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Nom du mere de l'epouse</p>
            <p>{data.nomMereEpouse}</p>
          </div>
          <div>
            <p>Date de naissance du mere de l'epouse</p>
            <p>{data.dateNaissMereEpouse}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Lieu de naissance du mere de l'epouse</p>
            <p>{data.lieuNaissMereEpouse}</p>
          </div>
          <div>
            <p>Profession du mere de l'epouse</p>
            <p>{data.professionMereEpouse}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Domicile du mere de l'epouse</p>
            <p>{data.domicileMereEpouse}</p>
          </div>

          <div >
            <p>Declaration</p>
            <p>{data.declaration}</p>
          </div>
          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>La dote</p>
            <p>{data.dot}</p>
          </div>
          <div>
            <p>Regime matrimonial</p>
            <p>{data.regimeMatrimonial}</p>
          </div>
          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Date de celebration</p>
            <p>{data.dateCelebration}</p>
          </div>

          <div>
            <p>Lieu de celebration</p>
            <p>{data.lieuCelebration}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Numero du jugement</p>
            <p>{data.jugeAutoNumero}</p>
          </div>
          <div>
            <p>Date du jugement</p>
            <p>{data.jugeAutoDate}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Prenom du temoin </p>
            <p>{data.temoinPrenom1}</p>
          </div>

          <div>
            <p>Nom du temoin</p>
            <p>{data.temoinNom1}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Numero d'identification du temoin</p>
            <p>{data.temoinNumId1}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Prenom du temoin </p>
            <p>{data.temoinPrenom2}</p>
          </div>

          <div>
            <p>Nom du temoin</p>
            <p>{data.temoinNom2}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Numero d'identification du temoin</p>
            <p>{data.temoinNumId2}</p>
            </div>

            <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Prenom du temoin </p>
            <p>{data.temoinPrenom3}</p>
          </div>

          <div>
            <p>Nom du temoin</p>
            <p>{data.temoinNom3}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Numero d'identification du temoin</p>
            <p>{data.temoinNumId3}</p>
            </div>

            <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Prenom du temoin </p>
            <p>{data.temoinPrenom4}</p>
          </div>

          <div>
            <p>Nom du temoin</p>
            <p>{data.temoinNom4}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5", "borderRadius":"0px 0px 24px 24px"}}>
            <p>Numero d'identification du temoin</p>
            <p>{data.temoinNumId4}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`http://localhost:8000/api/mariage/${id}`);
  const data: TypeNaissance = await res.json();
  return { props: { data } };
};