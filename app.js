//Inserting the query selectors to access the DOM.


const fileInput = document.querySelector("#imageFileInput");
const canvas = document.querySelector("#canvas");
const canvasCtx = canvas.getContext('2d');
const brightnessInput = document.querySelector("#brightness");
const saturationInput = document.querySelector("#saturation");
const blurInput = document.querySelector("#blur");
const inversionInput = document.querySelector("#inversion");


const settings = {};
let image = null;

//Value function

function resetSettings (){
    settings.brightness = "100";
    settings.saturation = "100";
    settings.blur = "0";
    settings.inversion = "0";


    brightnessInput.value = settings.brightness;
    saturationInput.value = settings.saturation;
    blurInput.value = settings.blur;
    inversionInput.value = settings.inversion;

}
//Updating the settings


function updateSetting(key, value){

    if(!image) return;

    settings[key] = value;
};

function renderImage(){
    canvas.width = image.width;
    canvas.height = image.height;

    canvasCtx.filter = " ";
    canvasCtx.drawImage = (image, 0, 0)
};

brightnessInput.addEventListener("change", ()=> updateSetting("brightness", brightnessInput.value));
saturationInput.addEventListener("change", ()=> updateSetting("saturation", saturationInput.value));
blurInput.addEventListener("change", ()=> updateSetting("blur", blurInput.value));
inversionInput.addEventListener("change", ()=> updateSetting("inversion", inversionInput.value));

fileInput.addEventListener("change", ()=>{
    image = new Image();

    image.addEventListener("load", ()=>{
        resetSettings();
        renderImage();

    });

    image.src = URL.createObjectURL(fileInput.files[0]);
});
resetSettings();


