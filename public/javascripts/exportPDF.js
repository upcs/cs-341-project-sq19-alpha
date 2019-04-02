var testDivElement = document.getElementById('route_div');

function savePDF() {
    //alert("pdf!");
    var imgData;
    html2canvas($("#route_div"), {
        useCORS: true,
        onrendered: function (canvas) {
            imgData = canvas.toDataURL(
                './Route.jpg');
            var doc = new jsPDF('p', 'pt', 'a4');
            doc.addImage(imgData, 'JPG', 10, 10);
            doc.save('route.pdf');
            //setTimeout(function () { window.open(imgData) }, 1000);
        }
    });
}

function screenshot() {
    alert("in screenshot test");

    var doc = new jsPDF();
    var specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };

    $('#exportButton').click(function () {
        alert("in exportButton onclick function");
        doc.fromHTML($('#route_div').html(), 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });
        doc.save('sample-file.pdf');
    });


    /*
    html2canvas(document.querySelector(".mapouter")).then(canvas => {
        //document.body.appendChild(canvas)
        var doc = new jsPDF('p', 'pt', 'a4');
        doc.addImage(canvas, 'JPG', 10, 10);
        doc.save('route.pdf');
    });*/
}

