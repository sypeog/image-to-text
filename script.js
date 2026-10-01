const imageInput = document.getElementById("imageInput");
const extractBtn = document.getElementById("extractBtn");
const result = document.getElementById("result");
 
extractBtn.addEventListener("click", async () => {
 
const file = imageInput.files[0];
 
if (!file) {
alert("Please select an image first.");
return;
}
 
result.value = "Reading image...";
 
try {
 
const { data } = await Tesseract.recognize(
file,
"eng+swe"
);
 
result.value = data.text;
 
} catch (error) {
 
console.error(error);
result.value = "OCR failed.";
 
}
});
