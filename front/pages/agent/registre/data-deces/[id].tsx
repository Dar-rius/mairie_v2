import { GetServerSideProps } from "next";
import styles from "../../../../styles/agents/declaration.module.css";
import Header from "../../../../components/header";
import { TypeDeces } from "../structure";

export default function Registre({ data }: { data: TypeDeces }) {
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
            <p>Nom</p>
            <p>{data.nom}</p>
          </div>
          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Prenom</p>
            <p>{data.prenom}</p>
          </div>

          <div>
            <p>Date de deces</p>
            <p>{data.dateDeces}</p>
          </div>
          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Heure de deces</p>
            <p>{data.heureDeces}</p>
          </div>


          <div>
            <p>Lieu de deces</p>
            <p>{data.lieuDeces}</p>
          </div>
          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Sexe</p>
            <p>{data.sexe}</p>
          </div>
          <div >
            <p>Date de Naissance</p>
            <p>{data.dateNaissance}</p>
          </div>
          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Lieu de naissance</p>
            <p>{data.lieuNaissance}</p>
          </div>
          <div>
            <p>Mari</p>
            <p>{data.mari}</p>
          </div>
          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Domicile</p>
            <p>{data.domicile}</p>
          </div>
          <div>
            <p>Profession</p>
            <p>{data.profession}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Formation Sanitaire</p>
            <p>{data.formationSanitaire}</p>
          </div>
          <div>
            <p>Prenom du pere</p>
            <p>{data.prenomPere}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Nom du pere</p>
            <p>{data.prenomPere}</p>
          </div>
          <div>
            <p>Profession du pere</p>
            <p>{data.professionPere}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Domicile du pere</p>
            <p>{data.domicilePere}</p>
          </div>
          <div >
            <p>Prenom du mere</p>
            <p>{data.prenomMere}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Nom du mere</p>
            <p>{data.nomMere}</p>
          </div>
          <div>
            <p>Profession du mere</p>
            <p>{data.professionMere}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Domicile du mere</p>
            <p>{data.domicileMere}</p>
          </div>
          <div >
            <p>Nom du declarateur</p>
            <p>{data.nomDeclarant}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Prenom du declarateur</p>
            <p>{data.prenomDeclarateur}</p>
          </div>
          <div>
            <p>Adresse du declarateur</p>
            <p>{data.adresseDeclarateur}</p>
          </div>
          <div style={{"backgroundColor":"#F5F5F5"}}>
            <p>Profession du declarateur</p>
            <p>{data.professionDeclarateur}</p>
          </div>

          <div>
            <p>Numero d'identification</p>
            <p>{data.numeroIdentification}</p>
          </div>

          <div style={{"backgroundColor":"#F5F5F5", "borderRadius":"0px 0px 24px 24px"}}>
            <p>Date du jugement</p>
            <p>{data.jugeAutoDate}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`http://localhost:8000/api/deces/${id}`);
  const data: TypeDeces = await res.json();
  return { props: { data } };
};
