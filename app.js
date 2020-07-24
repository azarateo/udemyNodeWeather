const request = require('postman-request')
const url = 'http://api.weatherstack.com/current?access_key=55739ade495c57d1838c21d35fa4eb58&query=Bogota'

request({ url: url, json: true},(error,response)=>{
    if(!error){
        const data = response.body
        console.log('In '+data.request.query+' the temperature is '+data.current.temperature+' degrees and it feels like '+data.current.feelslike)
    }else{
        console.log('Something went wrong')
    }
    
})