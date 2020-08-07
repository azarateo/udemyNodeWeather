const { geocode } = require('./utils/geocode.js')
const { forecast } = require('./utils/forecast.js')

var argument = 'Bogota'

if(process.argv.length >= 3){
   argument = process.argv[2]
}


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

