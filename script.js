const shuffle = (arr) => {
    return arr.sort(() => Math.round(Math.random() * 100) - 50);
}
EndF = () => {
    window.location = "index.html"
}
let counter = 1
let words =
    [
        ["able", "мочь, уметь"], ["ability", "умение"], ["about", "приблизительно"], ["above", "выше"], ["abroad", "за границей"],
        ["absent", "отсутствовать"], ["absence", "отсутствие"], ["accept", "принять"], ["accident", "инцидент"], ["accompany", "сопровождать"],
        ["accomplish", "завершить (выполнить)"], ["according to", "согласно"], ["account", "счет в банке"], ["accuse", "обвинять"], ["accustom", "приучать"],
        ["across", "через"], ["act", "действовать"], ["action", "действие"], ["active", "активный"], ["activity", "активность"],
        ["actor", "актёр"], ["actual", "актуальный"], ["add", "добавить"], ["addition", "сложение, добавление"], ["additional", "добавочный"],
        ["address", "адрес"], ["admire", "восхищаться"], ["admit", "признавать, допускать"], ["adopt", "принимать"], ["advance", "делать успехи"],
    ]
//["", ""], ["", ""], ["", ""], ["", ""], ["", ""],

let wordsDict = Array.from(words)
shuffle(wordsDict)
let score = 0
for (let i = wordsDict.length - 1; i >= 0; i --) {
    let b = wordsDict[i]
    let quest = document.createElement("div")
    quest.classList.add(`div${i}`)
    quest.innerHTML =
        `
                <div class="word_en">Translate the word "${b[1]}"</div>
                <input class="input inp${i}">
            `
    document.body.append(quest)
}
let finBut = document.createElement("div")
finBut.innerHTML =
    `<button onclick="getRes()">Finish!</button>`
document.body.append(finBut)
let getRes = () => {
    for (let i = wordsDict.length - 1; i >= 0; i --) {
        let res = document.getElementsByClassName(`inp${i}`)
        if (res[0].value === wordsDict[i][0]) {
            score ++
            res[0].classList.add("right")
            res[0].classList.remove("mistake")
        } else {
            res[0].classList.add("mistake")
            res[0].classList.remove("right")
        }

    }
    if (counter === 3) {
        document.getElementsByTagName("button")[0].setAttribute("disabled", "")
        let endBut = document.createElement("div")
        endBut.innerHTML =
            `<button onclick="EndF()">Try again!</button>`
        document.body.append(endBut)
        for (let i = wordsDict.length - 1; i >= 0; i --) {
            let answer = document.createElement("span")
            answer.innerText = `right: ${wordsDict[i][0]}`
            let res = document.getElementsByClassName(`div${i}`)
            res[0].append(answer)
        }
    }
    counter ++
}