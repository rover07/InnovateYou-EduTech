// Function to toggle the filter
const toggkeFilter = () => {
    const htmlElement = document.documentElement; // Get the <html> element
    const filterEnabled = htmlElement.classList.toggle("protanopia-filter"); // Toggle the CSS class
    
}

function toggleFilter() {
    var htmlElement = document.documentElement; // Get the <html> element
    var filterEnabled = htmlElement.classList.toggle("protanopia-filter"); // Toggle the CSS class

    // If the filter is enabled, scroll the window to trigger the filter update
    if (filterEnabled) {
        window.scrollBy(1, 1);
        window.scrollBy(-1, -1);
    }
}

// Code to add the filter and toggle it
if (!document.getElementById("styleID612481")) {
    var stylingID = document.createElement('style');
    stylingID.id = "styleID612481";
    document.body.appendChild(stylingID);

    var filterID = document.createElement('div');
    filterID.id = "filterID471924";
    filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
    document.body.appendChild(filterID);

    filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="protanopia" color-interpolation-filters="linearRGB"> <feColorMatrix type="matrix" values="0.10889,0.89111,-0.00000,0,0 0.10889,0.89111,0.00000,0,0 0.00447,-0.00447,1.00000,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';
}

// Function to apply or remove the filter when the button is clicked
function toggleFilterOnClick() {
    toggleFilter();
}

// Add event listener to the button to trigger the function when clicked
var button = document.getElementById("yourButtonId"); // Replace "yourButtonId" with the actual ID of your button
button.addEventListener("click", toggleFilterOnClick);
