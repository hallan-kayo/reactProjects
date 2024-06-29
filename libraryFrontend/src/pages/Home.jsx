import Header from "../components/Header";
import SideBar from "../components/SideBar";
import styles from "./Home.module.css";
// import Section from "../components/Section";

const Home = () => {
  return (
    <div className={styles.main}>
      <div>
        <SideBar />
      </div>
      <div className={styles.content}>
        <Header title={"Home"} />
        {/* <Section /> */}
      </div>
    </div>
  );
};

export default Home;
