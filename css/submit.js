 
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");
// console.log(realFileBtn);

// customBtn.addEventListener("click", function() {
//     realFileBtn.click();
// });

// realFileBtn.addEventListener("change", function() {
// if (realFileBtn.value) {
//     customTxt.innerHTML = "No file chosen yet";
// }
// });
function chooseFile() {
    const realFileBtn = document.getElementById("real-file");
    console.log("that thing i wanted :", realFileBtn);
    realFileBtn.click()

}
