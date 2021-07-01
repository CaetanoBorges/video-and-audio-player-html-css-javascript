$(".video-hover-reation").hover(function() {

    var el = $(this);
    el.find("video").get(0).addEventListener('load', function() {
        el.find("div.video-loader").get(0).style.display = "block";
    })
    el.find("video").get(0).addEventListener('play', function() {
        el.find("div.video-play").get(0).style.display = "block";
    })
    el.find("video").get(0).addEventListener('play', function() {
        el.find("div.video-button-play").get(0).style.display = "none";
    })

    var tempo = $(".video-current-time").val();
    el.find("video").get(0).load();
    el.find("video").get(0).currentTime = tempo;
    el.find("video").get(0).play();

    setInterval(function() {
        var duracao = Math.floor(Number(el.find("video").get(0).duration)) / 60;
        var s = "";
        var min = "";
        for (var i = 0; i < duracao; i++) {
            var a = duracao - i;
            min = i;
            if (a < 1) {
                s = a * 60;
            }

        }
        el.next().find("p.videoControls-duration").get(0).innerText = min + ":" + Math.round(s);

        var tempo = Math.floor(Number(el.find("video").get(0).currentTime)) / 60;
        var segs = "";
        var mins = "";
        for (var i = 0; i < tempo; i++) {
            var a = tempo - i;
            mins = i;
            if (a < 1) {
                segs = a * 60;
            }

        }

        el.next().find("p.videoControls-time").get(0).innerText = mins + ":" + Math.round(segs);
    }, 1000)


}, function() {
    var el = $(this);
    el.find("video").get(0).addEventListener('loaded', function() {
        el.find("div.video-loader").get(0).style.display = "none";
    })
    el.find("video").get(0).addEventListener('pause', function() {
        el.find("div.video-play").get(0).style.display = "none";
    })
    el.find("video").get(0).addEventListener('pause', function() {
        el.find("div.video-button-play").get(0).style.display = "block";
    })

    var tempo = el.find("video").get(0).currentTime;
    $(".video-current-time").val(tempo);
    el.find("video").get(0).pause();
})
