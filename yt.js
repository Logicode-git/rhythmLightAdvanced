// const ytdl = require('ytdl-core');

function runYoutube() {
    url = document.getElementById("ytID").value;
    addYoutubeVideo(url)
}

function addYoutubeVideo(url) {
    var videoId = url.split('v=')[1];
    var ampersandPosition = videoId.indexOf('&');
    if(ampersandPosition != -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
    var iframe = document.createElement('iframe');
    iframe.src = "https://www.youtube.com/embed/" + videoId;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "true");
    document.getElementById("ytContainer").appendChild(iframe);
    // let audio = getYoutubeAudio(url);
  }
  
// async function getYoutubeAudio(url) {
//     const audio = ytdl(url, { filter: 'audioonly' });
//     return audio;
// }

