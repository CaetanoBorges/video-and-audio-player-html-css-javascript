#video componentes

    <div class="videoPlayer">
        <div class="video-hover-reation">
            <video poster="paises.png">
                <source src="01.mp4" type="video/mp4">
              </video>
            <input class="video-current-time" value="0" type="hidden">
            <div class="video-loader">
                <img src="video/icon/g.gif" alt="">
            </div>
            <div class="video-button-play">
                <img src="video/icon/play.png" alt="">
            </div>
        </div>
        <div class="videoControls style" style="display: block;">
            <p class="videoControls-time">--:--</p>
            <p class="videoControls-duration">--:--</p>
        </div>
    </div>
