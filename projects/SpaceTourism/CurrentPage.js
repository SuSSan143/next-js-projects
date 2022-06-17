import React from "react";

import CrewPageView from "./CrewPageView";
import DestinationPageView from "./DestinationPageView";
import TechnologyPageView from "./TechnologyPageView";
import { isMobileOnly, isTablet } from "react-device-detect";

import { MainLayout } from "./Layouts";
import styles from "/styles/SpaceTourisms.module.scss";

const CurrentPageView = ({ category, data }) => {
  if (category === "destination") {
    return <DestinationPageView category={category} data={data} />;
  } else if (category === "crew") {
    return <CrewPageView data={data} category={category} />;
  } else {
    return <TechnologyPageView data={data} category={category} />;
  }
};

const CurrentPage = ({ category, data }) => {
  const path = category ? category.toLowerCase() : "";
  const currentViewPort = isMobileOnly
    ? "mobile"
    : isTablet
    ? "tablet"
    : "desktop";
  return (
    <main
      className={styles.main}
      style={{
        backgroundImage: `url("/assets/spaceTourisms/${path}/background-${path}-${currentViewPort}.jpg")`,
      }}
    >
      <MainLayout>
        <CurrentPageView data={data} category={category} />
      </MainLayout>
    </main>
  );
};

export default CurrentPage;
