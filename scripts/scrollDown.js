function scrollbottom(timedelay=6){
    var scrollId;
        var height = 0;
        var minScrollHeight = 15;
        scrollId = setInterval(function () {
            if (height <= document.body.scrollHeight) {
                window.scrollBy(0, minScrollHeight);
            }
            else {
                clearInterval(scrollId);
            }
            height += minScrollHeight;
        }, timedelay);           
    }
