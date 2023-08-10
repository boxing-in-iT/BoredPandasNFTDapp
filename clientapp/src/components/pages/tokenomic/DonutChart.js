import { Pie, measureTextWidth } from '@ant-design/plots';
import { useTranslation } from "react-i18next";


const DonutChart = () => {
  const { t } = useTranslation();
  function renderStatistic(containerWidth, text, style) {
    const { width: textWidth, height: textHeight } = measureTextWidth(text, style);
    const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2

    let scale = 1;

    if (containerWidth < textWidth) {
      scale = Math.min(Math.sqrt(Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))), 1);
    }

    const textStyleStr = `width:${containerWidth}px;`;
    return `<div style="${textStyleStr};font-size:${scale}em;line-height:${scale < 1 ? 1 : 'inherit'};">${text}</div>`;
  }

  const data = [
    {
      type: 'Lottery',
      value: 30,
    },
    {
      type: 'Top Donaters',
      value:10,
    },
    {
      type: 'Charity',
      value: 10,
    },
    {
      type: 'Team',
      value: 30,
    },
    {
      type: 'Marketing',
      value: 20,
    },
  ];
  const config = {
    autoFit: true,
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    color: ({ type }) => {
        if(type === 'Marketing'){
            return '#5059AB';
        }
        else if(type === 'Lottery'){
            return '#D5FF10';
        }
        else if(type === 'Charity'){
            return '#01CC9B';
        } 
        else if(type === 'Team'){
            return '#14A0C0';
        }
        else if(type === 'Top Donaters'){
            return '#FFA500';
        }
      },
    radius: 1,
    innerRadius: 0.64,

    label: {
      type: 'inner',
      offset: '-50%',
      style: {
        textAlign: 'center',
        fontSize: 20,
      },
      autoRotate: false,
      content: '{value}',
    },

    LegendItem: {
        style: {
            fontSize: '32px',
            color: 'white',
          },
    },

    statistic: {
      title: {
        style: {
            color: 'white',
          },
        offsetY: -4,
        customHtml: (container, view, datum) => {
          const { width, height } = container.getBoundingClientRect();
          const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
          const text = datum ? datum.type : 'Tokenomic';
          return renderStatistic(d, text, {
            fontSize: 24,
          });
        },
      },
      content: {
        offsetY: 4,
        style: {
          fontSize: '32px',
          color: 'white',
        },
        customHtml: (container, view, datum, data) => {
          const { width } = container.getBoundingClientRect();
          const text = datum ? `% ${datum.value}` : `% ${data.reduce((r, d) => r + d.value, 0)}`;
          return renderStatistic(width, text, {
            fontSize: 32,
          });
        },
      },
    },
    
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
      {
        type: 'pie-statistic-active',
      },
    ],
  };
  return <Pie {...config} />;
};

export default DonutChart;