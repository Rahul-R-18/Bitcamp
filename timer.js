hasTimerStarted = false;
    document.addEventListener("keydown", function (event) {
        if ((event.key === "A" || event.key === "a") && !hasTimerStarted) {
            let countdown = 30;
            hasTimerStarted = true;
            const interval = setInterval(function () {
                countdown--;

                if(countdown<10){
                    document.getElementById("countdown").innerHTML = "00:0" + countdown;
                } else {
                    document.getElementById("countdown").innerHTML = "00:" + countdown;
                }
                
                if (countdown <= 0) {
                    clearInterval(interval);
                    document.getElementById("timer").innerHTML = "Time's Up!";
                }
            }, 1000);
        }
    });


