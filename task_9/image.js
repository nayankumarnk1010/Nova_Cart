const image_arr = [
    "../images/anime1.jpeg",
    "../images/anime2.jpeg",
    "../images/anime3.jpeg"
];
const image = document.getElementById("imgloc");
let index = 0;
let index1=2;
document.getElementById("nxt").addEventListener("click", () => {
    index ++;
    if(index == image_arr.length){
        index =0;
    }
    image.src = image_arr[index];
});

document.getElementById("prev").addEventListener("click", () => {
    index1 --;
    if(index1 == image_arr.length){
        index1 = 0;
    }
    image.src = image_arr[index];
});
