import React, {useState, useEffect} from 'react';
import { Chart as ChartJS, Title, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(Title, ArcElement, Tooltip, Legend);

const DonutCO2 = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: [],
            datasets: [
                {
                    label: 'CO2-Air Quality Reading',
                    data: [183, 120],
                    borderColor: '',
                    backgroundColor: ['#A8F1C0', '#fecaca'],
                    // 'rgb(53, 162,235, 0.4)',
                    circumference: 240,
                    rotation: 240,
                },
            ]
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: 'CO2 Reading',
                    font: {
                        size: 20,
                        family: 'Futura',
                    }
                }
            },
            maintainAspectratio: false,
            responsive: true,
            cutout: '60%',
        })
    }, 
    [])
// centertext plugin
    const textCenter = {
        id: 'textCenter',
        afterDatasetsDraw(chart, args, options) {
            const { ctx, chartArea: {left, right, top, bottom, width, height} } = chart;

            ctx.save();

            ctx.font = '20px Futura';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('CO2 Levels:', width/2, height/2 + top);
            ctx.restore();

            ctx.font = '20px Futura';
            ctx.fillStyle = '#00B7FB';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('183 ppm', width/2, height/2 + top*1.7);
            ctx.restore();
            
        }
    }

  return (
    <div className='w-full md:col-span-2 relative lg:h-[40vh] h-[40vh] m-auto p-4 border rounded-lg bg-white'>
        <Doughnut data={chartData} options={chartOptions} plugins={[textCenter]}/>
        </div>
  )
}



export default DonutCO2;

// // var chart1 = new Chart(canvas, {
// //     type: 'doughnut',
// //     data: ['400', '200'],
// //     options: {
// //       rotation: -90,
// //       circumference: 180,
// //   }

