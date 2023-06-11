const password = process.argv[2];

if (password === undefined) {
	console.log('SCRIPT: bcrypt');
	console.log('NAME: password-hash creator');
	console.log('-------------------------');
	console.log('EXAMPLE: npm run bcrypt mypassword');
	console.log('RESULT: bcrypt hash for "mypassword" ');
	process.exit();
} else {
	// create hash
	console.log(`hashing ${password}...`);
}
