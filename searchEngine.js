// Part of the code by https://codepen.io/willme/pen/RaKgMP

function searchEngine(searchString, searchKey, searchData) {
	var result = [];

	$.each(searchData, function(i, item) {
		//console.log(this[searchKey].indexOf(searchString));
		if (this[searchKey].toLowerCase().indexOf(searchString) >= 0 && searchString != "") {
			result.push(item);
		}

	});
	return result;
};

function search() {
    let searchTerm = document.getElementById("searchField").value.toLowerCase();
    let currType = document.getElementById("searchType").value;
    let currPer = document.getElementById("searchPeriod").value;

    let fSearch;

    var regex = new RegExp(searchTerm, "i");

    switch (currPer) {
        case "1":
            fSearch = searchEngine(searchTerm, currType, cycle1);
            break;
        case "2":
            fSearch = searchEngine(searchTerm, currType, cycle2);
            break;
        case "3":
            fSearch = searchEngine(searchTerm, currType, cycle3);
            break;
        case "4":
            fSearch = searchEngine(searchTerm, currType, cycle4);
            break;
        case "5":
            fSearch = searchEngine(searchTerm, currType, cycle5);
            break;
        case "6":
            fSearch = searchEngine(searchTerm, currType, cycle6);
            break;
        default:
            popup("Erro na seleção do período.");
            break;
        
    }

    const results = document.getElementById("searchResults");
    results.innerHTML = "";

    fSearch.forEach(d => {
        results.appendChild(buildBlock(d));
    })

}

let searchState = false;
function searchStart() {
    const sb = document.getElementById("searchEngine");
    const body = document.getElementById("body");

    if (searchState) {
        sb.className = "hidden";
        searchState = false;
        body.style.overflow = "";
        
    } else {
        sb.className = "";
        searchState = true;
        body.style.overflow = "hidden";
    }
}