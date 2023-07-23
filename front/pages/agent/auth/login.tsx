import axios from "axios";
import { useState } from "react";
import styles from '../../../styles/agents/auth.module.css'
import Header from "../../../components/header";

export default function Login(){
    return<>
        <Header/>
        <main className={styles.main}>
            <p>Administrateur</p>
            
            <div className={styles.contentForm}>
                <h1>Connexion</h1>
                <form  className={styles.forms}>
                    <input type="email" name="Email" placeholder="Email"/>
                    <input type="text" name="password" placeholder="password" />
                    <div>
                        <button type="submit">Se connecter</button>
                    </div>
                </form>
            </div>
        </main>
    </>
}
