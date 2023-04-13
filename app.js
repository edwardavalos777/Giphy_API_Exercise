// app.js

const API_KEY = '44D26Qmn26mcVlKZyfoxqNCtCLejmgnB';

$('form').on('submit', async function(event) {
  event.preventDefault();

  const searchTerm = $('#search').val();
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    $('#results').empty();

    for (let gif of data.data) {
      const img = $('<img>').attr('src', gif.images.original.url);
      $('#results').append(img);
    }
  } catch (error) {
    console.error(error);
  }
});

$('#clear').on('click', function() {
    $('#results').empty();
  });
  
console.log("Let's get this party started!");

