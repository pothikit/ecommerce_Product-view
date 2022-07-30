const lens = document.querySelector(".magnifier-lens");
const productImage = document.querySelector(".product-image img");
const magnifier = document.querySelector(".image-magnifier");
const productImageMain = document.querySelector(".product-image");
const productdetails = document.querySelector(".product-details");


productImage.addEventListener("mousemove", movlens);
lens.addEventListener("mousemove", movlens);
lens.addEventListener("mouseout", lensout);

function movlens(e) {
    // console.log(e);
    let x, y, cx, cy;
    // Get the position of cursor
    const productImagerect = productImage.getBoundingClientRect();
    x = e.pageX - productImagerect.left - lens.offsetWidth / 2;
    y = e.pageY - productImagerect.top - lens.offsetHeight / 2;

    let max_xpos = productImagerect.width - lens.offsetWidth;
    let max_ypos = productImagerect.height - lens.offsetHeight;

    if (x > max_xpos) x = max_xpos;
    if (x < 0) x = 0;

    if (y > max_ypos) y = max_ypos;
    if (y < 0) y = 0;
    lens.style.cssText = `top: ${y}px; left: ${x}px`;
    // lens.style.cssText = `width: 500px`
    cx = magnifier.offsetWidth / lens.offsetWidth;
    cy = magnifier.offsetHeight / lens.offsetHeight;

    magnifier.style.cssText = `
                    background: url("${productImage.src}")
                    -${x*cx}px -${y*cy}px / ${productImagerect.width * cx}px ${productImagerect.height * cy}px
                     no-repeat;
    `;
    productImageMain.classList.add("active");
    productdetails.classList.add("active");

}

function lensout() {
    productImageMain.classList.remove("active");
    productdetails.classList.remove("active");


}