let likeBtns = document.querySelectorAll('.heart');
let shareBtns = document.querySelectorAll('.share');
let cardsWrapper = document.querySelector('.another');
let closeBtn = document.querySelector('.close');
let mobClose = document.querySelector('.mob-close');
let whiteBg = document.querySelector('.all-white');

likeBtns.forEach(element => {
    element.addEventListener("click", ()=>{
        if (element.classList.contains("heart")) {
            element.classList.remove("heart");
            element.classList.add("red-heart");
            let parent = element.parentNode;
            let counter = parent.querySelector('span');
            counter.textContent = Number(counter.textContent)+1;
            
        } else {
            element.classList.remove("red-heart");
            element.classList.add("heart");
            let parent = element.parentNode;
            let counter = parent.querySelector('span');
            counter.textContent = Number(counter.textContent)-1;
        }
    });
});


let modal = document.querySelector('.modal-wrapper');
let closeModal = document.querySelector('.close-modal');
let copy = document.querySelector('.copy');
let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');
let images = document.querySelectorAll('.carousel img');
let likeBtnCar = document.querySelector('.c-heart');
let shareBtnCar = document.querySelector('.c-share');
let largerBtn = document.querySelector('.larger');
let i = 0;
let thisImg = images[i];

let mobPrevBtn = document.querySelector('.mob-prev-btn');
let mobNextBtn = document.querySelector('.mob-next-btn');
let mobImages = document.querySelectorAll('.mob-car img');
let mobLikeBtn = document.querySelector('.mob-c-heart');
let mobShareBtn = document.querySelector('.mob-c-share');
let thisMobImg = mobImages[i];


cardsWrapper.addEventListener("click", (e)=> {
    if(e.target.className == 'card-img') {
        whiteBg.style.display = "block";
        window.scrollTo(pageYOffset, 0);
        i = Number(e.target.parentNode.id);
        i--;
        images[i].style.display = 'block';
        mobImages[i].style.display = 'block';
    } else if (e.target.className == 'share') {
        modal.style.display = 'flex';
    }  
});


closeModal.onclick = function() {
    modal.style.display = 'none';
}

shareBtnCar.onclick = function() {
    modal.style.display = 'flex';
}

mobShareBtn.onclick = function() {
    modal.style.display = 'flex';
}

copy.onclick = function() {
    navigator.clipboard.writeText('ссылка на картинку');
}


closeBtn.onclick = function() {
    images.forEach(elem=> {
        elem.style.display = 'none';
    });
    largerBtn.classList.remove('smaller');
    largerBtn.classList.add('larger');
    likeBtnCar.style.display = 'block';
    shareBtnCar.style.display = 'block';
    let parent = likeBtnCar.parentNode;
    let counter = parent.querySelector('span');
    counter.style.display = 'block';
    thisImg.style.marginTop = '0';
    thisImg.style.height = '90vh';
    whiteBg.style.display = "none";
}

mobClose.onclick = function() {
    mobImages.forEach(elem=> {
        elem.style.display = 'none';
    });
    whiteBg.style.display = "none";
}


nextBtn.onclick = function(){
    if (largerBtn.classList.contains('smaller')) {
        largerBtn.classList.remove('smaller');
        largerBtn.classList.add('larger');
        likeBtnCar.style.display = 'block';
        shareBtnCar.style.display = 'block';
        let parent = likeBtnCar.parentNode;
        let counter = parent.querySelector('span');
        counter.style.display = 'block';
        thisImg.style.height = '90vh';
    }

    images[i].style.display = 'none';
    i = i + 1;
    if (i > images.length - 1) {
        i = 0;
    }
    images[i].style.display = 'block';
    thisImg = images[i];
}

mobNextBtn.onclick = function(){
    mobImages[i].style.display = 'none';
    i = i + 1;
    if (i > mobImages.length - 1) {
        i = 0;
    }
    mobImages[i].style.display = 'block';
    thisMobImg = mobImages[i];
}

prevBtn.onclick = function(){
    if (largerBtn.classList.contains('smaller')) {
        largerBtn.classList.remove('smaller');
        largerBtn.classList.add('larger');
        likeBtnCar.style.display = 'block';
        shareBtnCar.style.display = 'block';
        let parent = likeBtnCar.parentNode;
        let counter = parent.querySelector('span');
        counter.style.display = 'block';
        thisImg.style.marginTop = '0';
        thisImg.style.height = '90vh';
    }

    images[i].style.display = 'none';
    i = i - 1;
    if (i < 0) {
        i = images.length - 1;
    }
    images[i].style.display = 'block';
    thisImg = images[i];
}

mobPrevBtn.onclick = function(){
    mobImages[i].style.display = 'none';
    i = i - 1;
    if (i < 0) {
        i = mobImages.length - 1;
    }
    mobImages[i].style.display = 'block';
    thisMobImg = mobImages[i];
}


likeBtnCar.addEventListener("click", ()=>{
    if (likeBtnCar.classList.contains("c-heart")) {
        likeBtnCar.classList.remove("c-heart");
        likeBtnCar.classList.add("c-red-heart");
        let parent = likeBtnCar.parentNode;
        let counter = parent.querySelector('span');
        counter.textContent = Number(counter.textContent)+1;
            
    } else {
        likeBtnCar.classList.remove("c-red-heart");
        likeBtnCar.classList.add("c-heart");
        let parent = likeBtnCar.parentNode;
        let counter = parent.querySelector('span');
        counter.textContent = Number(counter.textContent)-1;
    }
});

mobLikeBtn.addEventListener("click", ()=>{
    if (mobLikeBtn.classList.contains("mob-c-heart")) {
        mobLikeBtn.classList.remove("mob-c-heart");
        mobLikeBtn.classList.add("mob-c-red-heart");
        let parent = mobLikeBtn.parentNode;
        let counter = parent.querySelector('span');
        counter.textContent = Number(counter.textContent)+1;
            
    } else {
        mobLikeBtn.classList.remove("mob-c-red-heart");
        mobLikeBtn.classList.add("mob-c-heart");
        let parent = mobLikeBtn.parentNode;
        let counter = parent.querySelector('span');
        counter.textContent = Number(counter.textContent)-1;
    }
});

largerBtn.addEventListener('click', () => {
    if (largerBtn.classList.contains('larger')) {
        largerBtn.classList.remove('larger');
        largerBtn.classList.add('smaller');
        likeBtnCar.style.display = 'none';
        shareBtnCar.style.display = 'none';
        let parent = likeBtnCar.parentNode;
        let counter = parent.querySelector('span');
        counter.style.display = 'none';
        counter.style.display = 'none';
        thisImg.style.marginTop = '-75px';
        thisImg.style.height = '100vh';
    } else {
        largerBtn.classList.remove('smaller');
        largerBtn.classList.add('larger');
        likeBtnCar.style.display = 'block';
        shareBtnCar.style.display = 'block';
        let parent = likeBtnCar.parentNode;
        let counter = parent.querySelector('span');
        counter.style.display = 'block';
        thisImg.style.marginTop = '0';
        thisImg.style.height = '90vh';
    }
    
});
