let btn = document.getElementById('fetch-data');
console.log(btn)
const apiKey = "4e4badfe1b40ae8b01ddedeca3b8d667";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const url = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";
let inputBox = document.getElementById('city-input')
let graphData = []
// var graphData = [
//     ["06/10/2024", 22.52],
//     ["07/10/2024", 23.56],
//     ["08/10/2024", 23.13],
//     ["09/10/2024", 24.25],
//     ["10/10/2024", 23.07]
// ];
async function forecast() {
    city = "Pune"
    try {
        let response = await fetch(url + city + `&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error("Network Response");

        }
        let data = await response.json();
        console.log("forcast data", data.list);
        let list = data.list;
        for (let index = 0; index < list.length; index++) {
            console.log("inside for loop")
            const currentDate = new Date();
            let apiDate = new Date((data.list[index].dt) * 1000);
            let temp = list[index].main.temp;
            console.log(temp);
            console.log("API Date: ", apiDate.getDate());
            console.log("System Date", currentDate.getDate());
            if(apiDate.getDate() == currentDate.getDate()){
                continue;
            }
            console.log(list[index]);
            
            //console.log("date",data.list[index].dt)
            
            graphData.push([apiDate.toLocaleDateString(), temp])
            index = index + 7

        }
        console.log("Graph Data: ",graphData);
    } catch (error) {
        console.log(error)
    }
}
forecast();
function drawGraph() {
    console.log("Drawing graph...");
    console.log("Graph data:", graphData); // Log the data to check the structure

    // Create the dataset using the provided graphData
    var dataSet = anychart.data.set(graphData);

    // Create a line chart
    var chart = anychart.line();

    // Correct axis titles
    chart.xAxis().title("Date");
    chart.yAxis().title("Temperature (°C)");

    // Map data: index 0 (x) is the date, index 1 (value) is the temperature
    var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });
    var firstSeries = chart.line(firstSeriesData);

    // Name the series
    firstSeries.name("Weather Forecast");

    // Enable chart legend
    chart.legend().enabled(true);

    // Log any chart errors if they occur
    chart.listen("chartdraw", function() {
        console.log("Chart drawn");
    });

    chart.listen("error", function(e) {
        console.log("Error drawing chart:", e);
    });

    // Set the container where the chart should be rendered
    chart.container("container");

    // Draw the chart
    chart.draw();
}


async function main() {
    
    await forecast();

    drawGraph();
}

main();

console.log("Chart Data: ",graphData);
async function fetchData() {
    let city = document.getElementById('city-input').value;
    console.log(city);
    city = city ? city : "Patna";
    console.log("Function called");
    try {
        let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error("Network Reponse was not OK");
        }
        data = await response.json();
        console.log(data);
        let temperature = document.getElementById('temperature');
        temperature.innerHTML = `Temperature : ${data.main.temp}`;
        let feelsLike = document.getElementById('feels-like')
        feelsLike.innerHTML = `Feels Like: ${data.main.feels_like}`;
        let humidity = document.getElementById('humidity');
        humidity.innerHTML = `Humidity: ${data.main.humidity}`;
        let windSpeed = document.getElementById('wind-speed');
        windSpeed.innerHTML = `Wind Speed: ${data.wind.speed}`;
        console.log(data.wind.speed);
        let sunrise = document.getElementById('sunrise');
        let sunriseTime = new Date(data.sys.sunrise * 1000)
        console.log(sunriseTime);
        let sunRiseHour = sunriseTime.getHours();
        console.log("Hour:", sunRiseHour);
        let sunRiseMinute = sunriseTime.getMinutes();
        let sunRiseSec = sunriseTime.getSeconds();
        let formattedSunRise = `${sunRiseHour}:${sunRiseMinute}:${sunRiseSec}`;
        console.log(formattedSunRise);
        sunrise.innerHTML = `Sun Rise Time :${formattedSunRise}`;
        let sunset = document.getElementById('sunset');
        let sunSetTime = new Date(data.sys.sunset * 1000);
        let formattedSunSet = `${sunSetTime.getHours()}:${sunSetTime.getMinutes()}:${sunSetTime.getSeconds()}`
        sunset.innerHTML = `Sun set Time :${formattedSunSet}`;
        let desc = document.getElementById('description');
        desc.innerHTML = `Description: ${data.weather[0].description}`


    } catch (error) {
        console.log("wrong url");

    }

}
btn.addEventListener("click", fetchData);
inputBox.addEventListener('keypress', (e) => {
    console.log(e.key);
    if (e.key == "Enter") {
        fetchData();
    }
})

fetchData();