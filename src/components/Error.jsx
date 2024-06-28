import React from "react";
import styles from "../styles/Error.module.css";
const Error = ({ text }) => <h2 className={styles.title}>{text}</h2>;
export default Error;