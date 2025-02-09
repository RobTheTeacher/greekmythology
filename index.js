import express from "express"
import godRouter from "./routes/godRouter.js";
import heroRouter from "./routes/heroRouter.js";
import * as path from "path";

const PORT = 3000;
const app = express();


app.set("view engine", "ejs")

app.use(express.static( "public"))

app.get("/", (req, res) => {
    res.render("pages/index", {
        headTitle: "Greek Mythology",
        title: "Rob's Page on Greek Mythology",
        subtitle: "Learn about Gods and heroes!",
        pageType: "home"
    })
})

app.use("/gods", godRouter) // godRouter = any endpoint that starts with /gods
app.use("/heroes", heroRouter);

app.listen(PORT, () => console.log("Connected on " + PORT))