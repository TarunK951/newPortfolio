import { useCallback, useEffect, useRef } from "react";

const CursorEffect = () => {
  const cursorEffectRef = useRef(null);
  const trail = useRef([]);
  const trailLength = 15;
  const animationFrameId = useRef(null);
  const rippleRefs = useRef(new Map());
  const localColorCycle = useRef([
    // Changed to localColorCycle
    "#00ffff", // Cyan
    "#ff00ff", // Magenta
    "#ffff00", // Yellow
    "#00ff00", // Green
    "#ff007f", // Rose
  ]);
  const currentColorIndex = useRef(0);

  const getNeonColor = useCallback((opacity, colorName) => {
    const hexToRgb = (hex) => {
      hex = hex.replace(/^#/, "");
      let a = hex.length === 3 ? hex.replace(/(.)/g, "$1$1") : hex;
      const bigint = parseInt(a, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r},${g},${b},${opacity})`;
    };
    return hexToRgb(colorName);
  }, []);

  useEffect(() => {
    const cursorEffectElement = document.createElement("div");
    cursorEffectElement.id = "cursor-effect";
    cursorEffectRef.current = cursorEffectElement;
    document.body.appendChild(cursorEffectElement);
    document.body.style.cursor = "none";

    // Apply styles directly to the cursorEffectElement
    Object.assign(cursorEffectElement.style, {
      position: "fixed",
      top: "0",
      left: "0",
      pointerEvents: "none",
      zIndex: "9999",
    });

    const updateCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      trail.current.push({
        x,
        y,
        time: Date.now(),
        angle: Math.random() * Math.PI * 2,
      });
      if (trail.current.length > trailLength) {
        trail.current.shift();
      }
      animateCursorEffect();
    };

    const animateCursorEffect = () => {
      if (!cursorEffectRef.current) return;
      cursorEffectRef.current.innerHTML = "";

      const currentNeonColor =
        localColorCycle.current[currentColorIndex.current]; // Use localColorCycle

      // Render the main sparkle
      const sparkle = document.createElement("div");
      sparkle.className = "star-sparkle";
      sparkle.style.left = `${
        trail.current[trail.current.length - 1]?.x || 0
      }px`;
      sparkle.style.top = `${
        trail.current[trail.current.length - 1]?.y || 0
      }px`;
      sparkle.style.backgroundColor = getNeonColor(1, currentNeonColor); // Use currentNeonColor
      sparkle.style.boxShadow = `0 0 20px ${getNeonColor(
        0.7,
        currentNeonColor
      )}, 0 0 30px ${getNeonColor(0.5, currentNeonColor)}`; // Use currentNeonColor

      // Apply styles directly
      Object.assign(sparkle.style, {
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        position: "absolute",
        transform: "translate(-50%, -50%)",
      });

      cursorEffectRef.current.appendChild(sparkle);

      // Render the tail segments
      for (let i = 0; i < trail.current.length - 1; i += 3) {
        const point = trail.current[i];
        if (!point) continue;
        const segment = document.createElement("div");
        segment.className = "star-tail-segment";
        segment.style.left = `${point.x}px`;
        segment.style.top = `${point.y}px`;
        const opacity = 0.5 * (1 - i / (trailLength - 1));
        const size = 18 * (0.4 + i / (2 * (trailLength - 1)));
        segment.style.backgroundColor = getNeonColor(opacity, currentNeonColor); // Use currentNeonColor
        segment.style.boxShadow = `0 0 12px ${getNeonColor(
          opacity * 0.3,
          currentNeonColor
        )}`; // Use currentNeonColor
        segment.style.width = `${size}px`;
        segment.style.height = `${size}px`;
        const angle = point.angle + i * 0.1;
        segment.style.transform = `translate(-50%, -50%) rotate(${angle}rad)`;

        // Apply styles directly
        Object.assign(segment.style, {
          borderRadius: "50%",
          position: "absolute",
        });

        cursorEffectRef.current.appendChild(segment);
      }

      // Remove old points
      const now = Date.now();
      trail.current = trail.current.filter((p) => now - p.time < 600);

      animationFrameId.current = requestAnimationFrame(animateCursorEffect);
    };

    const handleMouseClick = (e) => {
      const { clientX, clientY } = e;
      createRipple(clientX, clientY);
    };

    const createRipple = (x, y) => {
      const ripple = document.createElement("div");
      ripple.className = "ripple";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      const rippleId = Date.now();
      ripple.dataset.id = rippleId;

      // Apply styles directly
      Object.assign(ripple.style, {
        borderRadius: "50%",
        position: "fixed",
        zIndex: "9999",
        backgroundColor: "rgba(59,130,246,0.3)", // This color is fine, it's not from colorCycle
        boxShadow: "0 0 8px rgba(59,130,246,0.4)", // This color is fine, it's not from colorCycle
        width: "18px",
        height: "18px",
        animation: "ripple-effect 0.6s ease-out",
        pointerEvents: "none",
        border: `2px solid ${
          localColorCycle.current[currentColorIndex.current]
        }`, // Use localColorCycle
      });

      document.body.appendChild(ripple);
      rippleRefs.current.set(rippleId, ripple);

      setTimeout(() => {
        const rippleToRemove = rippleRefs.current.get(rippleId);
        if (rippleToRemove && document.body.contains(rippleToRemove)) {
          document.body.removeChild(rippleToRemove);
        }
        rippleRefs.current.delete(rippleId);
      }, 800);
    };

    const cycleColor = () => {
      currentColorIndex.current =
        (currentColorIndex.current + 1) % localColorCycle.current.length; // Use localColorCycle
    };

    document.addEventListener("mousemove", updateCursor);
    document.addEventListener("click", handleMouseClick);
    const colorIntervalId = setInterval(cycleColor, 2500);

    animateCursorEffect();

    return () => {
      document.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("click", handleMouseClick);
      clearInterval(colorIntervalId);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (
        cursorEffectRef.current &&
        document.body.contains(cursorEffectRef.current)
      ) {
        document.body.removeChild(cursorEffectRef.current);
      }
      document.body.style.cursor = "";
    };
  }, [getNeonColor]); // Removed colorCycle and currentColorIndex from dependency array
  return null;
};

export default CursorEffect;
