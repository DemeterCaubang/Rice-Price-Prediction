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

        if (
            DropdownValue1 === 'i' &&
            DropdownValue2 === 'S' &&
            DropdownValue3 === 'oil'
        ) {
            document.getElementById("Graph").src =
                "Visualizations/Time/imported_special_time_series_plot.html";
        } else {
            window.alert("Please select a valid value");
            document.getElementById("Graph").src = "about:blank";
        }
    });

    // CLEAR BUTTON
    ClearButton.addEventListener("click", function () {
        document.getElementById("Graph").src = "about:blank";
    });

});