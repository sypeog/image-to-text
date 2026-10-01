const imageInput = document.getElementById("imageInput");
const browseBtn = document.getElementById("browseBtn");
const preview = document.getElementById("preview");
const result = document.getElementById("result");
const extractBtn = document.getElementById("extractBtn");
const loader = document.getElementById("loader");
const dropZone = document.getElementById("dropZone");
 
let selectedFile = null;
 
browseBtn.addEventListener("click", () => {
imageInput.click();
});
 
imageInput.addEventListener("change", (e) => {
loadImage(e.target.files[0]);
});
 
dropZone.addEventListener("dragover", (e) => {
e.preventDefault();
});
 
dropZone.addEventListener("drop", (e) => {
e.preventDefault();
loadImage(e.dataTransfer.files[0]);
});
 
function loadImage(file) {
 
if (!file) return;
 
selectedFile = file;
 
const reader = new FileReader();
 
reader.onload = function(event) {
preview.src = event.target.result;
preview.style.display = "block";
};
 
reader.readAsDataURL(file);
}
 
extractBtn.addEventListener("click", async () => {
 
if (!selectedFile) {
alert("Please upload an image.");
return;
}
 
loader.style.display = "block";
result.value = "";
 
try {
 
const { data } = await Tesseract.recognize(
selectedFile,
"eng+spa+swe"
);
 
result.value = data.text;
 
} catch (error) {
 
result.value = "OCR failed.";
 
}
 
loader.style.display = "none";
 
});