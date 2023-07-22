import { GetServerSideProps } from "next";
import styles from "../../../styles/agents/declaration.module.css";
import Header from "../../../components/header";

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

          <div>
            <p>Nom</p>
            <p>{data.nom}</p>
          </div>

          <div>
            <p>Prenom</p>
            <p>{data.prenom}</p>
          </div>
        </div>
      </main>
    </>
  );
}

type StructData = {
  numeroDoc: 0;
  nom: "";
  prenom: "";
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`http://localhost:8000/api/naissance/${id}`);
  const data: StructData = await res.json();
  return { props: { data } };
};
