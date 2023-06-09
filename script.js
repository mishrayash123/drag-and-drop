let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");
let fileName = document.getElementById("file-name");
let container = document.querySelector(".container");
let error = document.getElementById("error");
let imageDisplay = document.getElementById("image-display");

let whitebox1 = document.getElementsByClassName('whitebox1');
let img1 = document.querySelector('.imagebox1');
let whitebox2 = document.getElementsByClassName('whitebox2');
let img2 = document.querySelector('.imagebox2');
let whitebox3 = document.getElementsByClassName('whitebox3');
let img3 = document.querySelector('.imagebox3');
let whitebox4 = document.getElementsByClassName('whitebox4');
let img4 = document.querySelector('.imagebox4');
let whitebox5 = document.getElementsByClassName('whitebox5');
 
img1.addEventListener('dragstart' , (e)=>{
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className +=' hide';
    }, 0);
});

img1.addEventListener('dragend' , (e)=>{
    e.target.className = 'imagebox1';
});

img2.addEventListener('dragstart' , (e)=>{
  e.target.className += ' hold';
  setTimeout(() => {
      e.target.className +=' hide';
  }, 0);
});

img2.addEventListener('dragend' , (e)=>{
  e.target.className = 'imagebox2';
});

img3.addEventListener('dragstart' , (e)=>{
  e.target.className += ' hold';
  setTimeout(() => {
      e.target.className +=' hide';
  }, 0);
});

img3.addEventListener('dragend' , (e)=>{
  e.target.className = 'imagebox3';
});

img4.addEventListener('dragstart' , (e)=>{
  e.target.className += ' hold';
  setTimeout(() => {
      e.target.className +=' hide';
  }, 0);
});

img4.addEventListener('dragend' , (e)=>{
  e.target.className = 'imagebox4';
});

for(key of whitebox5) {
  key.addEventListener('dragover' , (e)=>{
      e.preventDefault();
      console.log('Drag over is fired');
  });

  key.addEventListener('dragleave' , (e)=>{
      e.target.className = 'whitebox1';
      console.log('Drag leave is fired');
  });
  key.addEventListener('drop' , (e)=>{
      e.target.className = 'whitebox1';
      console.log('Drag over is fired');
      
      e.target.append(img1);
  });
  key.addEventListener('dragenter' , (e)=>{
      e.target.className += ' dashed';
      console.log('Drag enter is fired');
  });
} 



const fileHandler = (file, name, type) => {
  if (type.split("/")[0] !== "image") {
    error.innerText = "Please upload an image file";
    return false;
  }
  error.innerText = "";
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    let imageContainer = document.createElement("figure");
    let img = document.createElement("img");
    img.src = reader.result;
    imageContainer.appendChild(img);
    imageContainer.innerHTML += `<figcaption>${name}</figcaption>`;
    imageDisplay.appendChild(imageContainer);
  };
};

uploadButton.addEventListener("change", () => {
  imageDisplay.innerHTML = "";
  Array.from(uploadButton.files).forEach((file) => {
    fileHandler(file, file.name, file.type);
  });
});
container.addEventListener(
  "dragenter",
  (e) => {
    e.preventDefault();
    e.stopPropagation();
    container.classList.add("active");
  },
  false
);
container.addEventListener(
  "dragleave",
  (e) => {
    e.preventDefault();
    e.stopPropagation();
    container.classList.remove("active");
  },
  false
);
container.addEventListener(
  "dragover",
  (e) => {
    e.preventDefault();
    e.stopPropagation();
    container.classList.add("active");
  },
  false
);
container.addEventListener(
  "drop",
  (e) => {
    e.preventDefault();
    e.stopPropagation();
    container.classList.remove("active");
    let draggedData = e.dataTransfer;
    let files = draggedData.files;
    imageDisplay.innerHTML = "";
    Array.from(files).forEach((file) => {
      fileHandler(file, file.name, file.type);
    });
  },
  false
);
window.onload = () => {
  error.innerText = "";
};