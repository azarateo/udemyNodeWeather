const request = require('postman-request')
const url = 'http://api.weatherstack.com/current?access_key=55739ade495c57d1838c21d35fa4eb58&query=Bogota'

request({ url: url},(error,response)=>{
    if(!error){
        const data = JSON.parse(response.body)
        console.log(data.current)
    }else{
        console.log('Something went wrong')
    }
    
})