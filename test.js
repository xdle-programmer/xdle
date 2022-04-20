function anim(duration) {
    var temp;
    return function() {
        cancelAnimationFrame(temp);
        var start = performance.now();
        var from = 0;
        var to = 10000;

        requestAnimationFrame(function step(timestamp) {
            var progress = (timestamp - start) / duration;
            1 <= progress && (progress = 1);
            window.scrollTo(0, from + to * progress | 0);
            1 > progress && (temp = requestAnimationFrame(step))
        })
    }
};
var scrollMenu = anim(40000)

setTimeout(scrollMenu,5000)