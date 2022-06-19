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
          <Link href="/">
            <a
              className={`${styles.main_nav_link} ${
                router.asPath === "/"
                  ? styles.active_main_nav_link
                  : ""
              }`}
            >
              <span className={styles.category_number}>00</span> Home
            </a>
          </Link>
          <Link href="/Space%20Tourisms/destination/Moon">
            <a
              className={`${styles.main_nav_link} ${
                router.asPath.includes("/Space%20Tourisms/destination/")
                  ? styles.active_main_nav_link
                  : ""
              }`}
            >
              <span className={styles.category_number}>01</span> Destination
            </a>
          </Link>
          <Link href="/Space%20Tourisms/crew/Douglas Hurley">
            <a
              className={`${styles.main_nav_link} ${
                router.asPath.includes("/Space%20Tourisms/crew/")
                  ? styles.active_main_nav_link
                  : ""
              }`}
            >
              <span className={styles.category_number}>02</span> Crew
            </a>
          </Link>
          <Link href="/Space%20Tourisms/technology/Launch vehicle">
            <a
              className={`${styles.main_nav_link} ${
                router.asPath.includes("/Space%20Tourisms/technology/")
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
          <Link href="/Space%20Tourisms/">
            <a
              onClick={closeDrawerHandler}
              className={`${styles.main_nav_link} ${
                router.asPath === "/Space%20Tourisms"
                  ? styles.active_main_nav_link
                  : ""
              }`}
            >
              <span className={styles.category_number}>00</span> Home
            </a>
          </Link>
          <Link href="/Space%20Tourisms/destination/Moon">
            <a
              onClick={closeDrawerHandler}
              className={`${styles.main_nav_link} ${
                router.asPath.includes("/Space%20Tourisms/destination/")
                  ? styles.active_main_nav_link
                  : ""
              }`}
            >
              <span className={styles.category_number}>01</span> Destination
            </a>
          </Link>
          <Link href="/Space%20Tourisms/crew/Douglas Hurley">
            <a
              onClick={closeDrawerHandler}
              className={`${styles.main_nav_link} ${
                router.asPath.includes("/Space%20Tourisms/crew/")
                  ? styles.active_main_nav_link
                  : ""
              }`}
            >
              <span className={styles.category_number}>02</span> Crew
            </a>
          </Link>
          <Link href="/Space%20Tourisms/technology/Launch vehicle">
            <a
              onClick={closeDrawerHandler}
              className={`${styles.main_nav_link} ${
                router.asPath.includes("/Space%20Tourisms/technology/")
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
      <Link href="/Space%20Tourisms/destination/Moon">
        <a
          className={`${styles.subRoute_nav_link} ${
            router.asPath === "/Space%20Tourisms/destination/Moon"
              ? styles.active_subRoute_nav_link
              : ""
          }`}
        >
          Moon
        </a>
      </Link>
      <Link href="/Space%20Tourisms/destination/Mars">
        <a
          className={`${styles.subRoute_nav_link} ${
            router.asPath === "/Space%20Tourisms/destination/Mars"
              ? styles.active_subRoute_nav_link
              : ""
          }`}
        >
          Mars
        </a>
      </Link>
      <Link href="/Space%20Tourisms/destination/Europa">
        <a
          className={`${styles.subRoute_nav_link} ${
            router.asPath === "/Space%20Tourisms/destination/Europa"
              ? styles.active_subRoute_nav_link
              : ""
          }`}
        >
          Europa
        </a>
      </Link>
      <Link href="/Space%20Tourisms/destination/Titan">
        <a
          className={`${styles.subRoute_nav_link} ${
            router.asPath === "/Space%20Tourisms/destination/Titan"
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
      <Link href="/Space%20Tourisms/crew/Douglas Hurley">
        <span
          className={`${styles.crew_nav_link} ${
            router.asPath === "/Space%20Tourisms/crew/Douglas%20Hurley"
              ? styles.active_crew_nav_link
              : styles.inactive_crew_nav_link
          }`}
        />
      </Link>
      <Link href="/Space%20Tourisms/crew/Mark Shuttleworth">
        <span
          className={`${styles.crew_nav_link} ${
            router.asPath === "/Space%20Tourisms/crew/Mark%20Shuttleworth"
              ? styles.active_crew_nav_link
              : styles.inactive_crew_nav_link
          }`}
        />
      </Link>
      <Link href="/Space%20Tourisms/crew/Victor Glover">
        <span
          className={`${styles.crew_nav_link} ${
            router.asPath === "/Space%20Tourisms/crew/Victor%20Glover"
              ? styles.active_crew_nav_link
              : styles.inactive_crew_nav_link
          }`}
        />
      </Link>
      <Link href="/Space%20Tourisms/crew/Anousheh Ansari">
        <span
          className={`${styles.crew_nav_link} ${
            router.asPath === "/Space%20Tourisms/crew/Anousheh%20Ansari"
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
      <Link href="/Space%20Tourisms/technology/Launch vehicle">
        <a
          className={`${styles.technology_nav_link} ${
            router.asPath === "/Space%20Tourisms/technology/Launch%20vehicle"
              ? styles.active_technology_nav_link
              : styles.inactive_technology_nav_link
          }`}
        >
          1
        </a>
      </Link>
      <Link href="/Space%20Tourisms/technology/Spaceport">
        <a
          className={`${styles.technology_nav_link} ${
            router.asPath === "/Space%20Tourisms/technology/Spaceport"
              ? styles.active_technology_nav_link
              : styles.inactive_technology_nav_link
          }`}
        >
          2
        </a>
      </Link>
      <Link href="/Space%20Tourisms/technology/Space capsule">
        <a
          className={`${styles.technology_nav_link} ${
            router.asPath === "/Space%20Tourisms/technology/Space%20capsule"
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
