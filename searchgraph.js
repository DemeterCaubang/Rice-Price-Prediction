// Changing graph based on dropdown values

document.addEventListener("DOMContentLoaded", function () {

    const TypeOfRice = document.getElementById("ToR");
    const VarietyOfRice = document.getElementById("VoR");
    const Predict = document.getElementById("Predictor");

    const SearchButton = document.getElementById("Search");
    const ClearButton = document.getElementById("Clear");

    // SEARCH BUTTON
    SearchButton.addEventListener("click", function () {
        const DropdownValue1 = TypeOfRice.value;
        const DropdownValue2 = VarietyOfRice.value;
        const DropdownValue3 = Predict.value;

        //Imported Oil
        if (
            DropdownValue1 === "i" &&
            DropdownValue2 === "S" &&
            DropdownValue3 === "oil"
        ) {
            document.getElementById("Graph").setAttribute('src', 'Visualizations/Oil/imported_special_oil_plot.html');
        } else if (
            DropdownValue1 === "i" &&
            DropdownValue2 === "P" &&
            DropdownValue3 === "oil"
        ) {
            document.getElementById("Graph").setAttribute('src', 'Visualizations/Oil/imported_premium_oil_plot.html');
        } else if (
            DropdownValue1 === "i" &&
            DropdownValue2 === "W" &&
            DropdownValue3 === "oil"
        ) {
            document.getElementById("Graph").setAttribute('src', 'Visualizations/Oil/imported_well-milled_oil_plot.html');
        } else if (
            DropdownValue1 === "i" &&
            DropdownValue2 === "R" &&
            DropdownValue3 === "oil"
        ) {
            document.getElementById("Graph").setAttribute('src', 'Visualizations/Oil/imported_regular-milled_oil_plot.html');
        } else if ( // //Imported Farmgate
            DropdownValue1 === "i" &&
            DropdownValue2 === "S" &&
            DropdownValue3 === "farm"
        ) {
            document.getElementById("Graph").setAttribute('src', 'Visualizations/Farmgate/imported_special_farmgate_plot.html');
        } else if (
            DropdownValue1 === "i" &&
            DropdownValue2 === "P" &&
            DropdownValue3 === "farm"
        ) {
            document.getElementById("Graph").setAttribute('src', 'Visualizations/Farmgate/imported_premium_farmgate_plot.html');
        } else if (
            DropdownValue1 === "i" &&
            DropdownValue2 === "W" &&
            DropdownValue3 === "farm"
        ) {
            document.getElementById("Graph").setAttribute('src', 'Visualizations/Farmgate/imported_well-milled_farmgate_plot.html');
        } else if (
            DropdownValue1 === "i" &&
            DropdownValue2 === "R" &&
            DropdownValue3 === "farm"
        ) {
            document.getElementById("Graph").setAttribute('src', 'Visualizations/Farmgate/imported_regular-milled_farmgate_plot.html');
        } else if ( //Imported Inflation
            DropdownValue1 === "i" &&
            DropdownValue2 === "S" &&
            DropdownValue3 === "rate"
        ) {
            document.getElementById("Graph").setAttribute('src', 'Visualizations/Inflation/imported_special_inflation_plot.html');
        } else if (
            DropdownValue1 === "i" &&
            DropdownValue2 === "P" &&
            DropdownValue3 === "rate"
        ) {
            document.getElementById("Graph").setAttribute('src', 'Visualizations/Inflation/imported_premium_inflation_plot.html');
        } else if (
            DropdownValue1 === "i" &&
            DropdownValue2 === "W" &&
            DropdownValue3 === "rate"
        ) {
            document.getElementById("Graph").setAttribute('src', 'Visualizations/Inflation/imported_well-milled_inflation_plot.html');
        } else if (
            DropdownValue1 === "i" &&
            DropdownValue2 === "R" &&
            DropdownValue3 === "rate"
        ) {
            document.getElementById("Graph").setAttribute('src', 'Visualizations/Inflation/imported_regular-milled_inflation_plot.html');
        } else if ( //Imported Inflation
            DropdownValue1 === "i" &&
            DropdownValue2 === "S" &&
            DropdownValue3 === "exc"
        ) {
            document.getElementById("Graph").setAttribute('src', 'Visualizations/Exchange/imported_special_usd_plot.html');
        } else if (
            DropdownValue1 === "i" &&
            DropdownValue2 === "P" &&
            DropdownValue3 === "exc"
        ) {
            document.getElementById("Graph").setAttribute('src', 'Visualizations/Exchange/imported_premium_usd_plot.html');
        } else if ( //Imported Exchange
            DropdownValue1 === "i" &&
            DropdownValue2 === "W" &&
            DropdownValue3 === "exc"
        ) {
            document.getElementById("Graph").setAttribute('src', 'Visualizations/Exchange/imported_well-milled_usd_plot.html');
        } else if (
            DropdownValue1 === "i" &&
            DropdownValue2 === "R" &&
            DropdownValue3 === "exc"
        ) {
            document.getElementById("Graph").setAttribute('src', 'Visualizations/Exchange/imported_regular-milled_usd_plot.html');
        } else {
            document.getElementById("Graph").setAttribute('src', 'Visualizations/default_graph.html');
        }
    });

    // CLEAR BUTTON
    ClearButton.addEventListener("click", function () {
        document.getElementById("Graph").setAttribute('src', 'Visualizations/default_graph.html');
    });

});