const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
	require('child_process').spawn('sh', ['on.sh'], {stdio: 'inherit'});
})

app.listen(3000, function () {
  console.log('Lightswitch on listening on port 3000!')
})

