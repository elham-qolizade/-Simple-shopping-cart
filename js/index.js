const submitbtn = document.querySelector(".submit");
const okbtn = document.querySelector(".okbtn");
const popup = document.querySelector(".pop-up");
const submit = document.querySelector(".submitbtn");
submitbtn.addEventListener("click", () => {
    popup.classList.add("pop-up-open");
    let name = document.getElementById("username").value;
    let number = document.getElementById("number").value;
    let row = 1;
    let display = document.getElementById("display");
    let newRow = display.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.innerHTML = name;
    cell2.innerHTML = number;
})
okbtn.addEventListener("click", () => {
    popup.classList.remove("pop-up-open");
})
