import React from 'react';
import styled from 'styled-components';
import DonutChart from './DonutChart';
import ReactApexChart from 'react-apexcharts';
import { useTranslation } from "react-i18next";
import { t } from 'i18next';

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 100;
`

const Text = styled.h1`
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: ${props => props.theme.fontxxxl};

        letter-spacing: 0.08em;
        color: #D5FF10;

        @media (max-width: 48em){
            font-size: ${props => props.theme.fontxxl};
        }

        @media (max-width: 30em){
            font-size: ${props => props.theme.fontlg};
        }
`

const Container = styled.div`
    position: relative;
    width: 80%;
    min-height: 80vh;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    

        @media (max-width: 48em){
            display: flex;
            flex-direction: column;
        }

        @media (max-width: 30em){
            display: flex;
            flex-direction: column;
        }
`

const Title = styled.h1`
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: ${props => props.theme.fontxxxl};

        letter-spacing: 0.08em;

        -webkit-text-stroke: 2px #D5FF10;
        color: transparent;

        @media (max-width: 48em){
            font-size: ${props => props.theme.fontxxl};
        }

        @media (max-width: 30em){
            font-size: ${props => props.theme.fontxl};
        }

        @media (max-width: 30em){
            -webkit-text-stroke: 0.5px #D5FF10;
        }
        
`
const apexConfig = {
          
    series: [100, 100, 100, 100, 100],
    options: {
      chart: {
        height: 390,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            }
          }
        }
      },
      colors: ['#D5FF10','#01CC9B', '#14A0C0', '#5059AB', '#09909F'],
      labels: ['Lottery', 'Top Donators', 'Charity', 'Team', 'Marketing'],
      legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'left',
        offsetX: 160,
        offsetY: 15,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0
        },
        formatter: function(seriesName, opts) {
          return seriesName + ": 30%"; //+ ":  " + opts.w.globals.series[opts.seriesIndex]
        },
        itemMargin: {
          vertical: 3
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
              show: false
          }
        }
      }]
    },
  
  
  };

const Tokenomic = () => {
    const { t } = useTranslation();
    return(
        <>
            {/* <Text>{t("Tokenomic_Title")}</Text>
            <Container> */}
                {/* <Title>Fine</Title> */}
                    {/* <DonutChart /> */}
                    <ReactApexChart options={apexConfig.options} series={apexConfig.series} type="radialBar" height={390} />
                {/* <Title>Pandas</Title> */}
            {/* </Container> */}
        </>
    )
}

export default Tokenomic;