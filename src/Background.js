import { createRef, useEffect, useRef } from 'react';

const NUM_TRAILS = 50;
const SIZE = 20;

const Background = () => {  
    const trailRefs = useRef([]);
    const lastMousePosition = useRef({ x: 0, y: 0 });
    const rAFIndex = useRef(0);
    
    function registerMousePosition({ clientX, clientY }) {
        lastMousePosition.current.x = clientX;
        lastMousePosition.current.y = clientY;
    }
  
    function drawCircles() {
        for (let i = 0; i < NUM_TRAILS; i++) {
            trailRefs.current.push(createRef());
        }
  
        return [...Array(NUM_TRAILS)].map((_, index) => {
            return (
            <div
                key={`circle${index}`}
                style={{ 
                    position: "fixed", 
                    visibility: 'hidden',
                    width: 0,
                    height: 0,
                    // borderRadius: '50%',
                    top: 0,
                    left: 0,
                    borderLeft: `${SIZE/2}px solid transparent`,
                    borderRight: `${SIZE/2}px solid transparent`,
                    borderBottom: `${SIZE}px solid #FF0000`
                }}
                ref={trailRefs.current[index]}
            />
            );
        });
    }
  
    function updateCollectedLettersPosition() {
        if(trailRefs.current.length >= NUM_TRAILS) {
            const mouseY = lastMousePosition.current.y - SIZE / 2 + 'px';
            const mouseX = lastMousePosition.current.x - SIZE / 2 + 'px';

            for (let i = 0; i < NUM_TRAILS; i++) {
                const style = trailRefs.current[i].current.style;
                if(style.top === mouseY && style.left === mouseX) {
                    trailRefs.current[i].current.style.visibility = 'hidden';
                } else{
                    trailRefs.current[i].current.style.visibility = 'visible';
                    if(i+1 === NUM_TRAILS) {
                        trailRefs.current[i].current.style.top = mouseY;
                        trailRefs.current[i].current.style.left = mouseX;
                    } else {
                        trailRefs.current[i].current.style.top = trailRefs.current[i+1].current.style.top;
                        trailRefs.current[i].current.style.left = trailRefs.current[i+1].current.style.left;
                    }
                }
            }
        }
    }
  
    useEffect(() => {
        try {
            function update() {
                rAFIndex.current = requestAnimationFrame(update);
                updateCollectedLettersPosition();
            }
    
            document.addEventListener("mousemove", registerMousePosition);
            document.addEventListener("touchmove", registerMousePosition);
            rAFIndex.current = requestAnimationFrame(update);
        } catch (e) {
            console.error(e);
        }
    }, []);


    return (
        <div 
            style={{ 
                position: 'fixed',
                top: 0,
                left: 0, 
                backgroundColor: '#000000', 
                height: '100vh', 
                width: '100vw',
                zIndex: -1
            }}
        >
            { drawCircles() }
        </div>
    )
}

export default Background;