var testDivElement = document.getElementById('route_div');

function savePDF() {
	//alert("pdf!");
        var imgData;
        html2canvas($("#route_div"), {
            useCORS: true,
            onrendered: function (canvas) {
                imgData = canvas.toDataURL(
                   'Route.jpg');
                var doc = new jsPDF('p', 'pt', 'a4');
                doc.addImage(imgData, 'JPG', 10, 10);
                doc.save('route.pdf');
                //setTimeout(function () { window.open(imgData) }, 1000);
            }
        });
    }

