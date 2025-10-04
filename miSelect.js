// 「選択完了」ボタンと選択した値を取得するidを取得
const btn = document.getElementById("btn");
const setMI = document.getElementById("setMI");
const selectMI = document.getElementById("musicalInstrument");
const musicSheet = document.getElementById("musicSheet");
let musicMIname;
// メニューから値を選択し、ボタンを押した後の処理
btn.addEventListener("click", () => {
    const num = selectMI.selectedIndex;
    // 選択した要素のテキストを取得する処理
    const getMIname = selectMI.options[num].innerText;
    musicMIname = selectMI.options[num].innerText;
    // 取得した要素をHTMLに埋め込む
    setMI.innerHTML = "楽器:" + getMIname;
    // 選択完了したことを通知
    window.alert("楽器が選択されました。" + "The instrument has been selected.")
});