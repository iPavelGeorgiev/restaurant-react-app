import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import bgVideo from "../../media/main-background.mp4";
import Link from "../../components/Link";
import styles from "./index.module.css";

const Main = () => {
    return (
        <div className={styles.container}>
            <Header />

            <video className={styles["video-bg"]} autoPlay loop muted>
                <source src={bgVideo} type="video/mp4" />
                    Your browser does not support the video tag
                </video>

            <article className={styles["main-content"]}>
                <h1> Only <br /> Quality <br /> Food </h1>
                <p> William Gladstone 36, 500 Sofia Center </p>
                <p> +359 99 999 9999 </p>
                <Link title="Our Menu" href="/menu" type="main" />
                <br />
                <Link title="Online Reservation" href="/reservation" type="main" />
            </article>

            <Footer />
        </div>
    )
}

export default Main;