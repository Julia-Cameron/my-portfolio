import { useEffect, useRef } from 'react';

const StarryBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let stars = [];
        const mouse = { x: null, y: null, radius: 180 };

        const resizeCanvas = () => {
            const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 3);
            canvas.width = window.innerWidth * devicePixelRatio;
            canvas.height = window.innerHeight * devicePixelRatio;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
            initializeStars();
        };

        const initializeStars = () => {
            const numberOfStars = Math.max(140, Math.floor((window.innerWidth * window.innerHeight) / 6500));
            stars = Array.from({ length: numberOfStars }, () => ({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                baseX: 0,
                baseY: 0,
                size: Math.random() * 2.2 + 1,
                alpha: Math.random() * 0.55 + 0.4,
                twinkleSpeed: Math.random() * 0.002 + 0.001,
                phase: Math.random() * Math.PI * 2,
            }));

            stars.forEach(star => {
                star.baseX = star.x;
                star.baseY = star.y;
            });
        };

        const handleMouseMove = event => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        const handleMouseOut = event => {
            if (event.relatedTarget === null) {
                mouse.x = null;
                mouse.y = null;
            }
        };

        const updateStar = (star, time) => {
            star.alpha = Math.max(0.25, Math.min(1, star.alpha + Math.sin(time * star.twinkleSpeed + star.phase) * 0.008));

            if (mouse.x !== null && mouse.y !== null) {
                const distanceX = mouse.x - star.x;
                const distanceY = mouse.y - star.y;
                const distance = Math.hypot(distanceX, distanceY);

                if (distance > 0 && distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    star.x += (distanceX / distance) * force * 5;
                    star.y += (distanceY / distance) * force * 5;
                    return;
                }
            }

            star.x += (star.baseX - star.x) * 0.05;
            star.y += (star.baseY - star.y) * 0.05;
        };

        const drawStar = star => {
            const haloRadius = star.size * 3;
            const halo = ctx.createRadialGradient(
                star.x,
                star.y,
                0,
                star.x,
                star.y,
                haloRadius,
            );
            halo.addColorStop(0, `rgba(56, 189, 248, ${star.alpha * 0.2})`);
            halo.addColorStop(0.35, `rgba(56, 189, 248, ${star.alpha * 0.06})`);
            halo.addColorStop(1, 'rgba(56, 189, 248, 0)');

            ctx.fillStyle = halo;
            ctx.beginPath();
            ctx.arc(star.x, star.y, haloRadius, 0, Math.PI * 2);
            ctx.fill();

            const outerRadius = star.size;
            const innerRadius = star.size * 0.28;
            ctx.fillStyle = `rgba(248, 250, 252, ${star.alpha})`;
            ctx.beginPath();
            for (let point = 0; point < 8; point += 1) {
                const angle = -Math.PI / 2 + point * Math.PI / 4;
                const radius = point % 2 === 0 ? outerRadius : innerRadius;
                const pointX = star.x + Math.cos(angle) * radius;
                const pointY = star.y + Math.sin(angle) * radius;

                if (point === 0) {
                    ctx.moveTo(pointX, pointY);
                } else {
                    ctx.lineTo(pointX, pointY);
                }
            }
            ctx.closePath();
            ctx.fill();
        };

        const drawMagneticField = () => {
            if (mouse.x === null || mouse.y === null) {
                return;
            }

            const field = ctx.createRadialGradient(
                mouse.x,
                mouse.y,
                0,
                mouse.x,
                mouse.y,
                mouse.radius,
            );
            field.addColorStop(0, 'rgba(56, 189, 248, 0.16)');
            field.addColorStop(0.45, 'rgba(56, 189, 248, 0.06)');
            field.addColorStop(1, 'rgba(56, 189, 248, 0)');

            ctx.save();
            ctx.fillStyle = field;
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        };

        const animate = time => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            drawMagneticField();
            stars.forEach(star => {
                updateStar(star, time);
                drawStar(star);
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);
        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            style={{
                position: 'fixed',
                inset: 0,
                display: 'block',
                width: '100vw',
                height: '100vh',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
};

export default StarryBackground;