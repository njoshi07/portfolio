const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
    const nav = document.querySelectorAll(".nav-links li");
    burger.addEventListener('click',()=> {
        navLinks.classList.toggle("nav-active");
    });
}
navSlide();

// Call wheather API

const weatherCard = document.querySelector(".weatherCard");

const request = new XMLHttpRequest;


request.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=omaha&units=imperial&appid=23d42c6f1d8fba0e824c8e1e2e4590dd`);

request.send();

request.addEventListener("load", () => {
    console.log(request.responseText);
    var data = JSON.parse(request.responseText);

    // console.log(data);

    const weatherData = `   <h3><span>Omaha  </span> ${data.main.temp}</h3>
                  <p>weather : ${data.weather[0].icon}</p>
              <p>Wind: 15mph</p>`;
            //   console.log(weatherData);
              weatherCard.insertAdjacentHTML('beforeend', weatherData);
 
});