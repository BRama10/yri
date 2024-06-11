import { ChartProps } from "@/app/meta";
import { mapDimensions } from "@/utils";
import { useEffect } from "react";
import { Pie } from "react-chartjs-2";

import { Chart, ArcElement, Tooltip} from 'chart.js'
Chart.register(ArcElement, Tooltip);

export function reduceArraysByBreakdown(
    label_list: string[],
    breakdown: number[],
    backgroundColor: string[],
  ) {
    // Initialize empty arrays for the result
    const reducedLabelList: string[] = [];
    const reducedBreakdown: number[] = [];
    const reducedBackgroundColor: string[] = [];
  
    for (let i = 0; i < breakdown.length; i++) {
      // Check if the breakdown value is not equal to 0
      if (breakdown[i] !== 0) {
        // Push corresponding elements to the reduced arrays
        reducedLabelList.push(label_list[i]);
        reducedBreakdown.push(breakdown[i]);
        reducedBackgroundColor.push(backgroundColor[i]);
      }
    }
  
    return {
      reducedLabelList,
      reducedBreakdown,
      reducedBackgroundColor,
    };
  }

export const ChartComponent: React.FC<ChartProps> = ({
    label_list = ['No Finalist Data'],
    breakdown = [1],

  }) => {
    const frozen_data = reduceArraysByBreakdown(label_list, breakdown, [
      '#E57373', '#F06292', '#9575CD', '#64B5F6', '#4FC3F7',
      '#4DB6AC', '#81C784', '#DCE775', '#FFF176', '#FFD54F',
      '#FFB74D', '#FF8A65', '#A1887F', '#90A4AE', '#9E9E9E',
      '#78909C', '#455A64', '#F48FB1', '#CE93D8', '#FFAB91',
      '#AED581', '#FFCC80', '#FFD180', '#FFB380', '#90CAF9'
    ]);

    console.log('frozen', frozen_data);
  
    var data;
  
    if (label_list[0] == 'No Finalist Data') {
      data = {
        labels: frozen_data.reducedLabelList,
        datasets: [{
          data: frozen_data.reducedBreakdown,
          backgroundColor: ['#808080'],
          hoverBackgroundColor: ['#808080'],
        }]
      };
    } else {
    data = {
      labels: frozen_data.reducedLabelList,
      datasets: [{
        data: frozen_data.reducedBreakdown,
        backgroundColor: frozen_data.reducedBackgroundColor,
        hoverBackgroundColor: frozen_data.reducedBackgroundColor
      }]
    };
  }

  
    return (
      <>
        <section id='chart-component' className={`flex w-1/3 self-center h-auto mb-5`}>
          <Pie
            data={data}
            width={200}
            height={200}
          />
        </section>
      </>
    );
  }