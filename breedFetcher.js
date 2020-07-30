const request = require('request');
const args = process.argv.slice(2);

if (args === "") {
  console.log("Please enter cat");
  return;
} else {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
    ('error:', error);
    ('statusCode:', response && response.statusCode);
    ('body:', body);
  
    if (error) {
      console.log("Error: request not avaliable");
      return;
    } else if (body === '[]') {
      console.log("Cat Not Found");
      return;
    } else {
      const data = JSON.parse(body);
      console.log(data[0].description);
    }
  });
}