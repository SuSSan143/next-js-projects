import absoluteUrl from "next-absolute-url";

const handler = (req, res) => {
  const { projectName, subRoute1, subRoute2 } = req.query;
  const { origin } = absoluteUrl(req);
  fetch(`${origin}/api/${projectName}/${subRoute1}`)
    .then((result) => result.json())
    .then((data) => {
      const filteredData = data[subRoute1].filter(
        (item) => item.name.toLowerCase() === subRoute2.toLowerCase()
      );
      if (filteredData.length) {
        return res.json({ [subRoute2]: filteredData[0] });
      }
      res.status(404).json({ [subRoute1]: "No data found" });
    });
};

export default handler;
