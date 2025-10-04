function addImage() {
    const imageUrl = prompt();

    if (imageUrl !== null && imageUrl.trim() !== '') {
        const gallery = document.getElementById();
        const addBox = document.querySelector('.add-image-box');
        const newImg = document.createElement('img');
        newImg.src = imageUrl;
        gallery.insertBefore(newImg, addBox.nextSibling);
    }
}