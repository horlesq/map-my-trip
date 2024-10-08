import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export function Logo() {
    return (
        <Link to="/">
            <img src="/logo.png" alt="MapMyTrip logo" className={styles.logo} />
        </Link>
    );
}
