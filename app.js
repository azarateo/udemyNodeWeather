const request = require('postman-request')


const baseurl2 = 'https://api.mapbox.com'
const endpoint = 'mapbox.places'
const searchText = 'Los Angeles'
const forwardGeocoding = '/geocoding/v5/'+endpoint+'/'+searchText+'.json'
const access_token = '?access_token=pk.eyJ1IjoiYXphcmF0ZW8iLCJhIjoiY2o4cmd4dTFuMHZ4cTJxbXBvM29wYW0zeCJ9.KzONZERt0JHUwnZvILynjw'
const options = '&limit=1'
const url= baseurl2+forwardGeocoding+access_token+options
// const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bogota.json?access_token=pk.eyJ1IjoiYXphcmF0ZW8iLCJhIjoiY2o4cmd4dTFuMHZ4cTJxbXBvM29wYW0zeCJ9.KzONZERt0JHUwnZvILynjw'

request({url: url, json: true},(error,response) =>{
    if(!error){
        const data = response.body
        const latitude = data.features[0].center[1]
        const longitude = data.features[0].center[0]
        const latlng = latitude+','+longitude

        const urlbase = 'http://api.weatherstack.com/current?'
        const access_key= 'access_key=55739ade495c57d1838c21d35fa4eb58'
        const query = '&query=&units=m'
        //const query = '&query='+latlng+'&units=m'
        const url = urlbase +  access_key + query
        
        request({ url: url, json: true},(error,response)=>{
            if(!error){
                const data = response.body
                console.log(data.current.weather_descriptions[0]+'. '+'In '+data.location.name+' the temperature is '+data.current.temperature+' centigrades and it feels like '+data.current.feelslike)
            }else{
                console.log('Something went wrong')
            }
            
        })

    }
    else if(response.body.error){
        console.log('There was an error trying to get that location: '+response.body.error.info)
    }
    else{
        console.log('Something went wrong')
    }
})



