import React, {useState, useEffect} from 'react';
import { Chart as ChartJS, Title, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(Title, ArcElement, Tooltip, Legend);

const DonutPM25 = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: [],
            datasets: [
                {
                    label: 'PM-25 Air Quality Reading',
                    data: [30, 28],
                    borderColor: '',
                    backgroundColor: ['#A8F1C0', '#fecaca'],
                    circumference: 240,
                    rotation: 240,
                },
            ]
        })
        setChartOptions({
            plugins: {
                title: {
                    display: true,
                    text: 'PM-25 Reading',
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
            ctx.fillText('PM2.5:', width/2, height/2 + top);
            ctx.restore();

            ctx.font = '20px Futura';
            ctx.fillStyle = '#00B7FB';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('15.2 ug/m3', width/2, height/2 + top*1.7);
            ctx.restore();
            
        }
    }

  return (
    <div className='w-full md:col-span-2 relative lg:h-[40vh] h-[40vh] m-auto p-4 border rounded-lg bg-white'>
        <Doughnut data={chartData} options={chartOptions} plugins={[textCenter]}/>
        </div>
  )
}



export default DonutPM25;


