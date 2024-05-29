const hig = document.getElementById("Height")
const wei = document.getElementById("Weight")
const age = document.getElementById("Age")
const gen = document.getElementById("gender")
const fac = document.getElementById("factor")
const rusbox = document.getElementById("resultbox")
const cls = document.getElementById("calccc")
const xhr = new XMLHttpRequest();
const card = document.getElementById("cardsArea")
const riv = document.getElementById("roVi")
console.log(riv)
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 5,
  spaceBetween: 50,
  autoplay: {
    delay: 3000,
  },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          900: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1500: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      });

function showDatainswip(d) {

  for (let i = 0; i < swiper.slides.length; i++) { 
    swiper.slides[i].innerHTML = ` <img src="${d[i].strMealThumb}" alt="">`
  }
}
function showdatacard(d) {
  card.innerHTML = " "
  for (let i = 9; i < 13; i++) {
    card.innerHTML += `
    <div class="col-10 col-md-5 col-lg-5 col-xxl-3 mx-auto">
            <div class="card">
              <div class="top" style="background-image: url(${d[i].strMealThumb});">
                <span class="type d-block"> ${d[i].strArea} </span>
                <div class="title">
                <p>${d[i].strMeal.split(" ").slice(0, 4).join(" ")}...</p>
                </div>
              </div>
              <p class="desc">
                ${d[i].strInstructions.split(" ").slice(0, 20).join(" ")}...
              </p>
              <button class="readMore">read more</button>
            </div>
          </div>
    `
  }
}
cls.addEventListener("click", function () { 
  let h = hig.value
  let w = wei.value
  let a = age.value
  let g = gen.value
  let f = fac.value
  let x = ((+h /100 ) * (+h / 100))
  let y = +w / x
  let rus = " "
  if (y < 18.5) {
    rus = "you are underweight"
  } else if (y > 18.5 && y < 24.9) { 
    if (g == "male"){
      rus = "you are Healthy man good job"
    } else if( g == "female" ) {
        rus = "you are Healthy woman good job"
      }
  } else if (y > 25 && y < 29.9) {
    rus = "you are overweight !!"
  } else {
    rus = "Obese !!!!"
  }
  console.log(rus)
  let bmr
  if (g == "male") {
    bmr = (+w + 6.25) * (+h - 5) * (+a + 5)
  } else {
    bmr = (+w + 6.25) * (+h - 5) * (+a - 161)
  }
  console.log((+bmr).toFixed(2))
  let exr 
  switch(f) {
    case "little":
      exr = bmr * 1.2
      break;
    case "light":
      exr = bmr * 1.375
      break;
    case "moderate":
      exr = bmr * 1.55
      break;
    case "heavy":
      exr = bmr * 1.725
      break;
    case "very_heavy":
      exr = bmr * 1.9
      break;
    default:
      exr = bmr * 1.2
      break;
  }
  console.log(exr)
  
  rusbox.innerHTML= " "
  rusbox.style = "visibility: visible;"
  rusbox.innerHTML = 
  `
  <div class="resultbox__icon">
  <i class="fa-solid fa-person fa-lg"></i>
  </div>
  <div class="resultbox__title">
  <p>${rus}</p>
  <span>Your BMI is ${y.toFixed(3)} BMR ${bmr.toFixed(1)}cal/day, and BMR w/Activity Factor${exr}cal/day</span>
  </div>
  <div class="resultbox__close" id="close"><svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox=" 0 0 20 20" height="40">
  <path fill="#393a37"
                              d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z">
                              </path>
                              </svg>
                              </div>
                              `
  console.log(rusbox.innerHTML)
  const close = document.getElementById('close')
  console.log(close)
  close.addEventListener("click", function () {
    rusbox.style = "visibility: hidden;"
    rusbox.innerHTML = " "
  })
})

xhr.open('GET', 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef');
xhr.send();
xhr.onload = function (){
  let id = []
  let allData = JSON.parse(xhr.response);
  let data = allData.meals
  console.log(data);
  for (let i = 0; i < data.length; i++){
    id.push(data[i].idMeal)
  }
  console.log(id)
  let details = []
  let s = []
  let f =[]
  for (let i = 0; i < id.length; i++){
    details[i]= new XMLHttpRequest();
    details[i].open(`GET`,`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id[i]}`);
    details[i].send()
    details[i].onload = function (){
      s[i] = JSON.parse(details[i].response)
      f.push(s[i].meals[0])
      
    }
  }
  details[40].onload = function () {
    console.log(f)
    showDatainswip(f)
    showdatacard(f)
    riv.href = `${f[10].strYoutube}`
    console.log(riv)
  }
  // let males = []
  // for (let i = 0; i < s.length; i++){
  //   males.push(s[i].meals)
  // }
  // console.log(males)
//   let f = JSON.parse(s[1].response)
//   console.log(f)
//   // let s = []
//   // let c = []
//   // for (let i = 0; i < d.length; i++){
//   //   s.push(d[i].responseText)
//   //   c.push(d[i])
//   // }
//   // let f = c.JSON.parse(c)
//   // console.log(f)
}

