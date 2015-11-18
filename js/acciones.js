// JavaScript Document
$(document).ready(function(e) {
	function consulta()
	{
		datos="";
		$.ajax({
			type: "POST",
			url: "192.168.1.30/procesar.php",
			data: datos
	}).done(function(mensaje){
		alert(mensaje);
	}); 
	}
document.addEventListener("deviceready",function(){
$("#btnconsulta").on("tap",function(){
alert("preguntando...");
consulta();
});
}); 
});

