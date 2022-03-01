const setup = () => {
    let btnSubstring = document.getElementById("button");
    btnSubstring.addEventListener("click", substring);
}

const substring = () => {
    let txtInput = document.getElementById("txtInput");
    let index1 = document.getElementById("index1").value;
    let index2 = document.getElementById("index2").value;
    let tekst = txtInput.value;

    document.getElementById("txtOutput").innerHTML = tekst.substring(index1,index2);
}

window.addEventListener('load',setup);