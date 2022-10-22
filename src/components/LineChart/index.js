import { Line } from 'react-chartjs-2';
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import PropTypes from 'prop-types';
const LineChart = ({ label, dataChart }) => {
    const styles = {
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#4a90e2',
        pointBorderWidth: 3,
        pointRadius: 0,
        hoverRadius: 6,
    };
    ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);
    const chartData = {
        data: {
            labels: label && label,
            datasets: [
                {
                    ...(dataChart && dataChart[0]),
                    backgroundColor: '#4a90e2',
                    borderColor: '#4a90e2',
                    ...styles,
                },
                {
                    ...(dataChart && dataChart[1]),
                    backgroundColor: '#27bd9c',
                    borderColor: '#27bd9c',
                    ...styles,
                },
                {
                    ...(dataChart && dataChart[2]),
                    backgroundColor: '#e35050',
                    borderColor: '#e35050',
                    ...styles,
                },
            ],
        },

        options: {
            animation: {
                hover: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true,
                },
            },
            responsive: true,
            maintainAspectRatio: false,
            title: {
                fontColor: '#fff',
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    position: 'nearest',
                    intersect: false,
                    yAlign: 'bottom',
                    backgroundColor: '#e35050',
                    titleFontSize: 16,
                    titleFontColor: '#0066ff',
                    bodyFontColor: '#000',
                    bodyFontSize: 14,
                    displayColors: false,
                    label: {
                        display: false,
                    },
                },
            },
            interaction: {
                mode: 'dataset',
                intersect: false,
            },
            stacked: false,

            scales: {
                y: {
                    display: false,
                },
                x: {
                    ticks: { color: '#fff', beginAtZero: true, fontWeight: 400 },
                },
            },
        },
    };
    return <Line data={chartData.data} options={chartData.options} />;
};

LineChart.propTypes = {
    label: PropTypes.array,
    dataChart: PropTypes.array,
};
export default LineChart;
