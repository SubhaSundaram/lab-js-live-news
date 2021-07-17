// var apikey = '204a794183f64e00914ffa9a0aaca748'
var msg = document.getElementById('msg')
let country = document.querySelector('#country').value
console.log(country)
// getData()
function selectCountry() {
  //   var input = document.getElementById('city').value
  //   var url ='https://newsapi.org/v2/everything?q=bitcoin&apiKey=204a794183f64e00914ffa9a0aaca748',

  //     'https://newsapi.org/v2/top-headlines?country=us&apiKey=204a794183f64e00914ffa9a0aaca748'
  axios
    .get(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=204a794183f64e00914ffa9a0aaca748',
    )
    .then((res) => {
      console.log(res.JSON())
      msg.textContent = res.totalResults
    })
    .catch(() => {
      msg.textContent = 'Please search for a valid city'
    })
}
