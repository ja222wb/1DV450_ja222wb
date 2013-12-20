function toggle(clickedObject)
  
{
	var collapable; 
	var parent = clickedObject.parentNode;
	
	for (var i = 0; i < parent.children.length; i++) {
		
		if (parent.children[i].className.indexOf("hidetable") >= 0) {
			collapable = parent.children[i];
			console.log(parent.children);
			break;	
		
			
		}
	}
	
	var e = collapable;

	if(e.className.indexOf("unhidden") >= 0) {
		e.className = "hidetable hidden";
	}
	
	else {
	
	e.className = "hidetable unhidden";
	
	}

}
