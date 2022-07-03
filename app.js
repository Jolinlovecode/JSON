const data = '{"ticker":{"base":"BTC","target":"USD", "price":"1122"}, "timestamp":1234567, "sucess":true}';
// if key has "" , it's JSON String
console.log(JSON.parse(data));
// When receiving data from a web server(The basic objective of the web server is to store, process and deliver web pages to the users. Web browser is an example of a web client.),
// the data is always a string.
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.
//The JSON.stringify() method converts a JavaScript object or value to a JSON string