let data = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters":
    {
        "batter":
            [
                { "id": "1001", "type": "Rick" },
                { "id": "1002", "type": "Chocolate" },
                { "id": "1003", "type": "Blueberry" },
                { "id": "1004", "type": "Devil's Food" }
            ]
    },
    "topping":
        [
            { "id": "5001", "type": "None" },
            { "id": "5002", "type": "Glazed" },
            { "id": "5005", "type": "Morty" },
            { "id": "5007", "type": "helloWorld" },
            { "id": "5006", "type": "Chocolate with Sprinkles" },
            { "id": "5003", "type": "Chocolate" },
            { "id": "5004", "type": "Maple" }
        ]
}
// Affichez le nom

console.log(data.name)
// Affichez le ppu

console.log(data.ppu)
// Affichez le contenu de topping

console.log(data.topping)
// Affichez le type pour l'id 1004

console.log(data.batters.batter[3].type)
// Affichez le type pour l'id 5004

console.log(data.topping[6].type)
// Affichez l'id 5001

console.log(data.topping[0].id)
// Concaténez l'id 1001 et le type Rick dans une phrase ("Rick est l'id 1001")

console.log(data.batters.batter[0].type + " est l'id "+ data.batters.batter[0].id
)

// Concaténez le type de l'id 5004 avec le name "cake" de la même manière que précédemment

console.log(data.topping[6].type +" c'est "+ data.name)

console.log(`${data.name} au ${data.topping[6].type} `)