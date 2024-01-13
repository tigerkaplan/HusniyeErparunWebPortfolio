import { getImageUrl } from "../../utils";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Husniye </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A cupiditate,
          ipsum sunt, beatae aut voluptatibus quis iusto impedit illo velit
          rerum fugiat eos reprehenderit? Quas modi beatae laboriosam rem
          dolorum.
        </p>
        <a href="mailto:my@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("../home/hero.png")} alt="Her" className={styles.heroImg} />
      <div className={styles.topBlur}/> 
      <div className={styles.bottomBlur}/> 



    </section>
  );
};
