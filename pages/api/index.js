import absoluteUrl from "next-absolute-url";
import projects from "../../data/data";

const handler = (req, res) => {
  const { origin } = absoluteUrl(req);
  res.json({ projects: projects(origin) });
};

export default handler;
