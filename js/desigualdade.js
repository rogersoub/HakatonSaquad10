// Dados para o gráfico
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Alta Renda', 'Média Renda', 'Baixa Renda'],  // Grupos socioeconômicos
        datasets: [{
            label: 'Prevalência de Transtornos Mentais (%)',
            data: [15, 30, 50],  // Percentual estimado de pessoas com transtornos mentais
            backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],  // Cores para cada barra
            borderColor: ['#388E3C', '#FF9800', '#D32F2F'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
});