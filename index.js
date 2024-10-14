document.getElementById('ds_playlist_button').addEventListener('click', function() {
    window.open('https://www.youtube.com/watch?v=WQoB2z67hvY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA', '_blank');
});

document.getElementById('wd_playlist_button').addEventListener('click', function() {
    window.open('https://www.youtube.com/playlist?list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD', '_blank');
});

document.getElementById('ds_playlist_button').addEventListener('click', function() {
    window.open('https://www.youtube.com/playlist?list=PLDzeHZWIZsTpukecmA2p5rhHM14bl2dHU', '_blank');
});

newsbtn=document.getElementById("news-btn");
let messageDiv = document.getElementById("message");
newsbtn.addEventListener('click', function() {
    messageDiv.innerHTML = "Learning Dashboard is loaded!";
});



        