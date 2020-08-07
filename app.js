const { geocode } = require('./utils/geocode.js')
const { forecast } = require('./utils/forecast.js')

var address =argument = process.argv[2]

if(!address){
   console.log('Please provide an address')
}else{
    geocode(argument,(error, {latitude, longitude, location})=>{
        if(error){
            return console.log(error)
        }else{
            forecast(latitude,longitude,(error,data)=>{
                if (error) {
                    return console.log(error)
                }else{
                    console.log(location)
                    console.log(data)
                }
            })  
        }
    })
    
    
}


