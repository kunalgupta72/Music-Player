let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let pb = document.getElementById("progressBar");

let songs = [
  { songName: "song name", filePath: "songs/1.mp3", coverpath: "covers/1.jpg" },
  { songName: "song name", filePath: "songs/2.mp3", coverpath: "covers/2.jpg" },
  { songName: "song name", filePath: "songs/3.mp3", coverpath: "covers/3.jpg" },
  { songName: "song name", filePath: "songs/4.mp3", coverpath: "covers/4.jpg" },
  { songName: "song name", filePath: "songs/5.mp3", coverpath: "covers/5.jpg" },
];

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
  }
});
audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    pb.value = progress;
});
pb.addEventListener('change' ,()=>{
    audioElement.currentTime = pb.value *audioElement.duration/100;
});