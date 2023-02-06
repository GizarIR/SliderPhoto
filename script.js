const imagesArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
let i = 0;
const n = 100;

const img = document.getElementsByTagName('img')[0];
document.addEventListener("DOMContentLoaded", function(event) {
    img.setAttribute('src', 'asset/' + imagesArray[0]);
  });

const calcIndex = (i) => {
    const result = (imagesArray.length + n + i) % imagesArray.length;
    if (result === 0) {i = 0};
    return result
};

function prevBtnOnclick(){
    i--;
    const prev_src = 'asset/' + imagesArray[calcIndex(i)] ;
    img.setAttribute('src', prev_src);
}

function nextBtnOnClick(){
    i++;
    const next_src = 'asset/' + imagesArray[calcIndex(i)];
    img.setAttribute('src', next_src);
}

const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button'); 

prevButton.onclick = prevBtnOnclick;
nextButton.onclick = nextBtnOnClick;



