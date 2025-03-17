/*722190*/
/*VjbZAYykdpmjww-UcahNQeOG90ToAJBLEPztUEKhHmw*/
/*iiSvmHEtU3OkCb-KYaKRb38SV2NDx6snOO-Xn1sR_KM*/
// /*https://api.unsplash.com/photos/random/?client_id=YOUR_ACCESS_KEY*/


// const button = document.createElement("button");
// button.innerText = "show photo";
// container-search.appendChild(button);

// const image = document.createElement("img")

// const container = document.getElementById("container");
// const searchInput = document.getElementById("search");
// const searchButton = document.getElementById("searchButton");

// const ACCES_KEY = "VjbZAYykdpmjww-UcahNQeOG90ToAJBLEPztUEKhHmw";

// // const api = async (query = "") => {
// //     try {
// //         const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${ACCES_KEY}&count=10&query=${query}`);
// //         const data = await response.json();
// //         container.innerHTML = ""; // Clear previous images
// //         data.forEach((e) => {
// //             const img = document.createElement("img");
// //             img.src = e.urls.small;
// //             container.appendChild(img);
// //         });
// //     } catch (er) {
// //         console.log(er);
// //         container.innerHTML = "No photos found or an error occurred.";
// //     }
// // };

// searchButton.addEventListener("click", async () => {
//     const query = searchInput.value;
//     try {
//         const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${ACCES_KEY}&count=10&query=${query}`);
//         const data = await response.json();
//         container.innerHTML = ""; // Clear previous images
//         data.forEach((e) => {
//             const img = document.createElement("img");
//             img.src = e.urls.small;
//             container.appendChild(img);
//         });
//     } catch (er) {
//         console.log(er);
//         container.innerHTML = "No photos found or an error occurred.";
//     }
// });

// // Fetch random photos on page load
// api();




const container = document.getElementById("container");
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("searchButton");

const ACCESS_KEY = "VjbZAYykdpmjww-UcahNQeOG90ToAJBLEPztUEKhHmw";

const fetchImages = async (query = "") => {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}&count=10&query=${query}`);
        
        if (!response.ok) throw new Error(`Error: ${response.status} - ${response.statusText}`);

        const data = await response.json();

        container.innerHTML = ""; // Clear previous images

        if (!Array.isArray(data)) throw new Error("Unexpected API response");

        data.forEach((e) => {
            const img = document.createElement("img");
            img.src = e.urls.small;
            img.alt = e.alt_description || "Unsplash Image";
            container.appendChild(img);
        });

    } catch (er) {
        console.error("Error fetching images:", er);
        container.innerHTML = "No photos found or an error occurred.";
    }
};

// Search button click event
searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) fetchImages(query);
});

// Fetch random images on page load
fetchImages();
