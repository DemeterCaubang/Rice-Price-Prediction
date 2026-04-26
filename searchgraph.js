// Changing graph based on dropdown values

document.addEventListener("DOMContentLoaded", function () {

    const TypeOfRice = document.getElementById("ToR");
    const VarietyOfRice = document.getElementById("VoR");
    const Predict = document.getElementById("Predictor");

    const SearchButton = document.getElementById("Search");
    const ClearButton = document.getElementById("Clear");
    const Graph = document.getElementById("Graph");

    function showLoader() {
        document.getElementById("loader").classList.remove("hidden");
    }

    function hideLoader() {
        document.getElementById("loader").classList.add("hidden");
    }

    // Hide loader once iframe fully loads
    Graph.onload = function () {
        hideLoader();
    };

    // SEARCH BUTTON
    SearchButton.addEventListener("click", function () {

        showLoader(); // 👈 START LOADER FIRST

        const DropdownValue1 = TypeOfRice.value;
        const DropdownValue2 = VarietyOfRice.value;
        const DropdownValue3 = Predict.value;

        let src = "Visualizations/default_graph.html"; // fallback

            src = 'Visualizations/loading.html';
        // Imported Oil
        if (DropdownValue1 === "i" && DropdownValue2 === "S" && DropdownValue3 === "oil") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Oil/imported_special_oil_plot.html';
        } else if (DropdownValue1 === "i" && DropdownValue2 === "P" && DropdownValue3 === "oil") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Oil/imported_premium_oil_plot.html';
        } else if (DropdownValue1 === "i" && DropdownValue2 === "W" && DropdownValue3 === "oil") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Oil/imported_well-milled_oil_plot.html';
        } else if (DropdownValue1 === "i" && DropdownValue2 === "R" && DropdownValue3 === "oil") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Oil/imported_regular-milled_oil_plot.html';
        }

        // Imported Farmgate
        else if (DropdownValue1 === "i" && DropdownValue2 === "S" && DropdownValue3 === "farm") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Farmgate/imported_special_farmgate_plot.html';
        } else if (DropdownValue1 === "i" && DropdownValue2 === "P" && DropdownValue3 === "farm") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Farmgate/imported_premium_farmgate_plot.html';
        } else if (DropdownValue1 === "i" && DropdownValue2 === "W" && DropdownValue3 === "farm") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Farmgate/imported_well-milled_farmgate_plot.html';
        } else if (DropdownValue1 === "i" && DropdownValue2 === "R" && DropdownValue3 === "farm") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Farmgate/imported_regular-milled_farmgate_plot.html';
        }

        // Imported Inflation
        else if (DropdownValue1 === "i" && DropdownValue2 === "S" && DropdownValue3 === "rate") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Inflation/imported_special_inflation_plot.html';
        } else if (DropdownValue1 === "i" && DropdownValue2 === "P" && DropdownValue3 === "rate") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Inflation/imported_premium_inflation_plot.html';
        } else if (DropdownValue1 === "i" && DropdownValue2 === "W" && DropdownValue3 === "rate") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Inflation/imported_well-milled_inflation_plot.html';
        } else if (DropdownValue1 === "i" && DropdownValue2 === "R" && DropdownValue3 === "rate") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Inflation/imported_regular-milled_inflation_plot.html';
        }

        // Imported Exchange
        else if (DropdownValue1 === "i" && DropdownValue2 === "S" && DropdownValue3 === "exc") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Exchange/imported_special_usd_plot.html';
        } else if (DropdownValue1 === "i" && DropdownValue2 === "P" && DropdownValue3 === "exc") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Exchange/imported_premium_usd_plot.html';
        } else if (DropdownValue1 === "i" && DropdownValue2 === "W" && DropdownValue3 === "exc") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Exchange/imported_well-milled_usd_plot.html';
        } else if (DropdownValue1 === "i" && DropdownValue2 === "R" && DropdownValue3 === "exc") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Exchange/imported_regular-milled_usd_plot.html';
        }

        // Local Oil
        else if (DropdownValue1 === "l" && DropdownValue2 === "S" && DropdownValue3 === "oil") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Oil/Local_special_oil_plot.html';
        } else if (DropdownValue1 === "l" && DropdownValue2 === "P" && DropdownValue3 === "oil") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Oil/Local_premium_oil_plot.html';
        } else if (DropdownValue1 === "l" && DropdownValue2 === "W" && DropdownValue3 === "oil") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Oil/Local_well-milled_oil_plot.html';
        } else if (DropdownValue1 === "l" && DropdownValue2 === "R" && DropdownValue3 === "oil") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Oil/Local_regular-milled_oil_plot.html';
        }

        // Local Farmgate
        else if (DropdownValue1 === "l" && DropdownValue2 === "S" && DropdownValue3 === "farm") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Farmgate/Local_special_farmgate_plot.html';
        } else if (DropdownValue1 === "l" && DropdownValue2 === "P" && DropdownValue3 === "farm") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Farmgate/Local_premium_farmgate_plot.html';
        } else if (DropdownValue1 === "l" && DropdownValue2 === "W" && DropdownValue3 === "farm") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Farmgate/Local_well-milled_farmgate_plot.html';
        } else if (DropdownValue1 === "l" && DropdownValue2 === "R" && DropdownValue3 === "farm") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Farmgate/Local_regular-milled_farmgate_plot.html';
        }

        // Local Inflation
        else if (DropdownValue1 === "l" && DropdownValue2 === "S" && DropdownValue3 === "rate") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Inflation/Local_special_inflation_plot.html';
        } else if (DropdownValue1 === "l" && DropdownValue2 === "P" && DropdownValue3 === "rate") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Inflation/Local_premium_inflation_plot.html';
        } else if (DropdownValue1 === "l" && DropdownValue2 === "W" && DropdownValue3 === "rate") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Inflation/Local_well-milled_inflation_plot.html';
        } else if (DropdownValue1 === "l" && DropdownValue2 === "R" && DropdownValue3 === "rate") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Inflation/Local_regular-milled_inflation_plot.html';
        }

        // Local Exchange
        else if (DropdownValue1 === "l" && DropdownValue2 === "S" && DropdownValue3 === "exc") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Exchange/Local_special_usd_plot.html';
        } else if (DropdownValue1 === "l" && DropdownValue2 === "P" && DropdownValue3 === "exc") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Exchange/Local_premium_usd_plot.html';
        } else if (DropdownValue1 === "l" && DropdownValue2 === "W" && DropdownValue3 === "exc") {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Exchange/Local_well-milled_usd_plot.html';
        } else {
            src = 'Visualizations/loading.html';
            src = 'Visualizations/Exchange/Local_regular-milled_usd_plot.html';
        }

        // trigger reload (this triggers iframe.onload later)
        Graph.src = src;
    });

    // CLEAR BUTTON
    ClearButton.addEventListener("click", function () {
        showLoader();

        Graph.src = 'Visualizations/default_graph.html';
    });

});