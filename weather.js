const apikey = '404e50bccf2fe100d0bf7239c87ca44b';

const weatherDataE1 = document.getElementById('weather-data');

const cityInputE1 = document.getElementById('city-input');

const formE1 = document.querySelector('form');

formE1.addEventListener('submit', (event)=>{
event.preventDefault();

const cityValue = cityInputE1.value;
console.log(cityValue);      
getWeatherData(cityValue);   

});

async function getWeatherData(cityValue){
  try {
    // const response = await fetch (`https://api.openweathermap.org/data/weather? q= ${cityValue}&appid = ${apikey}&unit = metric`);
    const response = await fetch (`https://jsonplaceholder.typicode.com/todos/1`)
    

    if(!response.ok){
      throw new Error('Network response not working')
      console.log("error");
    }
    
    const data = await response.json()
    console.log(data);
    
  } catch (error) {
    
  }
}