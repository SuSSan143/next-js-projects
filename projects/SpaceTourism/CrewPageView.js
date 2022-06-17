import Image from "next/image";
import React from "react";

import styles from "/styles/SpaceTourisms.module.scss";
import { CrewLayout } from "./Layouts";
import { isMobileOnly, isTablet } from "react-device-detect";

const CrewPageView = ({ category, data }) => {
  return (
    <div className={styles.main_container_crew}>
      <h3 className={styles.category_heading}>
        <span className={styles.number}>02</span> Meet your crew
      </h3>
      <div className={styles.infoContainer_crew}>
        <div className={styles.crew_content_container}>
          <div>
            <h2 className={styles.crew_role}>{data.role}</h2>
            <h1 className={styles.crew_name}>{data.name}</h1>
            <span className={styles.crew_bio}>{data.bio}</span>
          </div>
          <CrewLayout />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={
              category !== "technology" ? data.images.png : data.images.portrait
            }
            height={isMobileOnly ? 250 : isTablet ? 350 : 550}
            width={isMobileOnly ? 250 : isTablet ? 350 : 550}
            alt={data.name}
          />
        </div>
      </div>
    </div>
  );
};

export default CrewPageView;
