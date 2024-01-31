//masukkan API Ke dalam variabel

const  weatherAPI =
"http://api.weatherapi.com/v1/current.json?key=3a2018f4c9654c8b9b434650243101&q&aqi=no";

//Ambil element html dengan menggunakan DOM selector
const keyword = document.querySelector(".keyword");
const tombolCari = document.querySelector(".btn-search");
const container = document.getElementById("container");



//ambil data dari API
//lalu respons dan ubah ke dalam JSON
//lalu tampung datanya
//bungkus fetch dengan menggunakan template literal

// ketika tombolcari diklik
tombolCari.onclick = () => {
    // Periksa apakah kolom pencarian tidak kosong
    if (keyword.value.trim() === "") {
        // Tampilkan alert jika kosong
        alert("Please enter a city name to you know the weather.");
        return; // Hentikan eksekusi fungsi
    }

    // Periksa apakah huruf pertama dalam input kapital
    if (keyword.value[0] !== keyword.value[0].toUpperCase()) {
        // Tampilkan alert jika huruf pertama tidak kapital
        alert("The first letter must be capitalized.");
        return; // Hentikan eksekusi fungsi
    }

    // Periksa apakah huruf pertama merupakan x, y, atau z
    if (['x', 'y', 'z'].includes(keyword.value[0].toLowerCase())) {
        // Tampilkan alert jika huruf pertama adalah x, y, atau z
        alert("City names starting with 'x', 'y', or 'z' are not allowed.");
        return; // Hentikan eksekusi fungsi
    }

    // Lanjutkan dengan fetch data jika kolom pencarian tidak kosong
    fetch(`${weatherAPI}&q=${keyword.value}`)
        .then(response => response.json())
        .then(data => {
           
            // push elemen html
            let element = "";
            element = showElement(data);
            container.innerHTML = element;
        })
}
//simpan elemen html dengan function 
//Gunakan template literal

function showElement (data)
{
  return `<h3>${data.location.name}, ${data.location.region}, ${data.location.country}</h3>
  <div class="box">
      <img src="https:${data.current.condition.icon}" alt="">
      <h1>${data.current.temp_c}°C</h1>
      </div>
      <p>${data.current.last_updated}</p>
      <p>${data.current.condition.text}</p>`
}

