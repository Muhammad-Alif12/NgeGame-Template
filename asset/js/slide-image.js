var i = 0;
var imagesHeadset = [];
var imagesKeyboard = [];
var imagesMouse = [];
var imagesMonitor = [];
var time = 3000;

imagesHeadset[0] = 'asset/img/headset/headset1.jpg';
imagesHeadset[1] = 'asset/img/headset/headset2.jpg';

imagesKeyboard[0] = 'asset/img/keyboard/keyboard1.jpg';
imagesKeyboard[1] = 'asset/img/keyboard/Keyboard2.jpg';

imagesMouse[0] = 'asset/img/mouse/mouse1.jpg';
imagesMouse[1] = 'asset/img/mouse/mouse2.jpg';

imagesMonitor[0] = 'asset/img/monitor/monitor1.jpg';
imagesMonitor[1] = 'asset/img/monitor/monitor2.jpg';

function changeImg() {
    document.headset.src = imagesHeadset[i];
    document.keyboard.src = imagesKeyboard[i];
    document.mouse.src = imagesMouse[i];
    document.monitor.src = imagesMonitor[i];

    if(i < imagesHeadset.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;