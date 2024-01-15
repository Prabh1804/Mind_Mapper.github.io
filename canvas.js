		let canvas = document.querySelector(".canvas1");
		let ctx = canvas.getContext('2d');
		let particleArray = [];

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		class Particle{
			constructor(){
				this.x = Math.random()*canvas.width;
				this.y = (Math.random()*0.6)*canvas.height;
				this.size = Math.random()*2 + 3.5;
				this.speedX = -7;					
				this.speedY = 7;
			}
			update(){
				this.x += this.speedX;
				this.y += this.speedY;
			}
			draw(){
				ctx.fillStyle = `rgba(255,255,255,0.5)`;
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		function adder(){
			for(let i = 0; i < 23; i++){
				particleArray.push(new Particle());
			}
		}
		adder();

		let currentIndex = Math.floor(Math.random()*23);

		function handle(){
			for(let i = 0; i < particleArray.length; i++){
				particleArray[i].draw();
			}

		particleArray[currentIndex].update();

		if(particleArray[currentIndex].y > canvas.height){
			particleArray[currentIndex].x = Math.random()*canvas.width;
			particleArray[currentIndex].y = (Math.random()*0.6)*canvas.height;
			currentIndex = (currentIndex + 1) % particleArray.length;
			}
		}
						
		function animate(){
			let grad = ctx.createLinearGradient(0,0,0,canvas.height);
			grad.addColorStop(0, "rgba(0,0,0,0.01)");
			grad.addColorStop(1, "rgba(30,30,50,1)");
					
			ctx.fillStyle = grad;				//vanishes previous symbol {Trick}
   		       ctx.fillRect(0, 0, canvas.width, canvas.height); // Clear the canvas
   			handle();
			requestAnimationFrame(animate);
		}
		animate();
