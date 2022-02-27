//--------------------------Classes & Functions--------------------------//
let words = [
    // new newWord("able", "мочь, уметь"),
    // new newWord("ability", "возможность, умение"),
    // new newWord("about", "около, приблизительно"),
    // new newWord("above", "выше"),
    // new newWord("abroad", "за границей"),
    // new newWord("absent", "отсутствовать"),
    // new newWord("absence", "отсутствие"),
    // new newWord("accept", "принять"),
    // new newWord("accident", "инцидент, случайность"),
    // new newWord("accompany", "сопровождать"),
    // new newWord("accomplish", "завершить"),
    // new newWord("according to", "согласно с"),
    // new newWord("account", "счет в банке"),
    // new newWord("accuse", "обвинять"),
    // new newWord("accustom", "приучать"),
    // new newWord("across", "через"),
    // new newWord("act", "действовать"),
    // new newWord("action", "действие"),
    // new newWord("active", "активный"),
    // new newWord("activity", "активность"),
    // new newWord("actor", "актер"),
    // new newWord("actual", "актуальный"),
    // new newWord("add", "добавить"),
    // new newWord("addition", "прибавление, сложение"),
    // new newWord("additional", "добавочный"),
    // new newWord("address", "адрес"),
    // new newWord("admire", "восхищаться"),
    // new newWord("admit", "признавать, допускать"),
    // new newWord("adopt", "принимать"),
    // new newWord("advance", "делать успехи"),
]
class newWord {
    constructor(eng, rus) {
        this.eng = eng
        this.rus = rus
    }
}
const shuffle = (arr) => {
    return arr.sort(() => Math.round(Math.random() * 100) - 50);
}
EndF = () => {
    test = document.getElementById("test")
    test.remove()
    test = document.createElement("div")
    test.id = "test"
    document.body.append(test)
    startTest()
}
let test = document.createElement("div")
test.id = "test"
document.body.append(test)
let getRes
wordAddFunc = () => {
    let newW = document.getElementById("new-lang")
    let mainW = document.getElementById("main-lang")
    let wordPlus = new newWord(newW.value.trim(), mainW.value.trim().toLowerCase())
    words.push(wordPlus)
    newW.value = ""
    mainW.value = ""
}
test = document.getElementById("test")
//------------------------------Test logic------------------------------//
let startTest = function () {
    let a = document.getElementById("wap")
    if(a) a.remove()
    let counter = 1
    shuffle(words)
    let score = 0
    for (let i = words.length - 1; i >= 0; i --) {
        let b = words[i]
        let quest = document.createElement("div")
        quest.classList.add(`div${i}`)
        quest.innerHTML =
            `
                <div class="word_en">Translate the word "${b.rus}"</div>
                <input class="input inp${i}" style="margin-right: 5px;">
            `
        test.append(quest)
    }
    let finBut = document.createElement("div")
    finBut.innerHTML = `<button class="buttonAct" onclick="getRes()">Finish!</button>`
    test.append(finBut)
    getRes = () => {
        for (let i = words.length - 1; i >= 0; i --) {
            let res = document.getElementsByClassName(`inp${i}`)
            if (res[0].value === words[i].eng) {
                score ++
                res[0].classList.add("right")
                res[0].classList.remove("mistake", "undefined")
            } else if (!res[0].value) {
                res[0].classList.add("undefined")
                res[0].classList.remove("mistake", "right")
            } else {
                res[0].classList.add("mistake")
                res[0].classList.remove("right", "undefined")
            }
        }
        if (counter === 3) {
            document.getElementsByTagName("button")[0].setAttribute("disabled", "")
            let endBut = document.createElement("div")
            endBut.innerHTML =
                `<button class="buttonAct" onclick="EndF()">Try again!</button><button class="buttonAct" onclick="window.location='index.html'">Reload test!</button>`
            test.append(endBut)
            for (let i = words.length - 1; i >= 0; i --) {
                let answer = document.createElement("span")
                answer.innerText = `right: ${words[i].eng}`
                let res = document.getElementsByClassName(`div${i}`)
                res[0].append(answer)
            }
        }
        counter ++
    }
}
//------------------------------Test panel------------------------------//
let wordAddPanel = document.createElement("article")
wordAddPanel.id = "wap"
wordAddPanel.innerHTML =
    `
    <div>
        <span>Enter the new word: </span>
        <input id="new-lang">
    </div>
    <div>
        <span>Enter the translation: </span>
        <input id="main-lang">
    </div>
    <input type="button" onclick="wordAddFunc()" class="buttonMain" value="Add a word!">
    <input type="button" onclick="startTest()" class="buttonMain" value="Start a test!">  
    `
test.append(wordAddPanel)