import celebrate from "./confetti";

const tag = document.createElement("script");
tag.src = "http://www.youtube.com/player_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
window.onYouTubePlayerAPIReady = () => {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: "zeXBe3Fvv6o",
    events: {
      onStateChange: onPlayerStateChange
    }
  });
};

let isBodyClicked = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    if (isBodyClicked === false) {
      isBodyClicked = true;
      setTimeout(() => {
        return celebrate();
      }, 6800);
    }
  }
}

document.querySelector("body").addEventListener("click", e => {
  if (e.target && e.target.className === "button button-celebrate") {
    document.querySelector(".modal-background").className += " -active";
    player.playVideo();
  }
});
