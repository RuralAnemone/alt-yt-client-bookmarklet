var a = "il.ax"; /**replace this with your desired piped/invidious client**/  

if (window.location.href.match(/https?\:\/\/youtube\.com\/watch/)) {
    window.open("https://" + a + "/watch" + window.location.search, "_blank");
} else {
    window.open("https://" + a + "/watch" + prompt("you don't seem to be on a youtube video...\n\ncopy & paste the video url here:").match(/https?\:\/\/www\.youtube\.com\/watch(\?v=[0-9A-Za-z_\-]+)/)[1], "_blank");
}
