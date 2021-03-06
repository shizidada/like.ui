import React, { FunctionComponent, useEffect } from 'react';
import { Chart } from '@antv/g2'; // , TooltipItem
import { Card } from 'antd';
import { importData } from './data/ImportItem';

import './index.css';

interface ImportBrokenLineProps {
  renderId: string;
}

const ImportBrokenLine: FunctionComponent<ImportBrokenLineProps> = ({ renderId }) => {
  const initCahrt = () => {
    const chart: Chart = new Chart({
      container: renderId,
      forceFit: true,
      height: 220,
      padding: [20, 20, 60, 60] // 上右下左
    });
    chart.source(importData);
    chart.tooltip({
      // follow: false,
      // crosshairs: {
      //   type: 'y',
      // },
      // htmlContent: function htmlContent(title: string, items: TooltipItem[]) {
      // const alias: any = {
      //   download: '当日累计下载量',
      //   register: '当日累计注册量',
      //   bill: '当日累计成交量',
      // };
      // let html = '<div class="custom-tooltip">';
      // for (let i = 0; i < items.length; i += 1) {
      //   const item = items[i];
      //   const { color, value } = item;
      //   const name = alias[item.name];
      //   /* eslint-disable prefer-template */
      //   const domHead =
      //     '<div class="custom-tooltip-item" style="border-left-color:' + color + '">';
      //   const domName = '<div class="custom-tooltip-item-name">' + name + '</div>';
      //   const domValue = '<div class="custom-tooltip-item-value">' + value + '</div>';
      //   const domTail = '</div>';
      //   html += domHead + domName + domValue + domTail;
      // }
      // return html + '</div>';
      // },
    });
    chart.axis('date', {
      label: {
        textStyle: {
          fill: '#aaaaaa'
        }
      }
    });
    chart.axis('value', {
      label: {
        textStyle: {
          fill: '#aaaaaa'
        },
        formatter: function formatter(text) {
          return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
        }
      }
    });
    // chart.legend(false);
    // chart.legend({ position: 'bottom' });
    chart.legend({
      position: 'bottom'
    });

    chart
      .line()
      .position('date*value')
      .color('type');

    chart.point().position('date*value');

    chart.showTooltip({
      x: 80,
      y: 100
    });

    chart.render();
  };

  useEffect(() => {
    initCahrt();
    return () => {};
  });

  return (
    <Card>
      <div id={renderId}></div>
    </Card>
  );
};
export default ImportBrokenLine;
