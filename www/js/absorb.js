Absorb = {
	LoadTemplate: function(path)
	{
		var req = new XMLHttpRequest();
	    req.open("GET", path, true);
	    req.onreadystatechange = function() 
	    {
	        if (req.readyState == 4) 
	        {
	            if (req.status == 200 || req.status == 0)
	            {
	            	$('#page').html(req.responseText);   
	            }
	        }
	    }
	    req.send();
	}
}