
import express from "express";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let a = 0;

app.get("/image", async (req, res) => {
    res.send({"result": "success", "value": a});
    a = a + 1;
});



app.listen(3000, () => {
    console.log("Server running on port 3000");
});