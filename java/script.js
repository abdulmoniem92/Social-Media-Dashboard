var ctx = document.getElementById('myChart').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'line', // Specify the chart type (e.g., bar, line, pie)
        data: {
            labels: ['Facebook', 'Instagram', 'Twwiter', 'YouTube'], // Labels for the data points
            datasets: [{
                label: 'Page Impressions', // Label for the dataset
                data: [147000, 210750, 90000, 120860, 80438, 90000], // Actual data values
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Background color for the bars
                borderColor: 'rgba(75, 192, 192, 1)', // Border color for the bars
                borderWidth: 1 // Border width for the bars
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // Start the y-axis from zero
                }
            }
        }
    });