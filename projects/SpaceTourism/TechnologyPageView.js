import Image from "next/image";
import React from "react";
import { TechnologyLayout } from "./Layouts";

import styles from "/styles/SpaceTourisms.module.scss";

const TechnologyPageView = ({ data, category }) => {
  return (
    <div className={styles.main_container_technology}>
      <h3 className={styles.category_heading}>
        <span className={styles.number}>03</span> SPACE LAUNCH 101
      </h3>
      <div className={styles.infoContainer_technology}>
        <div className={styles.technology_introContainer}>
          <TechnologyLayout />
          <div className={styles.data_container}>
            <span>
              <span className={styles.sub_heading}>THE TECHNOLOGY...</span>
              <h1 className={styles.technology_name}>{data.name}</h1>
            </span>
            <span className={styles.technology_bio}>{data.description}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={
              category !== "technology" ? data.images.png : data.images.portrait
            }
            height={450}
            width={450}
            alt={data.name}
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologyPageView;
