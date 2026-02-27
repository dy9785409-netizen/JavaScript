<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>ajax </title>
	<script>
		function loadAbout() {
			var req=new XMLHttpRequest();
			req.open("GET","about.html");
			req.onreadystatechange=function()
			{
				if(req.readyState==4&&req.status==200)
				{
					document.getElementById('about').innerHTML=req.responseText;
				}

			}
			req.send();
		}
	</script>
</head>
<body bgcolor="lightcyan">
<h1>This is example of ajax technology..</h1>
<hr>
<h2>Welcome to the website using the ajazx</h2>
<h3><a href="about.html">Goto about page</a></h3>
	<button onclick="loadAbout()">Load about</button>
	<div id="about">
		
	</div>
</body>
</html>