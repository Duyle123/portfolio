const mainAudio = document.querySelector('.main_audio')
const audioPlayBtn = document.querySelector('.play_btn')
const audioCtrlContainer = document.querySelector('.audio_container')

audioPlayBtn.addEventListener('click', function(){
    audioCtrlContainer.classList.add('reveal');
    audioPlayBtn.classList.add('hidden')
    mainAudio.play();
})