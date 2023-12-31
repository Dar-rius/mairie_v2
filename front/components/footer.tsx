import Image from "next/image"
import styles from '../styles/components/Footer.module.css'

export default function Footer(){
    return<footer className={styles.footer}>
    <div style={{"paddingTop":"1.4%"}}>
     <svg xmlns="http://www.w3.org/2000/svg" width="87" height="35" viewBox="0 0 87 35" fill="none">
        <g clip-path="url(#clip0_92_349)">
            <path d="M20.651 0C17.2534 0 13.9951 1.41173 11.5926 3.92462L3.75211 12.1256C1.34967 14.6385 0 18.0467 0 21.6005C0 29.0009 5.73546 35 12.8105 35C16.2081 35 19.4665 33.5882 21.8689 31.0753L27.2922 25.4027C27.2922 25.4025 27.2923 25.4028 27.2922 25.4027L43.094 8.87437C44.2414 7.67423 45.7976 7 47.4202 7C50.1369 7 52.44 8.85198 53.2385 11.4147L58.2255 6.19845C55.9505 2.4714 51.9613 0 47.4202 0C44.0227 0 40.7643 1.41173 38.3619 3.92462L17.1368 26.1256C15.9894 27.3258 14.4332 28 12.8105 28C9.43151 28 6.69231 25.1349 6.69231 21.6005C6.69231 19.9032 7.3369 18.2755 8.48428 17.0753L16.3248 8.87437C17.4722 7.67423 19.0283 7 20.651 7C23.3678 7 25.6708 8.85206 26.4693 11.4149L31.4564 6.19858C29.1814 2.47147 25.1922 0 20.651 0Z" fill="url(#paint0_linear_92_349)"/>
            <path d="M43.906 26.1256C42.7586 27.3258 41.2024 28 39.5797 28C36.8634 28 34.5605 26.1485 33.7618 23.5861L28.7749 28.8023C31.0501 32.5289 35.039 35 39.5797 35C42.9773 35 46.2357 33.5882 48.6381 31.0753L69.8632 8.87437C71.0106 7.67423 72.5668 7 74.1895 7C77.5685 7 80.3077 9.86515 80.3077 13.3995C80.3077 15.0968 79.6631 16.7245 78.5157 17.9247L70.6752 26.1256C69.5278 27.3258 67.9716 28 66.349 28C63.6325 28 61.3294 26.1481 60.5308 23.5856L55.5439 28.8018C57.819 32.5288 61.808 35 66.349 35C69.7465 35 73.0049 33.5882 75.4073 31.0753L83.2478 22.8744C85.6503 20.3615 87 16.9533 87 13.3995C87 5.99916 81.2646 0 74.1895 0C70.7919 0 67.5335 1.41173 65.1311 3.92462L43.906 26.1256Z" fill="white"/>
        </g>
        <defs>
            <linearGradient id="paint0_linear_92_349" x1="29.1128" y1="0" x2="29.1128" y2="35" gradientUnits="userSpaceOnUse">
                <stop stop-color="#A200FF"/>
                <stop offset="1" stop-color="#ED0B5C"/>
            </linearGradient>
            <clipPath id="clip0_92_349">
                <rect width="87" height="35" fill="white"/>
            </clipPath>
        </defs>
    </svg>
    </div>
    <div className={styles.sec}>
        <h3 className={styles.title3}> <span>Le proj</span>et</h3>
        <div className={styles.line}></div>
        <a href="" style={{"marginBottom":"15%"}}>E-citizenSn</a>
        <a href="" style={{"marginBottom":"15%"}}>UCAO - ST Michel</a>
    </div>

    <div className={styles.sec}>
        <h3 className={styles.title3}> <span>Nos lie</span>ns</h3>
        <a href="" style={{"paddingBottom":"15%"}}>Acte de naissance</a>
        <a href="" style={{"paddingBottom":"15%"}}>Acte de Deces</a>
        <a href="" style={{"paddingBottom":"15%"}}>Acte de Mariage</a>
    </div>

    <div className={styles.secUtile}>
        <h3 className={styles.title3}><span>Liens u</span>tiles</h3>
        <div className={styles.icons}>
        <a href="">
            <Image src="/icons/github.png" 
            width={35}
            height={35}
            />
        </a>

        <a href="">
            <Image src="/icons/twitter.png"
            width={35}
            height={35}
            />
        </a>

        <a href="">
            <Image src="/icons/senegal.png"
            width={35}
            height={35}
            />
        </a>    
        </div>
        
    </div>
    </footer>
}