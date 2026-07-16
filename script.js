/**
 * Luxury Romantic Github Master Application Engine
 * Optimized for High Performance Rendering, Canvas Processing, & Spatial Layout Math
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // Target Initialization Epoch (22 February 2026, 1:32 AM)
    const TARGET_DATE = new Date(2026, 1, 22, 1, 32, 0);

    // Letter Content Database Array
    const NARRATIVE_MESSAGE = `Dear Babu ❤️,\n\nPata nahi kaise shuru karu...\nBas itna jaanta hoon...\nJab se tum meri life mein aayi ho,\nmeri duniya aur bhi khoobsurat lagne lagi hai.\n\nMain har second tumhare baare mein sochta hoon.\nKabhi tumhari smile.\nKabhi tumhari aankhein.\nKabhi tumhari hasi.\nKabhi tumhari awaaz.\nAur kabhi sirf tum...\n\nTum meri happiness ho.\nTum meri peace ho.\nTum meri favourite person ho.\nHar din main bas yehi dua karta hoon ki tum hamesha muskuraati raho.\n\nMain perfect nahi hoon...\nPar tumse bahut pyaar karta hoon.\nAur hamesha karta rahunga.\n\nThank you meri life mein aane ke liye.\n\nI Love You So Much Babu ❤️\n\nForever Yours,\nAnurag ❤️`;

    // System Cache Nodes
    const bgMusic = document.getElementById("bgMusic");
    const musicToggle = document.getElementById("musicToggle");
    const volumeSlider = document.getElementById("volumeSlider");
    const iconPlay = musicToggle.querySelector(".icon-play");
    const iconPause = musicToggle.querySelector(".icon-pause");
    
    const starsLayer = document.getElementById("starsLayer");
    const envelopeWrapper = document.getElementById("envelopeWrapper");
    const landingStage = document.getElementById("landingStage");
    const narrativeStage = document.getElementById("narrativeStage");
    const typewriterOutput = document.getElementById("typewriterOutput");
    const extendedExperience = document.getElementById("extendedExperience");
    
    const valYears = document.getElementById("valYears");
    const valMonths = document.getElementById("valMonths");
    const valDays = document.getElementById("valDays");
    const valHours = document.getElementById("valHours");
    const valMinutes = document.getElementById("valMinutes");
    const valSeconds = document.getElementById("valSeconds");
    
    const surpriseTrigger = document.getElementById("surpriseTrigger");
    const infinityClimax = document.getElementById("infinityClimax");
    const fxCanvas = document.getElementById("fxCanvas");
    const ctx = fxCanvas.getContext("2d");

    // Interactive Particle Array Vectors
    let canvasParticles = [];
    let isClimaxActive = false;
    let canvasAnimationId = null;

    /* --- Procedural Celestial Environment Initialization --- */
    function initSkySystem() {
        const starCount = 120;
        const fragment = document.createDocumentFragment();
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement("div");
            star.style.position = "absolute";
            star.style.width = `${Math.random() * 2.5 + 0.5}px`;
            star.style.height = star.style.width;
            star.style.background = "#ffffff";
            star.style.borderRadius = "50%";
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            
            // Randomize organic opacity & animation cycles
            star.style.opacity = Math.random();
            star.style.animation = `linearFadeIn ${Math.random() * 3 + 2}s ease-in-out infinite alternate`;
            
            // Inline injection for keyframe variance injection without writing custom runtime keyframes
            star.animate([
                { opacity: 0.2 }, { opacity: 1.0 }
            ], {
                duration: Math.random() * 3000 + 1500,
                iterations: Infinity,
                direction: 'alternate'
            });

            fragment.appendChild(star);
        }
        starsLayer.appendChild(fragment);
    }

    /* --- Audio Media Engine Interface Controls --- */
    function toggleAudioPlayback() {
        if (bgMusic.paused) {
            bgMusic.play().then(() => {
                iconPlay.classList.add("hidden");
                iconPause.classList.remove("hidden");
            }).catch(err => console.log("Autoplay restriction intercepted initialization: ", err));
        } else {
            bgMusic.pause();
            iconPlay.classList.remove("hidden");
            iconPause.classList.add("hidden");
        }
    }

    musicToggle.addEventListener("click", toggleAudioPlayback);
    volumeSlider.addEventListener("input", (e) => {
        bgMusic.volume = e.target.value;
    });

    // Attempt structural execution of context safe Autoplay
    window.addEventListener("click", function attemptAutoplayInitialization() {
        if(bgMusic.paused && !isClimaxActive) {
            bgMusic.volume = volumeSlider.value;
            bgMusic.play().then(() => {
                iconPlay.classList.add("hidden");
                iconPause.classList.remove("hidden");
            }).catch(() => {});
        }
        window.removeEventListener("click", attemptAutoplayInitialization);
    });

    /* --- Mechanical Envelope Animation Sequencing --- */
    envelopeWrapper.addEventListener("click", () => {
        const envelope = envelopeWrapper.querySelector(".envelope");
        if (envelope.classList.contains("open")) return; // Prevent double trigger reset execution
        
        envelope.classList.add("open");
        
        // Execute cascading stage presentation
        setTimeout(() => {
            landingStage.classList.add("hidden");
            
            setTimeout(() => {
                landingStage.style.display = "none";
                narrativeStage.classList.remove("hidden");
                executeTypewriterEffect(NARRATIVE_MESSAGE, 0);
            }, 1000);
        }, 1600);
    });

    /* --- Asynchronous Matrix Typewriter Execution Engine --- */
    function executeTypewriterEffect(text, index) {
        if (index < text.length) {
            typewriterOutput.textContent += text.charAt(index);
            
            // Smooth natural scroll lock to preserve focus during flow insertion
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });

            // Variable dynamic delay system mimicking human typing pauses
            let currentDelay = 45;
            const char = text.charAt(index);
            if (char === '.' || char === '!' || char === '❤️') currentDelay = 400;
            if (char === '\n') currentDelay = 500;

            setTimeout(() => {
                executeTypewriterEffect(text, index + 1);
            }, currentDelay);
        } else {
            // Processing terminal text completion -> Reveal Auxiliary Data Matrix
            setTimeout(() => {
                extendedExperience.classList.remove("hidden");
                initializeChronometerMatrix();
                window.scrollTo({ top: extendedExperience.offsetTop, behavior: 'smooth' });
            }, 800);
        }
    }

    /* --- Chronometer Chronological Math Calculation Engine --- */
    function initializeChronometerMatrix() {
        function computeTemporalMetrics() {
            const now = new Date();
            let differenceMs = now - TARGET_DATE;

            if (differenceMs < 0) differenceMs = 0; // Negative safety clamp

            // Core total conversion primitives
            let totalSeconds = Math.floor(differenceMs / 1000);
            let totalMinutes = Math.floor(totalSeconds / 60);
            let totalHours = Math.floor(totalMinutes / 60);
            
            // Sophisticated calendar calendar alignment (Dynamic relative calendar indexing)
            let calculatedYears = now.getFullYear() - TARGET_DATE.getFullYear();
            let calculatedMonths = now.getMonth() - TARGET_DATE.getMonth();
            let calculatedDays = now.getDate() - TARGET_DATE.getDate();

            if (calculatedDays < 0) {
                // Borrow trailing days from previous month cycle
                const previousMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
                calculatedDays += previousMonthEnd;
                calculatedMonths--;
            }
            if (calculatedMonths < 0) {
                calculatedMonths += 12;
                calculatedYears--;
            }

            // Time segment extractions
            const renderHours = now.getHours() - TARGET_DATE.getHours();
            const renderMinutes = now.getMinutes() - TARGET_DATE.getMinutes();
            const renderSeconds = now.getSeconds() - TARGET_DATE.getSeconds();
            
            // Format mapping
            let displayHours = now.getHours() - TARGET_DATE.getHours();
            let displayMinutes = now.getMinutes() - TARGET_DATE.getMinutes();
            let displaySeconds = now.getSeconds() - TARGET_DATE.getSeconds();
            
            // Recalculate component segments dynamically mapping modular operational remainders
            const targetTotalHours = Math.floor(differenceMs / (1000 * 60 * 60));
            const finalHours = targetTotalHours % 24;
            const finalMinutes = Math.floor(differenceMs / (1000 * 60)) % 60;
            const finalSeconds = Math.floor(differenceMs / 1000) % 60;

            // DOM Insertion Vector Mapping Matrix
            valYears.textContent = String(calculatedYears).padStart(2, "0");
            valMonths.textContent = String(calculatedMonths).padStart(2, "0");
            valDays.textContent = String(calculatedDays).padStart(2, "0");
            valHours.textContent = String(finalHours).padStart(2, "0");
            valMinutes.textContent = String(finalMinutes).padStart(2, "0");
            valSeconds.textContent = String(finalSeconds).padStart(2, "0");
        }

        computeTemporalMetrics();
        setInterval(computeTemporalMetrics, 1000);
    }

    /* --- High Performance Modular Particle & FX Overlay System --- */
    function resizeCanvasMatrix() {
        fxCanvas.width = window.innerWidth;
        fxCanvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvasMatrix);
    resizeCanvasMatrix();

    class ParticleAsset {
        constructor(x, y, variant) {
            this.x = x;
            this.y = y;
            this.variant = variant; // 'rose' | 'heart' | 'sparkle' | 'firework'
            this.size = Math.random() * 12 + 6;
            this.speedX = Math.random() * 4 - 2;
            this.speedY = Math.random() * -3 - 1;
            this.gravity = 0.04;
            this.opacity = 1;
            this.decay = Math.random() * 0.015 + 0.005;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotationVelocity = Math.random() * 0.04 - 0.02;
            this.color = this.assignColorProfile();
        }

        assignColorProfile() {
            const hues = ["#ff1493", "#db7093", "#ff69b4", "#f3e5ab", "#da70d6", "#8a2be2"];
            return hues[Math.floor(Math.random() * hues.length)];
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.rotation += this.rotationVelocity;
            
            if (this.variant === 'firework') {
                this.speedY += this.gravity * 2; // heavier fallback drop
            } else {
                this.speedY += this.gravity;
            }
            
            this.opacity -= this.decay;
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.globalAlpha = this.opacity;

            if (this.variant === 'heart') {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.moveTo(0, 0);
                // Vector geometry construction pathing for high performance vector shapes on context2d
                ctx.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size, 0, 0, this.size);
                ctx.bezierCurveTo(this.size, 0, this.size / 2, -this.size / 2, 0, 0);
                ctx.fill();
            } else if (this.variant === 'rose') {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
                ctx.fill();
            } else { // Sparkle / Firework structural vector nodes
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;
                ctx.fillRect(-this.size/4, -this.size/4, this.size/2, this.size/2);
            }
            ctx.restore();
        }
    }

    // Ambient Environmental Particle Injections
    function injectAmbientFoliage() {
        if (canvasParticles.length < 60) {
            const variantOptions = ['rose', 'heart', 'sparkle'];
            const chosenVariant = variantOptions[Math.floor(Math.random() * variantOptions.length)];
            const randomX = Math.random() * fxCanvas.width;
            
            const spawnedParticle = new ParticleAsset(randomX, -20, chosenVariant);
            spawnedParticle.speedY = Math.random() * 2 + 1; // force descent state
            canvasParticles.push(spawnedParticle);
        }
    }

    function triggerFireworkExplosionMatrix() {
        const structuralCenterX = Math.random() * (fxCanvas.width * 0.6) + (fxCanvas.width * 0.2);
        const structuralCenterY = Math.random() * (fxCanvas.height * 0.4) + (fxCanvas.height * 0.15);
        const particleBlastCount = Math.random() * 40 + 40;

        for (let i = 0; i < particleBlastCount; i++) {
            const fxNode = new ParticleAsset(structuralCenterX, structuralCenterY, 'firework');
            const radianAngle = (Math.PI * 2 / particleBlastCount) * i + Math.random();
            const magnitudeSpeed = Math.random() * 6 + 2;
            
            fxNode.speedX = Math.cos(radianAngle) * magnitudeSpeed;
            fxNode.speedY = Math.sin(radianAngle) * magnitudeSpeed;
            fxNode.decay = Math.random() * 0.02 + 0.01;
            canvasParticles.push(fxNode);
        }
    }

    function globalFXRenderLoop() {
        ctx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);
        
        // Context generation for continuous atmospheric falling elements
        if (Math.random() < 0.15) injectAmbientFoliage();
        if (isClimaxActive && Math.random() < 0.04) triggerFireworkExplosionMatrix();

        for (let i = canvasParticles.length - 1; i >= 0; i--) {
            canvasParticles[i].update();
            canvasParticles[i].draw();
            
            if (canvasParticles[i].opacity <= 0) {
                canvasParticles.splice(i, 1);
            }
        }

        canvasAnimationId = requestAnimationFrame(globalFXRenderLoop);
    }

    /* --- Climax Trigger Execution Handler --- */
    surpriseTrigger.addEventListener("click", () => {
        isClimaxActive = true;
        
        // Double burst initialization sequence execution
        triggerFireworkExplosionMatrix();
        setTimeout(triggerFireworkExplosionMatrix, 350);
        setTimeout(triggerFireworkExplosionMatrix, 700);

        infinityClimax.classList.remove("hidden");
        
        surpriseTrigger.style.transform = "scale(0.9)";
        surpriseTrigger.style.opacity = "0";
        setTimeout(() => { surpriseTrigger.style.display = "none"; }, 400);

        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }, 300);
    });

    // Run Critical Systems Preload Architecture Loop
    initSkySystem();
    globalFXRenderLoop();
});