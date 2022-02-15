process.stdout.write("Please enter your name: ");

process.stdin.on(

	'readable',

    () => {
		const chunk = process.stdin.read();
		if (chunk !== null) {
			 console.log(chunk) // <Buffer 73 64 66 61 73 0a>
			 console.log("the captured value is: " + chunk.toString())
			 process.stdout.write("Hello " + chunk)
		}

	}

)