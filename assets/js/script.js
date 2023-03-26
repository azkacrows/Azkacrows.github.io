$(function () {
    var canvas = $("#c")[0];
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.strokeStyle = "rgba(255, 255, 255,0.2)";
        ctx.lineWidth = 1;
        ctx.lineCap = "round";
        var maxParts = 1000;
        var particles = Array.from({ length: maxParts }, () => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, l: Math.random(), xs: -4 + Math.random() * 6, ys: Math.random() * 10 + 10 }));
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                ctx.stroke();
            });
            move();
        }
        function move() {
            particles.forEach((p) => {
                p.x += p.xs;
                p.y += p.ys;
                if (p.x > canvas.width || p.y > canvas.height) {
                    p.x = Math.random() * canvas.width;
                    p.y = -20;
                }
            });
        }
        setInterval(draw, 40);
    }
});
