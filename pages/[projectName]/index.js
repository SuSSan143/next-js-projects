import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";

import projectData from "../../data/data";
import SpaceTourism from "../../projects/SpaceTourism";

const projectNameParser = (projectName) => {
  if (projectName) {
    const ary = projectName.split("-");
    const newArray = ary.map((item, index) =>
      index === 0
        ? item.trim()
        : item.trim().charAt(0).toUpperCase() + item.trim().slice(1)
    );
    return newArray.join("");
  }
  return "";
};

const pageTitleParser = (pageTitle) => {
  if (pageTitle) {
    const ary = pageTitle.split("-");
    const newArray = ary.map(
      (item, index) =>
        item.trim().charAt(0).toUpperCase() + item.trim().slice(1)
    );
    return newArray.join(" ");
  }
  return "";
};

const CurrentProject = ({ projectName }) => {
  switch (projectName) {
    case "spaceTourisms":
      return <SpaceTourism />;
    default:
      return <Image src="/assets/404page.gif" layout="fill" alt="404 page" />;
  }
};

const ProjectName = (props) => {
  const router = useRouter();
  const { projectName } = router.query;
  const parsedProjectName = projectNameParser(projectName);
  const pageTitle = pageTitleParser(projectName);
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={`/assets/${projectName}/favicon-32x32.png`} />
      </Head>
        <CurrentProject projectName={parsedProjectName} />
    </div>
  );
};
export default ProjectName;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          projectName: "space-tourisms",
        },
      },
    ],
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { projectName } = context.params;
  const parsedProjectName = projectNameParser(projectName);
  const projects = projectData(parsedProjectName);
  return {
    props: projects, // will be passed to the page component as props
  };
}