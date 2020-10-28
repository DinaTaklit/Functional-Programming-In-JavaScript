
// Common functions
let addImg = (src) => {
    let imgElement = document.createElement('img');
    imgElement.src = src;
    document.body.appendChild(imgElement);
}

//====================================================
//=================== Add images without promise
//====================================================


// Frist simple version of loadImage

function loadImage(url, callback) {
    let image = new Image();

    image.onload = function(){
        callback (null, image);
    }

    image.onerror = function(){
        let message = `Could not load image at ${url}`;
        callback (new Error(message));
    }

    image.src = url;
}


// Add images without promise
loadImage('images/cat1.jpg', (error, img1) => {
    if (error) throw error;
    addImg(img1.src);
    loadImage('images/cat2.jpg', (error,img2) =>{
        if (error) throw error;
        addImg(img2.src);
        loadImage('images/cat2.jpg', (error, img3)=>{
            if (error) throw error;
            addImg(img3.src);
        })
    })
})


//====================================================
//=================== Add images using promise
//====================================================

// loadImage return promise
function loadImage_promise(url){
    return new Promise((resolve, reject) => {
        let image = new Image();

        image.onload = function(){
            resolve(image)
        }

        image.onerror = function(){
            let message = `Could not load image at ${url}`;
            reject (new Error(message));
        }

        image.src = url;
    })
}


// Add images using a promise

Promise.all([
    loadImage_promise('images/cat1.jpg'),
    loadImage_promise('images/cat2.jpg'),
    loadImage_promise('images/cat3.jpg')
]).then((images) => {
    images.forEach(img => addImg(img.src))
}).catch((error) =>{
    //handle error later
})