import Link from "next/link";
import React from "react";
import { isMobileOnly, isTablet } from "react-device-detect";

import styles from "../../styles/SpaceTourisms.module.scss";
import { MainLayout } from "./Layouts";

const SpaceTourism = () => {
  const currentViewPort = isMobileOnly
    ? "mobile"
    : isTablet
    ? "tablet"
    : "desktop";
  return (
    <main
      className={styles.index_main}
      style={{
        backgroundImage: `url("/assets/spaceTourisms/home/background-home-${currentViewPort}.jpg")`,
      }}
    >
      <MainLayout>
        <div className={styles.main_container}>
          <div className={styles.info}>
            <h3 className={styles.intro_main}>So, you want to travel to </h3>
            <h1 className={styles.heading_main}>Space</h1>
            <p className={styles.description_main}>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <Link href="/space-tourisms/destination/moon">
            <div className={styles.explore}>Explore </div>
          </Link>
        </div>
      </MainLayout>
    </main>
  );
};

export default SpaceTourism;
