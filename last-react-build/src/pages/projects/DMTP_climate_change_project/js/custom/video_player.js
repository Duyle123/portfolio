var video = document.querySelector('.video');
var videoControl = document.querySelector('.controls')

//============ play / pause ====================

var playBtn = document.getElementById('play_pause');
var centerPlayBtn = document.querySelector('.center_play_btn')
var videoTitle = document.querySelector('.video_title')

function playVideo(){
    if (video.paused) {
        console.log('video playing')
        playBtn.className = 'pause';
        video.play();
    } else {
        console.log('video paused')
        playBtn.className = 'play';
        video.pause();
    }
}


playBtn.onclick = function(){
    console.log('play button clicked');
    playVideo(); 
    centerPlayBtn.classList.replace('show','hidden')
    videoControl.classList.remove('hidden')
    console.log('hidden removed')
}

centerPlayBtn.onclick = function(){
    console.log('center button clicked')
    playVideo();
    centerPlayBtn.classList.replace('show','hidden')
    videoControl.classList.remove('hidden')
    console.log('hidden removed')
}

//================== forward & backward ========================
var fwdBtn = document.getElementById('forward_btn');
var bckBtn = document.getElementById('backward_btn');

fwdBtn.onclick = function(){
    video.currentTime += 5;
}

bckBtn.onclick = function(){
    video.currentTime -= 5;
}

//=================== volume ===========================
var volBtn = document.getElementById('volume')

function volumeControl(){
    if (volBtn.classList.contains('vol_on')) {
        console.log('volume off')
        video.volume = 0.0;
        volBtn.classList.replace('vol_on','vol_off')
    } else {
        console.log('volume on')
        video.volume = 0.5;
        volBtn.classList.replace('vol_off','vol_on')
    }
}

volBtn.onclick = function(){
    console.log('volume btn clicked');
    volumeControl();
}

//vol slider
var volSlider = document.querySelector('.volume_container input')

volSlider.addEventListener('input', i => {
    video.volume = i.target.value;
})

//==================== full Screen ========================

fullscreenBtn = document.getElementById('fullscreen')
videoContainer = document.querySelector('.video_container')

function fullscreenControl() {
    if (document.fullscreenElement) {
        console.log('out of fullscreen')
        fullscreenBtn.classList.replace('smallscreen_icon', 'fullscreen_icon')
        return document.exitFullscreen();
    } else {
        console.log('in fullscreen')
        fullscreenBtn.classList.replace('fullscreen_icon', 'smallscreen_icon')
        videoContainer.requestFullscreen();
    }
};

fullscreenBtn.onclick = function(){
    videoContainer.classList.toggle("fullscreen");
    fullscreenControl();
}


//==================== buffer ==========================

var bufferBar = document.querySelector('.buffer_bar');
var videoTimeline = document.querySelector('.video_timeline')
var currentTimeStamp = document.querySelector('.current_time')
var durationTimeStamp = document.querySelector('.duration')

video.addEventListener('timeupdate', i => {
    let {currentTime} = i.target;
    var bufferPosition = video.currentTime / video.duration;
    bufferBar.style.width = bufferPosition * 100 + '%';
    currentTimeStamp.innerText = timeFormat(currentTime);
});

video.addEventListener('loadeddata', i => {
    durationTimeStamp.innerText = timeFormat(i.target.duration);
});

videoTimeline.addEventListener('click', i => {
    let timelineWidth = videoTimeline.clientWidth;
    video.currentTime = (i.offsetX / timelineWidth) * video.duration;
});

//==================== drag buffer bar =====================

const bufferBarDrag = i => {
    let timelineWidth = videoTimeline.clientWidth;
    bufferBar.style.width = `${i.offsetX}px`; 
    video.currentTime = (i.offsetX / timelineWidth) * video.duration;
    currentTimeStamp.innerText = timeFormat(currentTime);
}

videoTimeline.addEventListener('mousedown', () => {
    videoTimeline.addEventListener('mousemove', bufferBarDrag);
});

document.addEventListener('mouseup', () => {
    videoTimeline.removeEventListener('mousemove', bufferBarDrag);
});

videoTimeline.addEventListener('mousemove', i => {
    const hoverTimeStamp = videoTimeline.querySelector('.hover_time_stamp')
    let offsetX = i.offsetX;
    hoverTimeStamp.style.left = `${offsetX}px`;
    let timelineWidth = videoTimeline.clientWidth;
    let hoverTime = (i.offsetX/timelineWidth) * video.duration;
    hoverTimeStamp.innerText = timeFormat(hoverTime);
});

//=================== time formatting =====================

const timeFormat = time => {
    console.log(time);

    let seconds = Math.floor(time % 60);
    let minutes = Math.floor(time / 60) % 60;
    let hours = Math.floor(time / 3600);

    console.log(seconds, minutes, hours)

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;

    if(hours == 0) {
        return `${minutes}:${seconds}`;
    }
    return `${hours}:${minutes}:${seconds}`;
}

//=================== hide controls =======================

let timer; 

const controlDisappear = () => {
    if (video.paused) return;
    timer = setTimeout(() => {
        videoControl.classList.remove('appear');
        console.log('timed out')
        }, 1000);
    }

controlDisappear();

videoContainer.addEventListener('mousemove', () => {
    videoControl.classList.add('appear');
    console.log('mouse is moving')
    clearTimeout(timer);
    controlDisappear();
})

videoContainer.addEventListener('mouseout', ()=>{
    if (video.paused){
        videoControl.classList.add('appear');
    } else {
        videoControl.classList.remove('appear');
    }
})

//=========================================================