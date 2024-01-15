let submit = document.getElementsByClassName("btn1")[0];
submit.addEventListener("click", e =>{
	submit.remove();				
	let buttoninput1 = document.createElement("input");
	buttoninput1.type = "number";
	buttoninput1.min = "0";
	buttoninput1.max = "4";
	buttoninput1.step = "1";
	buttoninput1.name = "newinput1"
	buttoninput1.classList.add("numberclass");
	document.querySelector(".grid_container_top").appendChild(buttoninput1);
	let number_button1= document.createElement("button");
	number_button1.classList.add("btn2");
	document.querySelector(".grid_container_top").appendChild(number_button1);
},{once: true});

let line = document.querySelector(".line");
let variable = false;
let x;
		
document.addEventListener("click",e =>{
if(e.target.classList.contains("btn2")){
let a0 = document.querySelector(".btn2");
a0.remove();
		
x = document.querySelector("[name='newinput1']");
if(x){
if(x.value < 5){
let y = x.value;
for(let i=0; i < y; i++){
	let some = document.createElement("input");
	let btn = document.createElement("button");
	some.classList.add("secsome"+i);
	some.classList.add("some");
	btn.classList.add("btn"+i+3);
			
	let somediv = document.createElement("div");
	somediv.classList.add("somediv"+i);
	somediv.appendChild(some);
	somediv.appendChild(btn);
				
	document.querySelector(".additional_div").appendChild(somediv);

	let lsidiv = document.querySelector(".lsi_div");
	let adddiv = document.querySelector(".additional_div");
	lsidiv.appendChild(adddiv);	

}}
	variable = x.value;
	let i0 = document.querySelector(".numberclass");
	i0.remove();
}}
    				
else if(e.target.classList.contains("btn03")){
	let z0 = document.querySelector(".btn03");
	z0.remove();
				
	let inputbtn = document.createElement("input");
	inputbtn.type = "number";
	inputbtn.min = 0;
	inputbtn.max = 4;
	inputbtn.step = 1;
	inputbtn.name = "inputbtn0";
	inputbtn.classList.add("inputbtn0");
	document.querySelector(".somediv0").appendChild(inputbtn);
				
	let ipnumbtn = document.createElement("button");
	ipnumbtn.type = "submit";
	ipnumbtn.classList.add("ipnumbtn");
	ipnumbtn.classList.add("ipnumbtn0");
	document.querySelector(".somediv0").appendChild(ipnumbtn);
				}
else if(e.target.classList.contains("btn13")){
	let z1 = document.querySelector(".btn13");
	z1.remove();
				
	let inputbtn = document.createElement("input");
	inputbtn.type = "number";
	inputbtn.min = 0;
	inputbtn.max = 4;
	inputbtn.step = 1;
	inputbtn.name = "inputbtn1";
	inputbtn.classList.add("inputbtn1");
	document.querySelector(".somediv1").appendChild(inputbtn);

	let ipnumbtn = document.createElement("button");
	ipnumbtn.type = "submit";
	ipnumbtn.classList.add("ipnumbtn");
	ipnumbtn.classList.add("ipnumbtn1");
	document.querySelector(".somediv1").appendChild(ipnumbtn);				
	}
else if(e.target.classList.contains("btn23")){
	let z2 = document.querySelector(".btn23");
	z2.remove();
			
	let inputbtn = document.createElement("input");
	inputbtn.type = "number";
	inputbtn.min = 0;
	inputbtn.max = 4;
	inputbtn.step = 1;
	inputbtn.name = "inputbtn2";
	inputbtn.classList.add("inputbtn2");
	document.querySelector(".somediv2").appendChild(inputbtn);				

	let ipnumbtn = document.createElement("button");
	ipnumbtn.type = "submit";
	ipnumbtn.classList.add("ipnumbtn");
	ipnumbtn.classList.add("ipnumbtn2");
	document.querySelector(".somediv2").appendChild(ipnumbtn);
	}
else if(e.target.classList.contains("btn33")){
	let z3 = document.querySelector(".btn33");
	z3.remove();
				
	let inputbtn = document.createElement("input");
	inputbtn.type = "number";
	inputbtn.min = 0;
	inputbtn.max = 4;
	inputbtn.step = 1;
	inputbtn.name = "inputbtn3";
	inputbtn.classList.add("inputbtn3");
	document.querySelector(".somediv3").appendChild(inputbtn);				

	let ipnumbtn = document.createElement("button");
	ipnumbtn.type = "submit";
	ipnumbtn.classList.add("ipnumbtn");
	ipnumbtn.classList.add("ipnumbtn3");
	document.querySelector(".somediv3").appendChild(ipnumbtn);
	}
else if(e.target.classList.contains("ipnumbtn0")){
	let c = document.querySelector(".ipnumbtn0");
	c.remove();
				
	let a1 = document.querySelector("[name='inputbtn0']");
	if(a1){
	if(a1.value < 5){
		let a2 = a1.value;
		for(let i = 0; i < a2; i++){
			let some2 = document.createElement("input");
		//	let bttn = document.createElement("button");
			some2.classList.add("some2");
		//	bttn.classList.add("bttn0"+i);

			let somediv2 = document.createElement("div");
			somediv2.classList.add("somediv2"+i);
			somediv2.appendChild(some2);
		//	somediv2.appendChild(bttn);

			document.querySelector(".somediv0").appendChild(somediv2);
		}}
		let i0 = document.querySelector(".inputbtn0");
		i0.remove();
	}
}
			else if(e.target.classList.contains("ipnumbtn1")){
				let c = document.querySelector(".ipnumbtn1");
				c.remove();
				
				let a1 = document.querySelector("[name='inputbtn1']");
				if(a1){
				if(a1.value < 5){
					let a2 = a1.value;
					for(let i = 0; i < a2; i++){
						let some2 = document.createElement("input");
					//	let bttn = document.createElement("button");
						some2.classList.add("some2");
					//	bttn.classList.add("bttn1"+i);

						let somediv2 = document.createElement("div");
						somediv2.classList.add("somediv3"+i);
						somediv2.appendChild(some2);
					//	somediv2.appendChild(bttn);

						document.querySelector(".somediv1").appendChild(somediv2);
					}}
					let i0 = document.querySelector(".inputbtn1");
					i0.remove();
				}
			}
			else if(e.target.classList.contains("ipnumbtn2")){
				let c = document.querySelector(".ipnumbtn2");
				c.remove();
				
				let a1 = document.querySelector("[name='inputbtn2']");
				if(a1){
				if(a1.value < 5){
					let a2 = a1.value;
					for(let i = 0; i < a2; i++){
						let some2 = document.createElement("input");
					//	let bttn = document.createElement("button");
						some2.classList.add("some2");
					//	bttn.classList.add("bttn2"+i);

						let somediv2 = document.createElement("div");
						somediv2.classList.add("somediv4"+i);
						somediv2.appendChild(some2);
					//	somediv2.appendChild(bttn);

						document.querySelector(".somediv2").appendChild(somediv2);
					}}
					let i0 = document.querySelector(".inputbtn2");
					i0.remove();
				}
			}
			else if(e.target.classList.contains("ipnumbtn3")){
				let c = document.querySelector(".ipnumbtn3");
				c.remove();
				
				let a1 = document.querySelector("[name='inputbtn3']");
				if(a1){
				if(a1.value < 5){
					let a2 = a1.value;
					for(let i = 0; i < a2; i++){
						let some2 = document.createElement("input");
					//	let bttn = document.createElement("button");
						some2.classList.add("some2");
					//	bttn.classList.add("bttn3"+i);

						let somediv2 = document.createElement("div");
						somediv2.classList.add("somediv5"+i);
						somediv2.appendChild(some2);
					//	somediv2.appendChild(bttn);

						document.querySelector(".somediv3").appendChild(somediv2);
					}}
					let i0 = document.querySelector(".inputbtn3");
					i0.remove();
				}
			}					
			});
			document.addEventListener("keydown",e=>{
			 let inputtop = document.querySelector(".input1");
			 let numbertop = document.querySelector(".numberclass");
			 let inputuppermid = document.querySelector(".some");
			 let numberuppermid = document.querySelector(".inputbtn");
				if(e.target.classList.contains("numberclass")){
					if(e.key=="Enter"){
						e.target.blur();
					}
				}
				else if(e.target.classList.contains("input1")){
					if(e.key=="Enter"){
						e.target.blur();
					}
				}
				else if(e.target.classList.contains("some")){
					if(e.key=="Enter"){
						e.target.blur();
					}
				}
				else if(e.target.classList.contains("inputbtn")){
					if(e.key=="Enter"){
						e.target.blur();
					}
				}
			});
			document.addEventListener("click", e =>{
				let input1 = document.querySelector(".input1");
				let rect1 = input1.getBoundingClientRect();
				let joinline = ``;
				
				if(variable >= 1){
				
					let inputtrail = document.querySelector(".secsome0");
					let recttrail = inputtrail.getBoundingClientRect();
					path1 = `<path d = " M ${rect1.left + rect1.width/2},${rect1.bottom - 1} L ${recttrail.right - recttrail.width/2},${recttrail.top + 1} " stroke="#88188c" stroke-width="3" filter="blur(1.3px)"/>`;
					joinline += path1;
				};
				if(variable > 1){
					let inputtrail1 = document.querySelector(".secsome1");
					let recttrail1 = inputtrail1.getBoundingClientRect();
					path2 = `<path d = " M ${rect1.left + rect1.width/2},${rect1.bottom - 1} L ${recttrail1.right - recttrail1.width/2},${recttrail1.top + 1} " stroke="#88188c" stroke-width="3" filter="blur(1.3px)"/>`;
					joinline += path2;
				};
				if(variable > 2){
					let inputtrail2 = document.querySelector(".secsome2");
					let recttrail2 = inputtrail2.getBoundingClientRect();
					path3 = `<path d = " M ${rect1.left + rect1.width/2},${rect1.bottom - 1} L ${recttrail2.right - recttrail2.width/2},${recttrail2.top + 1} " stroke="#88188c" stroke-width="3" filter="blur(1.3px)"/>`;
					joinline += path3;
				};
				if(variable > 3){
					let inputtrail3 = document.querySelector(".secsome3");
					let recttrail3 = inputtrail3.getBoundingClientRect();
					path4 = `<path d = " M ${rect1.left + rect1.width/2},${rect1.bottom - 1} L ${recttrail3.right - recttrail3.width/2},${recttrail3.top + 1} " stroke="#88188c" stroke-width="3" filter="blur(1.3px)"/>`;
					joinline += path4;
				};
				line.innerHTML = joinline;
			});
