import express from "express";
import Heroes from "../data/heroes.js";

const heroRouter = express.Router();

heroRouter.get("/", (req, res) => {
    res.render("pages/featurePage", {
        headTitle: "Greek Heroes",
        bodyClass: "heroes",
        title: "Welcome to the Heroes page",
        subtitle: "Meet the legendary figures of Greek Mythology!!!!!!!",
        pageType: "heroes"
    })
})

heroRouter.get("/hercules", (req, res) => {
    let hercules = Heroes[0];
    res.render('pages/hero', {
        headTitle: hercules.name,
        title: hercules.name,
        subtitle: "Info about our hero",
        hero: hercules
    })
})

heroRouter.get("/odysseus", (req, res) => {
    let odysseus = Heroes[1]
    res.render('pages/hero', {
        headTitle: odysseus.name,
        title:odysseus.name,
        subtitle: "Info about our hero",
        hero: odysseus
    })
})

export default heroRouter