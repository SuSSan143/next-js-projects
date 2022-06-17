import absoluteUrl from "next-absolute-url";
const handler = (req, res) => {
  const { subRoute1, projectName } = req.query;
  const { origin } = absoluteUrl(req);
  fetch(`${origin}/api/${projectName}`)
    .then((result) => result.json())
    .then((data) => {
      if (data[projectName].hasOwnProperty(subRoute1)) {
        return res.json({ [subRoute1]: data[projectName][subRoute1] });
      }
      res.status(404).json({ [subRoute1]: "No data found" });
    });
};

export default handler;
