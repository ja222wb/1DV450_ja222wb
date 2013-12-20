	
	//namger ett id på dokumentet. I detta fallet blir det namnet bildspel. Jag koppar sedan in mitt id till mitt index. 
	
	var bildspel = document.getElementById("bildspel");
	
	//lägger in mina bilders url i en array
	var pic = ["http://www.bustler.net/images/news2/unit_fusion_housing_project_by_y_design_office_01_2.jpg","http://image.woshipm.com/wp-files/2013/09/518b48433fde0e581c1c09ad3058d35c.jpg", 		"http://evo-dev.net/wp-content/uploads/2013/11/design.jpg"]
	
	//namger en variabel till counter för att funkitionen skall hålla koll på bildbytet
	var counter = 0;
	var visabilden;
	
		function delay() {
			setInterval(function() {
								 display();



// för att inte funktionen skall ramla ur lådan och forstätta räkna måste jag ange hur den skall räkna. 
	if(counter < pic.length - 1){
		counter++;
		
					} else {
								counter = 0;
					}
	
	
	//tidintervallen 
		}, 5000);
		
	}
	
		function display(visabilden){
			displayPic = bildspel.src = pic[counter];
	
		};
		
		window.onload = delay();