// Read data into a table
// from data.js
var tableData = data;

// read data into the table
const 
    tbody = d3.select("tbody")

//  append to the table using a function to loop through all data
tableData.forEach((sightings) =>{
    row = tbody.append("tr");
    for (key in sightings){
        const cell = tbody.append("td");
        cell.text(sightings[key]);
    }
})
// -------------------------------------------------------------------------------

//  filter table based on date
const submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    const inputElement = d3.select(".form-control");

    // Get the value property of the input element
    const inputValue = inputElement.property("value");

    // get filter the table
    const newTable = tableData.filter(sighting => sighting.datetime == inputValue)
    console.log(newTable)

    // clear table
    d3.select("tbody").html("")

    const 
    tbody = d3.select("tbody")

    //  append to the table using a function to loop through all data
    newTable.forEach((dateSights) =>{
        row = tbody.append("tr");
        for (key in dateSights){
            const cell = tbody.append("td");
            cell.text(dateSights[key]);
        }
    })
});
// ------------------------------------------------------------------------------
