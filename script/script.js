

// input field show 
document.querySelectorAll(".btnClick").forEach(btn => {
    btn.addEventListener('click', function () {
        const span = btn.parentNode
            .querySelector(".edit-input-show");
        span.classList.remove('hidden') 
    })
    
});

// input field hidden 
document.querySelectorAll(".close-input").forEach(btn => {
	btn.addEventListener("click", function () {
		const span = btn.parentNode;
		span.classList.add("hidden");
	});
});


// change text 
document.querySelectorAll(".change-text-btn").forEach(btn => {
	btn.addEventListener("click", function () {
		// get Element where text will be change
        const changeTextElement = btn.parentNode.parentNode.querySelector(".change-text");
        // get input field wihch value will be replaced 
        const inputFieldElement = btn.parentNode.querySelector(
			".input-field-change"
		);
        // set innerText
        changeTextElement.innerText = inputFieldElement.value;
        // set input value null 
        inputFieldElement.value = '';

        // close the input field 
        const span = btn.parentNode;
        console.log(span);
        
        span.classList.add("hidden");
        
		
	});
});


// delate 
document.querySelectorAll(".delateBtnClick").forEach(btn => {
	btn.addEventListener("click", function () {
		// get Element where text will be change
		const changeTextElement =
			btn.parentNode.parentNode.querySelector(".change-text");
		// get input field wihch value will be replaced
		

		// delate child 
		const span = btn.parentNode.parentNode;
		span.removeChild(btn.parentNode);
	});
});


// append chiled 
document.querySelectorAll(".appendBtnClick").forEach(btn => {
    btn.addEventListener('click', function () {
        const appendParrent = btn.parentNode.querySelector(".appent-parrent");
        const span = document.createElement('span');
        span.classList.add("title-text");
        span.innerText = `Diploma in Computer Science`;
        appendParrent.appendChild(span);
        
        
    })
});


