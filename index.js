// 音を挿入する要素を取得
const text = document.querySelector("#text")

// 取得した運指を挿入する要素を取得
const text2 = document.querySelector("#text2")

// 取得した運指/音を挿入する関数
function content(Sound, getSound) {
    // 音を挿入
    text.textContent = `表示中の音:${Sound}`

    // 運指を挿入
    text2.textContent = `運指:${getSound}`
}

// 指定されている音名を挿入する変数
let selectSound;

/* 　　　　　　　　　　イベント 　　　　　　　　　　*/
// ド(C)が押されたとき
const C = document.querySelector("#BtnC");
C.addEventListener("click", () => {
    getC()
    selectSound = "C"
    console.log("click C");
    console.log(cMusic);
    content(selectSound + i, cMusic);
});

// ド#(Cis) / レ♭(Des)が押されたとき
const DesCis = document.querySelector("#BtnDesCis");
DesCis.addEventListener("click", () => {
    getDesCis()
    selectSound = "C# / D♭"
    console.log("click Des / Cis");
    console.log(descisMusic);
    content(selectSound + i, descisMusic);
});

// レ(D)が押されたとき
const D = document.querySelector("#BtnD");
D.addEventListener("click", () => {
    getD()
    selectSound = "D"
    console.log("click D");
    console.log(dMusic);
    content(selectSound + i, dMusic);
});

// レ#(Dis) / ミ♭(Es)が押されたとき
const EsDis = document.querySelector("#BtnEsDis");
EsDis.addEventListener("click", () => {
    getEsDis()
    selectSound = "D# / E♭"
    console.log("click Dis / Es");
    console.log(esdisMusic);
    content(selectSound + i, esdisMusic);
});

// ミ(E)が押されたとき
const E = document.querySelector("#BtnE");
E.addEventListener("click", () => {
    getE()
    selectSound = "E"
    console.log("click E");
    console.log(eMusic);
    content(selectSound + i, eMusic);
});

// ファ(F)が押されたとき
const F = document.querySelector("#BtnF");
F.addEventListener("click", () => {
    getF()
    selectSound = "F"
    console.log("click F");
    console.log(fMusic);
    content(selectSound + i, fMusic);
});

// ファ#(Fis) / ソ♭(Ges)が押されたとき
const GesFis = document.querySelector("#BtnGesFis");
GesFis.addEventListener("click", () => {
    getGesFis()
    selectSound = "F# / G♭"
    console.log("click Fis / Ges");
    console.log(gesfisMusic);
    content(selectSound + i, gesfisMusic);
});

// ソ(G)が押されたとき
const G = document.querySelector("#BtnG");
G.addEventListener("click", () => {
    getG()
    selectSound = "G"
    console.log("click G");
    console.log(gMusic);
    content(selectSound + i, gMusic);
});

// ソ#(Gis) / ラ♭(As)が押されたとき
const AsGis = document.querySelector("#BtnAsGis");
AsGis.addEventListener("click", () => {
    getAsGis()
    selectSound = "G# / A♭"
    console.log("click Gis / As");
    console.log(asgisMusic);
    content(selectSound + i, asgisMusic);
});

// ラ(A)が押されたとき
const A = document.querySelector("#BtnA");
A.addEventListener("click", () => {
    getA()
    selectSound = "A"
    console.log("click A");
    console.log(aMusic);
    content(selectSound + i, aMusic);
});

// ラ#(Ais) / シ♭(B)が押されたとき
const BAis = document.querySelector("#BtnBAis");
BAis.addEventListener("click", () => {
    getBAis()
    selectSound = "A# / B"
    console.log("click Ais / B");
    console.log(baisMusic);
    content(selectSound + i, baisMusic);
});

// シ(H)が押されたとき
const H = document.querySelector("#BtnH");
H.addEventListener("click", () => {
    getH()
    selectSound = "H"
    console.log("click H");
    console.log(hMusic);
    content(selectSound + i, hMusic);
});

// オクターブを上げるボタンが押されたとき
const upSound = document.querySelector("#upSoundBtn");
upSound.addEventListener("click", () => {
    i = i + 1
    console.log("click upSound" + i);
    content(selectSound + i, "音をもう一度選択してください");
});

// オクターブを下げるボタンが押されたとき
const downSound = document.querySelector("#downSoundBtn");
downSound.addEventListener("click", () => {
    i = i - 1
    console.log("click downSound" + i);
    content(selectSound + i, "音をもう一度選択してください");
});