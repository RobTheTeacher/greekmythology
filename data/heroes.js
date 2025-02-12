function Hero (name, power, description) {
    this.name = name;
    this.power = power;
    this.description = description;
}

let Heroes = [
    new Hero("Hercules", "Super Strength", "Hercules complete 12 tasks in his adventures"),
    new Hero("Odysseus", "Clever", "Odysseus built the Trojan Horse"),
    new Hero("Rob", "Runs away", "yada yada")
]



export default Heroes