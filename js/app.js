/* Creado por Carla Puigdellivol*/
/* Creado en Febrero 2022*/


	var scroll = document.getElementById("top");

	window.addEventListener("scroll", function(){
		// scroll.style.transform = "rotate("+window.pageYOffset+"deg)";
		scroll.style.transform = window.pageYOffset;
		// opcio de no girar

		// +window.pageYOffset se desplaze en alias en scroll en Y:  me mueva en rotacion el logo y va coger los 360º
		// 10000px dara vueltas como un loco perdido
	})