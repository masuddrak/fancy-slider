const images=[
    'img/download.jfif',
    'img/download (1).jfif',
    'img/download (2).jfif',
    'img/download (3).jfif',
]
let showImg=document.getElementById('showImg')
image=0
setInterval(() => {
    if(image>=images.length){
        image=0
    }
    showImg.setAttribute('src',images[image])
    image++
}, 1000);