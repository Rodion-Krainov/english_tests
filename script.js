const shuffle = (arr) => {
    return arr.sort(() => Math.round(Math.random() * 100) - 50);
}
EndF = () => {
    window.location = "index.html"
}
class newWord {
    constructor(eng, rus) {
        this.eng = eng
        this.rus = rus
    }
}
let counter = 1
let words = [
    new newWord("able", "мочь, уметь"),
    new newWord("ability", "возможность, умение"),
    new newWord("about", "около, приблизительно"),
    new newWord("above", "выше"),
    new newWord("abroad", "за границей"),
    new newWord("absent", "отсутствовать"),
    new newWord("absence", "отсутствие"),
    new newWord("accept", "принять"),
    new newWord("accident", "инцидент, случайность"),
    new newWord("accompany", "сопровождать"),
    new newWord("accomplish", "завершить"),
    new newWord("according to", "согласно с"),
    new newWord("account", "счет в банке"),
    new newWord("accuse", "обвинять"),
    new newWord("accustom", "приучать"),
    new newWord("across", "через"),
    new newWord("act", "действовать"),
    new newWord("action", "действие"),
    new newWord("active", "активный"),
    new newWord("activity", "активность"),
    new newWord("actor", "актер"),
    new newWord("actual", "актуальный"),
    new newWord("add", "добавить"),
    new newWord("addition", "прибавление, сложение"),
    new newWord("additional", "добавочный"),
    new newWord("address", "адрес"),
    new newWord("admire", "восхищаться"),
    new newWord("admit", "признавать, допускать"),
    new newWord("adopt", "принимать"),
    new newWord("advance", "делать успехи"),
]
let wordsDict = Array.from(words)
shuffle(wordsDict)
let score = 0
for (let i = wordsDict.length - 1; i >= 0; i --) {
    let b = wordsDict[i]
    let quest = document.createElement("div")
    quest.classList.add(`div${i}`)
    quest.innerHTML =
        `
                <div class="word_en">Translate the word "${b.rus}"</div>
                <input class="input inp${i}">
            `
    document.body.append(quest)
}
let finBut = document.createElement("div")
finBut.innerHTML = `<button onclick="getRes()">Finish!</button>`
document.body.append(finBut)
let getRes = () => {
    for (let i = wordsDict.length - 1; i >= 0; i --) {
        let res = document.getElementsByClassName(`inp${i}`)
        if (res[0].value === wordsDict[i].eng) {
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
            answer.innerText = `right: ${wordsDict[i].eng}`
            let res = document.getElementsByClassName(`div${i}`)
            res[0].append(answer)
        }
    }
    counter ++
}