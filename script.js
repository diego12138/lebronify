console.log('Hello')
//images
let fileNames =[
    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg'
];
function replaceImages() {
    let imgs = document.getElementsByTagName('img');
    for (let img of imgs) {
        let r = Math.floor(Math.random() * fileNames.length);
        let file = fileNames[r];
        let url = chrome.runtime.getURL(file);
        img.src = url;
        console.log(url);
    }
}

replaceImages();

const observer = new MutationObserver((mutations) =>{
    mutations.forEach((mutation) => {
        if (mutation.addedNodes) {
            replaceImages();
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });