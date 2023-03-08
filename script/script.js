

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




// append chiled 
document.querySelectorAll(".appendBtnClick").forEach(btn => {
    btn.addEventListener('click', function () {
        const parrent = btn.parentNode.parentNode.querySelector(".appent-parrent");
        
        
       const inputFieldElement = btn.parentNode.querySelector(
			".input-field-change"
        );
        
        const span = document.createElement('span');
        span.classList = 'relative  text-element';
        span.innerHTML = `<!-- edit btn  -->
										<i class="fa-regular fa-pen-to-square cursor-pointer eidt-btn btnClick ‍ absolute  -bottom-[10px] right-[12px]"></i>
										<!-- edit btn  -->

										<!-- delate btn  -->
										<i class="fa-solid fa-trash cursor-pointer eidt-btn delateBtnClick ‍ absolute -bottom-[10px] right-0"></i>
										<!-- delate btn  -->
										
											<!-- user name change  -->
											<span class="absolute right-0 z-50 -top-2 hidden flex items-center gap-1 edit-input-show" id="title-input-span">

												<!-- close btn to close the input -->
												<i class="fa-solid fa-square-xmark cursor-pointer text-red-600 
												close-input"></i>

												<!-- submit btn to replace the text  -->
												<i class="fa-solid fa-square-check text-green-600 cursor-pointer change-text-btn"></i>

												<input type="text" name="" id="user-input-element" class="bg-white rounded-sm shadow-[0_0_10px_1px_rgba(0,0,0,.2)] px-2 input-field-change">

											</span>
											
				

						<span class="title-text change-text">${inputFieldElement.value}</span>`;
        
										
        parrent.appendChild(span);

        del();    
    })
    
});

const del = () => {
	// delate
    const arr = document.querySelectorAll(".delateBtnClick");
    // console.log(arr);
    
    arr.forEach(btn => {

		btn.addEventListener("click", function () {
			// delate child
            const span = btn.parentNode.parentNode;
            span.removeChild(btn.parentNode);
            
		});
	});
}

 const arr = document.querySelectorAll(".delateBtnClick");
 // console.log(arr);

 arr.forEach(btn => {
		btn.addEventListener("click", function () {
			// delate child
			const span = btn.parentNode.parentNode;
			span.removeChild(btn.parentNode);
		});
 });