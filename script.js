let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function moveSlide(step) {
    // Remove a classe ativa do item atual
    items[currentIndex].classList.remove('active');

    // Atualiza o índice
    currentIndex = (currentIndex + step + totalItems) % totalItems;

    // Adiciona a classe ativa ao novo item
    items[currentIndex].classList.add('active');

    // Mover o carrossel
    const carousel = document.querySelector('.carousel');
    const translateXValue = -currentIndex * 100; // Cada slide ocupa 100% da largura
    carousel.style.transform = `translateX(${translateXValue}%)`;
}


window.onload = function() {
    // Gráfico de Resultados de Eficácia Clínica
    const ctxEficacia = document.getElementById('graficoEficacia').getContext('2d');
    new Chart(ctxEficacia, {
        type: 'bar',
        data: {
            labels: ['1', '2'], // Números representando as categorias
            datasets: [
                {
                    label: 'Melhora',
                    data: [70, 75],
                    backgroundColor: 'rgba(141, 140, 140, 0.5)',
                },
                {
                    label: 'Igual',
                    data: [30, 25],
                    backgroundColor: 'rgba(255, 168, 168, 0.5)',
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Permite que a altura se ajuste de acordo com o canvas
            indexAxis: 'y', // Exibe as barras horizontalmente
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: (value) => value + '%',
                    },
                },
                y: {
                    ticks: {
                        font: {
                            size: 12
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Resultados de Eficácia Clínica',
                    font: {
                        size: 16,
                    }
                }
            },
            elements: {
                bar: {
                    barThickness: 25 // Reduz a espessura das barras para caber melhor
                }
            }
        }
    });

    // Gráfico de Apreciabilidade Cosmética
    const ctx = document.getElementById('graficoAceitabilidade').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7'], // Números representando as categorias
            datasets: [
                {
                    label: 'Sim',
                    data: [80, 60, 70, 75, 65, 85, 90],
                    backgroundColor: 'rgba(141, 140, 140, 0.5)',
                },
                {
                    label: 'Não',
                    data: [20, 40, 30, 25, 35, 15, 10],
                    backgroundColor: 'rgba(255, 168, 168, 0.5)',
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Permite que a altura se ajuste de acordo com o canvas
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: (value) => value + '%',
                    },
                },
                y: {
                    ticks: {
                        font: {
                            size: 12
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Avaliação de Aceitabilidade e Resultados Percebidos',
                    font: {
                        size: 16,
                    }
                }
            },
            elements: {
                bar: {
                    barThickness: 25 // Reduz a espessura das barras para caber melhor
                }
            }
        }
    });
}
            