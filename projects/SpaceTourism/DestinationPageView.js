import Image from "next/image";

import { DestinationLayout } from "./Layouts";
import styles from "/styles/SpaceTourisms.module.scss";
import { isMobileOnly, isTablet } from "react-device-detect";

const DestinationPageView = ({ data, category }) => {
  return (
    <div className={styles.main_container_destination}>
      <h3 className={styles.category_heading}>
        <span className={styles.number}>01</span> Pick your destination
      </h3>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={
              category !== "technology" ? data.images.png : data.images.portrait
            }
            height={isMobileOnly ? 230 : isTablet ? 350 : 450}
            width={isMobileOnly ? 230 : isTablet ? 350 : 450}
            alt={data.name}
          />
        </div>
        <div className={styles.content_container}>
          <DestinationLayout />
          <div className={styles.data_container}>
            <h1 className={styles.destination_name}>{data.name}</h1>
            <span className={styles.destination_description}>
              {data.description}
            </span>
            <hr className={styles.hr} />
            <div className={styles.details_container}>
              <span className={styles.details_text}>AVG. DISTANCE</span>
              <span className={styles.details_text}>ESTI. TRAVEL TIME</span>
              <span className={styles.details_value}>{data.distance}</span>
              <span className={styles.details_value}>{data.travel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPageView;
