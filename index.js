import express from "express"
import godRouter from "./routes/godRouter.js";
import heroRouter from "./routes/heroRouter.js";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
const __dirname = path.resolve();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "public")))

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