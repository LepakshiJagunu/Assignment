<html>
	<head>
		<title>Day1 Assignment</title>
	</head>
		<body>
			<script type="text/javascript">

			a = 0
			b = 0
			  for(i=1; i<=100; i++){
			    a++;
			    b++;
			    let s=" "
			    if(a == 3){
			      s += "Fizz"
			      a=1-1
			    }
			    if(b == 5){
			      s += "Buzz"
			      b=1-1
			    }
			    if(s!=" "){
			      console.log(s)
			    }
			    else{
			      console.log(i)
			    }
			  }
			 </script>
		</body>
</html>
