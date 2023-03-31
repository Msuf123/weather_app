const baseurl='http://api.weatherapi.com/v1';
const api_key='b31b84249476459f9e8190300232803';
const api_method='/current.json';
const forecast='/forecast.json';
let place;
let place_ans=document.getElementById('place');
let input_ans=document.getElementById('input_ans');
let button=document.getElementById('get');
let max_min=document.getElementById('max_min');
let time=document.getElementById("time");
let condition=document.getElementById("condition");
let wind_speed=document.getElementById("wind_speed");
let six_temp=document.getElementById("six_temp");
let nine_temp=document.getElementById("nine_temp");
let one_temp=document.getElementById("one_temp");
let for_temp=document.getElementById("for_temp");
let ten=document.getElementById("ten");
let next=document.getElementById("more_info");
button.addEventListener('click',response);

async function response(){
    if(input_ans.value===''){
        alert("enter a place name");
    }
    else{
        place=input_ans.value;
let for_url=`${baseurl}${forecast}?key=${api_key}&q=${place}&days=2`;
console.log(place);
console.log(for_url);
try{await fetch(for_url).then(
 (r)=>{
        console.log(r)
        if(r.status==400){
            alert('Not a valid area');
            throw new Error("Bad request");
        }
        else if(!r.ok){
            alert('No internet')
            throw new Error("No net");
        }
        return r.json();

    }
    
    
)
.then((ans)=>{

    next.addEventListener('click',next_con);
    max_min.innerHTML="Max-Min: "+ans.forecast.forecastday[0].day.maxtemp_c+"&deg C"+","+ans.forecast.forecastday[1].day.mintemp_c+"&deg C";
    place_ans.innerHTML=ans.location.region+","+ans.location.name+"-"+ans.current.temp_c+"&deg C";
    time.innerHTML="Time:  "+" "+ans.location.localtime;
    condition.innerHTML="Condition: "+" "+ans.current.condition.text;
    wind_speed.innerHTML="Wind Speed:"+" "+ans.current.wind_kph+"kmh";
    six_temp.innerHTML=ans.forecast.forecastday[0].hour[6].temp_c+"&deg C";
    nine_temp.innerHTML=ans.forecast.forecastday[0].hour[9].temp_c+"&deg C";
    one_temp.innerHTML=ans.forecast.forecastday[0].hour[13].temp_c+"&deg C";
    for_temp.innerHTML=ans.forecast.forecastday[0].hour[16].temp_c+"&deg C";
    ten.innerHTML=ans.forecast.forecastday[0].hour[21].temp_c+"&deg C";
    console.log(ans.forecast.forecastday[0].day.maxtemp_c+" and "+ans.forecast.forecastday[0].day.mintemp_c)
    console.log(ans.current.temp_c);
    console.log(ans.location.localtime);
    console.log(ans.current.condition.text);
    console.log(ans.current.wind_kph);
    console.log(ans.forecast.forecastday[0].hour[6].temp_c)
    console.log(ans.forecast.forecastday[0].hour[9].temp_c)
    console.log(ans.forecast.forecastday[0].hour[13].temp_c)
    console.log(ans.forecast.forecastday[0].hour[16].temp_c)
    console.log(ans.forecast.forecastday[0].hour[21].temp_c)
    console.log('weather for next day');
    function next_con(){
    max_min.innerHTML="Max-Min: "+ans.forecast.forecastday[1].day.maxtemp_c+"&deg C"+","+ans.forecast.forecastday[1].day.mintemp_c+"&deg C";
    place_ans.innerHTML=ans.location.region+","+ans.location.name+"-"+ans.current.temp_c+"&deg C";
    time.innerHTML="Time:  Forecast";
    condition.innerHTML="Condition: "+" "+ans.forecast.forecastday[1].day.condition.text;
    wind_speed.innerHTML="Wind Speed:"+" "+ans.forecast.forecastday[1].day.avgvis_km+"kmh";
    six_temp.innerHTML=ans.forecast.forecastday[1].hour[6].temp_c+"&deg C";
    nine_temp.innerHTML=ans.forecast.forecastday[1].hour[9].temp_c+"&deg C";
    one_temp.innerHTML=ans.forecast.forecastday[1].hour[13].temp_c+"&deg C";
    for_temp.innerHTML=ans.forecast.forecastday[1].hour[16].temp_c+"&deg C";
    ten.innerHTML=ans.forecast.forecastday[1].hour[21].temp_c+"&deg C";
    }
    console.log(ans.forecast.forecastday[1].day.maxtemp_c+" and "+ans.forecast.forecastday[1].day.mintemp_c)
    console.log(ans)
    console.log(ans.forecast.forecastday[1].day.condition.text)
    console.log(ans.forecast.forecastday[1].hour[6].temp_c)
    console.log(ans.forecast.forecastday[1].hour[9].temp_c)
    console.log(ans.forecast.forecastday[1].hour[13].temp_c)
    console.log(ans.forecast.forecastday[1].hour[16].temp_c)
    console.log(ans.forecast.forecastday[1].hour[21].temp_c)
})}
catch(e){
    alert(e);
    console.log(e);
}

    }
    
   
    
}


