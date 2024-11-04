function updateSorting() {
    const search = document.getElementById('search').value;
    const criteria = document.getElementById('criteria').value;
    const order = document.querySelector('input[name="sort_order"]:checked').value;
    sortCountries(search, criteria, order);
}

function sortCountries(search, criteria, order) {
    fetch(`/sort?search=${search}&criteria=${criteria}&sort_order=${order}`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('country-results');
            resultsDiv.innerHTML = '';
            data.forEach(country => {
                resultsDiv.innerHTML += `
                    <div class="country-card">
                        <h2 class="country-name">${country.Name}</h2>
                        <p class="country-population">Population: ${country.Population.toLocaleString()}</p>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Error:', error));
}

sortCountries('', 'Name', 'asc');