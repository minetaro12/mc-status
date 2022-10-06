import express from 'express';
import * as util from "minecraft-server-util";

const app = express();
const port = process.env.PORT || 8000;

const options = {
  timeout: 1000 * 5,
  enableSRV: false
};

app.get("/:host", (req,res) => {
  const parsedHost :string[] = req.params.host.split(":");
  const host :string = parsedHost[0];
  const port :number = Number(parsedHost[1]) || 25565;

  res.setHeader('Content-Type', 'application/json');
  util.status(host, port, options)
  .then((result) => res.send(JSON.stringify(result, null, 2)))
  .catch((error) => {
    console.error(error)
    res.status(500).send(JSON.stringify(error, null, 2))
  });
});

app.listen(port, () => {
  console.log(`Server listen on port ${port}`)
});