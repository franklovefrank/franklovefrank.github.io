function update(data) {
    var cont = document.getElementById("arrivals");
    var result = "";
    var template = `
	<div class="level arrival}">
	  <div class="level-left">
	    <div class="level-item">
	      <p class="title">{{line}}</p>
	    </div>
	    <div class="level-item">
	      <p class="subtitle">to {{to}}</p>
	    </div>
	  </div>
	  <div class="level-right">
	    <p class="subtitle">{{time}}</p>
	  </div>
	</div>
	`;
    if (data.length == 0) {
        result = "No scheduled buses.";
    } else {
        data.forEach((a) => {
            var tmp = template;
            tmp = tmp.replace("{{line}}", a["line"]);
            tmp = tmp.replace("{{time}}", a["time"]);
            tmp = tmp.replace("{{to}}", a["to"]);
            result += tmp;
        });
    }

    cont.innerHTML = result;
}

function reqListener() {
    console.log(this.responseText);
    var XML = this.responseXML;
    var stops = XML.getElementsByTagName("pre");
    var data = [];
    [].forEach.call(stops, (stop) => {
        var line = stop.getElementsByTagName("rn")[0].childNodes[0].nodeValue;
        var time = stop.getElementsByTagName("pt")[0].childNodes[0].nodeValue;
        var to = stop.getElementsByTagName("fd")[0].childNodes[0].nodeValue;
        var pu = stop.getElementsByTagName("pu")[0].childNodes[0].nodeValue;
        if (pu !== "APPROACHING") {
            time = time + " minutes";
        } else {
            time = pu;
        }
        data.push({
            line: line,
            time: time,
            to: to
        });
    });
    update(data);
}

function fetch(stopId) {
    var url = "https://cors-anywhere.herokuapp.com/http://ctabustracker.com/bustime/eta/getStopPredictionsETA.jsp?route=all&stop=" + stopId;
    var req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", url);
    req.send();

    var arr = document.getElementById("arrivals");
    arr.innerHTML = `
	<div class="spinner">
	  <div class="rect1"></div>
	  <div class="rect2"></div>
	  <div class="rect3"></div>
	  <div class="rect4"></div>
	  <div class="rect5"></div>
	</div>
	`;
}

var currentStopId = null;

setInterval(() => {
    if (currentStopId !== null)
        fetch(currentStopId);
}, 30000);

[].forEach.call(document.getElementsByClassName("stop-id-link"), (sid) => {
    sid.addEventListener("click", (e) => {
        var stopId = e.target.getAttribute("data-stopid");
        currentStopId = stopId;
        fetch(stopId);
    });
});