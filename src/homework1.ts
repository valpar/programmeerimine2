import express, { Request, Response } from "express";
const app = express();
app.use(express.json());

const port = 3030;
const ok = 200;
const created: number = 201;

const db = {
  kursus: [
    {
      id: 1,
      aeg: "14:15 - 17:30",
      aineNimi: "Programmeerimine II",
      tundideMaht: "4",
      oppejoud: "Martti Raavel",
    },
    {
      id: 2,
      aeg: "10:00 - 13:15",
      aineNimi: "Erialane inglise keel II",
      tundideMaht: "4",
      oppejoud: "Mari Kuli",
    },
    {
      id: 3,
      aeg: "14:15 - 17:30",
      aineNimi: "Kujundusgraafika II",
      tundideMaht: "4",
      oppejoud: "Laura Hein",
    },
    {
      id: 4,
      aeg: "09:00 - 16:15",
      aineNimi: "Veebiraamistikud",
      tundideMaht: "8",
      oppejoud: "Jaagup Kippar",
    },
  ],
};

app.get("/", (req: Request, res: Response) => {
  res.status(ok).json({
    kursus: db.kursus,
  });
});

app.get("/kursus/:id", (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const user = db.kursus.find((element) => element.id === id);
  res.status(ok).json({
    user,
  });
});

app.post("/kursus", (req: Request, res: Response) => {
  const { aeg, aineNimi, tundideMaht, oppejoud } = req.body;
  const id = db.kursus.length + 1;
  db.kursus.push({
    id,
    aeg,
    aineNimi,
    tundideMaht,
    oppejoud,
  });
  res.status(created).json({
    id,
  });
});

app.listen(port, () => {
  console.log("Server up and running!");
});
