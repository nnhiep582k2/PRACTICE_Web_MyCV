const numb = document.querySelector('.informations .inner');
let count = 0;
setInterval(() => {
    if(count == 75) {
        clearInterval();
    } else {
        count += 1;
        numb.innerText = count + '%';
    }
}, 21.3);

// Typing
let i = 0;
var myText = 'Xin chào mọi người! Tôi là Hiệp, sở thích của tôi là làm việc với máy tính!';
var speed = 80;
typeWriter = () => {
    if(i < myText.length) {
        document.querySelector('.type-writer').textContent += myText[i];
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();

// Progress
progress = () => {
    var percents = document.querySelectorAll('.informations .percent');
    var progresses = document.querySelectorAll('.informations .center__part-progress');
    var arrProgress = [70, 75, 90, 85, 95, 70, 85, 70];
    for(let i = 0; i < arrProgress.length; i++) {
        let x = 0;
        setInterval(() => {
            if(x == arrProgress[i]) {
                clearInterval();
            } else {
                x += 1;
                percents[i].innerText = x + '%';
                progresses[i].style.width = x + '%';
            }
        }, 16);
    }
}
progress();

document.querySelector('.nav_label').onclick = () => {
    document.querySelector('.navbar .col-sidebar.sub-col-sidebar').style.transform = 'translateX(0)';
    document.querySelector('.navbar .col-sidebar.sub-col-sidebar').style.transition = '0.5s';
}

document.querySelector('.cancel').onclick = () => {
    document.querySelector('.navbar .col-sidebar.sub-col-sidebar').style.transform = 'translateX(-100%)';
}