
    function generate(){
    //创建一个新的canvas
    var canvas2 = document.createElement("canvas");
    let _canvas = document.querySelector(".preview");
    //_canvas.setAttribute("crossOrigin",'Anonymous');
    var w = parseInt(window.getComputedStyle(_canvas).width);
    var h = parseInt(window.getComputedStyle(_canvas).height);
    //将canvas画布放大,使图片更清晰
    canvas2.width = w*1.5;
    canvas2.height = h*1.5 ;
    console.log(w);
    canvas2.style.width = w + "px";
    canvas2.style.height = h + "px";
    //scale（纵向变大，横向变大）
    //var context = canvas2.getContext("2d");
    //context.scale(1, 1);
    html2canvas(document.querySelector(".preview"),{ canvas: canvas2 }).then(function(canvas) {
        document.querySelector(".download").setAttribute('href', canvas.toDataURL('image/png', 1.0));
        var e= new MouseEvent('click');
    document.querySelector(".download").dispatchEvent(e);
    });
    }