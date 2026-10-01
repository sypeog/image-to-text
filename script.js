const imageInput = document.getElementById("imageInput");
const extractBtn = document.getElementById("extractBtn");
const output = document.getElementById("output");
const status = document.getElementById("status");
 
extractBtn.addEventListener("click", () => {
if (!imageInput.files.length) {
alert("Please select an image first.");
return;
}
 
status.textContent = "Image selected successfully!";
output.value = "JavaScript is working.";
});
