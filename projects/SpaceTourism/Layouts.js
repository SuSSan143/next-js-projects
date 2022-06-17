import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "/styles/SpaceTourisms.module.scss";
import { isMobileOnly } from "react-device-detect";

const MainLayout = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const router = useRouter();
  const openDrawerHandler = () => {
    setOpenDrawer(true);
  };
  const closeDrawerHandler = () => {
    setOpenDrawer(false);
  };
  return (
    <>
      <div className={styles.main_navbar}>
        <Image
          src="/assets/spaceTourisms/shared/logo.svg"
          height={isMobileOnly ? 35 : 50}
          width={isMobileOnly ? 35 : 50}
          alt="logo"
        />
        <nav className={styles.nav_container}>
          <Link href="/space-tourisms/">
            <a
              className={`${styles.main_nav_link} ${
                router.asPath === "/space-tourisms"
                  ? styles.active_main_nav_link
                  : ""
              }`}
            >
              <span className={styles.category_number}>00</span> Home
            </a>
          </Link>
          <Link href="/space-tourisms/destination/moon">
            <a
              className={`${styles.main_nav_link} ${
                router.asPath.includes("/space-tourisms/destination/")
                  ? styles.active_main_nav_link
                  : ""
              }`}
            >
              <span className={styles.category_number}>01</span> Destination
            </a>
          </Link>
          <Link href="/space-tourisms/crew/Douglas Hurley">
            <a
              className={`${styles.main_nav_link} ${
                router.asPath.includes("/space-tourisms/crew/")
                  ? styles.active_main_nav_link
                  : ""
              }`}
            >
              <span className={styles.category_number}>02</span> Crew
            </a>
          </Link>
          <Link href="/space-tourisms/technology/Launch vehicle">
            <a
              className={`${styles.main_nav_link} ${
                router.asPath.includes("/space-tourisms/technology/")
                  ? styles.active_main_nav_link
                  : ""
              }`}
            >
              <span className={styles.category_number}>03</span> Technology
            </a>
          </Link>
        </nav>
        <div className={styles.hamburgerContainer}>
          <button onClick={openDrawerHandler}>
            <Image
              src="/assets/spaceTourisms/shared/icon-hamburger.svg"
              height={30}
              width={30}
              alt="logo"
            />
          </button>
        </div>
      </div>
      {openDrawer && (
        <nav className={styles.nav_container_drawer}>
          <Link href="/space-tourisms/">
            <a
              onClick={closeDrawerHandler}
              className={`${styles.main_nav_link} ${
                router.asPath === "/space-tourisms"
                  ? styles.active_main_nav_link
                  : ""
              }`}
            >
              <span className={styles.category_number}>00</span> Home
            </a>
          </Link>
          <Link href="/space-tourisms/destination/moon">
            <a
              onClick={closeDrawerHandler}
              className={`${styles.main_nav_link} ${
                router.asPath.includes("/space-tourisms/destination/")
                  ? styles.active_main_nav_link
                  : ""
              }`}
            >
              <span className={styles.category_number}>01</span> Destination
            </a>
          </Link>
          <Link href="/space-tourisms/crew/Douglas Hurley">
            <a
              onClick={closeDrawerHandler}
              className={`${styles.main_nav_link} ${
                router.asPath.includes("/space-tourisms/crew/")
                  ? styles.active_main_nav_link
                  : ""
              }`}
            >
              <span className={styles.category_number}>02</span> Crew
            </a>
          </Link>
          <Link href="/space-tourisms/technology/Launch vehicle">
            <a
              onClick={closeDrawerHandler}
              className={`${styles.main_nav_link} ${
                router.asPath.includes("/space-tourisms/technology/")
                  ? styles.active_main_nav_link
                  : ""
              }`}
            >
              <span className={styles.category_number}>03</span> Technology
            </a>
          </Link>
        </nav>
      )}
      {children}
    </>
  );
};

const DestinationLayout = () => {
  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <Link href="/space-tourisms/destination/moon">
        <a
          className={`${styles.subRoute_nav_link} ${
            router.asPath === "/space-tourisms/destination/moon"
              ? styles.active_subRoute_nav_link
              : ""
          }`}
        >
          Moon
        </a>
      </Link>
      <Link href="/space-tourisms/destination/mars">
        <a
          className={`${styles.subRoute_nav_link} ${
            router.asPath === "/space-tourisms/destination/mars"
              ? styles.active_subRoute_nav_link
              : ""
          }`}
        >
          Mars
        </a>
      </Link>
      <Link href="/space-tourisms/destination/europa">
        <a
          className={`${styles.subRoute_nav_link} ${
            router.asPath === "/space-tourisms/destination/europa"
              ? styles.active_subRoute_nav_link
              : ""
          }`}
        >
          Europa
        </a>
      </Link>
      <Link href="/space-tourisms/destination/titan">
        <a
          className={`${styles.subRoute_nav_link} ${
            router.asPath === "/space-tourisms/destination/titan"
              ? styles.active_subRoute_nav_link
              : ""
          }`}
        >
          Titan
        </a>
      </Link>
    </nav>
  );
};

const CrewLayout = () => {
  const router = useRouter();
  return (
    <nav className={styles.crew_navbar}>
      <Link href="/space-tourisms/crew/Douglas Hurley">
        <span
          className={`${styles.crew_nav_link} ${
            router.asPath === "/space-tourisms/crew/Douglas%20Hurley"
              ? styles.active_crew_nav_link
              : styles.inactive_crew_nav_link
          }`}
        />
      </Link>
      <Link href="/space-tourisms/crew/Mark Shuttleworth">
        <span
          className={`${styles.crew_nav_link} ${
            router.asPath === "/space-tourisms/crew/Mark%20Shuttleworth"
              ? styles.active_crew_nav_link
              : styles.inactive_crew_nav_link
          }`}
        />
      </Link>
      <Link href="/space-tourisms/crew/Victor Glover">
        <span
          className={`${styles.crew_nav_link} ${
            router.asPath === "/space-tourisms/crew/Victor%20Glover"
              ? styles.active_crew_nav_link
              : styles.inactive_crew_nav_link
          }`}
        />
      </Link>
      <Link href="/space-tourisms/crew/Anousheh Ansari">
        <span
          className={`${styles.crew_nav_link} ${
            router.asPath === "/space-tourisms/crew/Anousheh%20Ansari"
              ? styles.active_crew_nav_link
              : styles.inactive_crew_nav_link
          }`}
        />
      </Link>
    </nav>
  );
};

const TechnologyLayout = () => {
  const router = useRouter();
  return (
    <nav className={styles.technology_navbar}>
      <Link href="/space-tourisms/technology/Launch vehicle">
        <a
          className={`${styles.technology_nav_link} ${
            router.asPath === "/space-tourisms/technology/Launch%20vehicle"
              ? styles.active_technology_nav_link
              : styles.inactive_technology_nav_link
          }`}
        >
          1
        </a>
      </Link>
      <Link href="/space-tourisms/technology/Spaceport">
        <a
          className={`${styles.technology_nav_link} ${
            router.asPath === "/space-tourisms/technology/Spaceport"
              ? styles.active_technology_nav_link
              : styles.inactive_technology_nav_link
          }`}
        >
          2
        </a>
      </Link>
      <Link href="/space-tourisms/technology/Space capsule">
        <a
          className={`${styles.technology_nav_link} ${
            router.asPath === "/space-tourisms/technology/Space%20capsule"
              ? styles.active_technology_nav_link
              : styles.inactive_technology_nav_link
          }`}
        >
          3
        </a>
      </Link>
    </nav>
  );
};

export { MainLayout, DestinationLayout, CrewLayout, TechnologyLayout };
