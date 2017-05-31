/*
 * Archivo principal de funcionalidad de JS
 */
(function main(){
	var boxes = Array.from(document.getElementsByClassName("box-services"));
	var modal = document.getElementById("box-services-modal");
	var bodyModal, close, img;

	boxes.forEach(function(box){
		box.addEventListener("click", function(){
			modal.innerHTML = "";
			bodyModal = document.createElement("div");
			bodyModal.classList.add("modal-body");
			bodyModal.innerHTML = box.innerHTML;			
			modal.appendChild(bodyModal);
			modal.classList.remove("hide");
			close = document.createElement("div");
			close.classList.add("close");
			img = document.createElement("img");
			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
			close.appendChild(img);
			modal.appendChild(close);
			close.addEventListener("click",function(){
				modal.classList.add("hide");
			});
		});		
	});
})();
/*modal-body ---> bodyDiv 
modal ----> div
boxes ---> col4*/
(function imgModal(){
	var col4 = Array.from(document.getElementsByClassName("col-4"));
	var div = document.getElementById("imgproductos");
	var bodyDiv, close,img;

	col4.forEach(function(col){
		col.addEventListener("click", function(){
			div.innerHTML = "";
			bodyDiv = document.createElement("div");
			bodyDiv.classList.add("body-div");
			bodyDiv.innerHTML = col.innerHTML;
			div.appendChild(bodyDiv);
			div.classList.remove("hide");
			close = document.createElement("div");
			close.classList.add("close");
			img = document.createElement("img");
			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
			close.appendChild(img);
			div.appendChild(close);
			close.addEventListener("click", function(){
				div.classList.add("hide");
			})
		})
	})
})