import absoluteUrl from "next-absolute-url";

const handler = async (req, res) => {
  const { projectName } = req.query;
  const { origin } = absoluteUrl(req);
  console.log(origin)

  fetch(`${origin}/api`)
    .then((result) => result.json())
    .then((data) => {
      const project = data.projects[projectName];
      res.json({ [projectName]: project });
    });
};

export default handler;
