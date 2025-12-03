'use client';

import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, LineElement, PointElement, RadialLinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut, Bar, Radar } from 'react-chartjs-2';
import { EXPEDITION_DATA } from '@/data/expeditionData';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, LineElement, PointElement, RadialLinearScale, Title, Tooltip, Legend);

export const BudgetDonutChart: React.FC = () => {
  const data = {
    labels: EXPEDITION_DATA.budget.breakdown.map(item => item.category),
    datasets: [
      {
        data: EXPEDITION_DATA.budget.breakdown.map(item => item.total),
        backgroundColor: [
          'rgba(100, 116, 139, 0.8)',
          'rgba(148, 163, 184, 0.8)',
          'rgba(220, 38, 38, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(168, 85, 247, 0.8)',
        ],
        borderColor: [
          'rgb(100, 116, 139)',
          'rgb(148, 163, 184)',
          'rgb(220, 38, 38)',
          'rgb(59, 130, 246)',
          'rgb(168, 85, 247)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: 'rgb(226, 232, 240)',
          padding: 15,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        titleColor: 'rgb(248, 250, 252)',
        bodyColor: 'rgb(226, 232, 240)',
        borderColor: 'rgb(100, 116, 139)',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: €${value} (${percentage}%)`;
          }
        }
      },
    },
  };

  return (
    <div style={{ height: '300px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export const RiskHeatmapChart: React.FC = () => {
  const data = {
    labels: EXPEDITION_DATA.risks.map(r => r.name),
    datasets: [
      {
        label: 'Probability (%)',
        data: EXPEDITION_DATA.risks.map(r => r.probability),
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
      },
      {
        label: 'Impact (€)',
        data: EXPEDITION_DATA.risks.map(r => r.impact / 10), // Scale down for visualization
        backgroundColor: 'rgba(220, 38, 38, 0.6)',
        borderColor: 'rgb(220, 38, 38)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: 'rgb(148, 163, 184)',
          font: { size: 10 },
        },
        grid: {
          color: 'rgba(100, 116, 139, 0.1)',
        },
      },
      y: {
        ticks: {
          color: 'rgb(148, 163, 184)',
        },
        grid: {
          color: 'rgba(100, 116, 139, 0.1)',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'rgb(226, 232, 240)',
          padding: 15,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        titleColor: 'rgb(248, 250, 252)',
        bodyColor: 'rgb(226, 232, 240)',
        borderColor: 'rgb(100, 116, 139)',
        borderWidth: 1,
      },
    },
  };

  return (
    <div style={{ height: '300px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export const ResortComparisonChart: React.FC = () => {
  const resortColors = [
    { bg: 'rgba(239, 68, 68, 0.4)', border: 'rgb(239, 68, 68)', point: 'rgb(239, 68, 68)' }, // St. Anton - Bright Red
    { bg: 'rgba(59, 130, 246, 0.2)', border: 'rgb(59, 130, 246)', point: 'rgb(59, 130, 246)' }, // Ischgl - Blue
    { bg: 'rgba(34, 197, 94, 0.2)', border: 'rgb(34, 197, 94)', point: 'rgb(34, 197, 94)' }, // Chamonix - Green
    { bg: 'rgba(168, 85, 247, 0.2)', border: 'rgb(168, 85, 247)', point: 'rgb(168, 85, 247)' }, // Jasná - Purple
  ];

  const data = {
    labels: EXPEDITION_DATA.resortComparison.criteria.map(c => c.name),
    datasets: EXPEDITION_DATA.resortComparison.resorts.map((resort, index) => ({
      label: resort.name,
      data: [
        resort.scores.terrain,
        resort.scores.snow,
        resort.scores.apresSki,
        resort.scores.accessibility,
        resort.scores.value,
      ],
      backgroundColor: resortColors[index].bg,
      borderColor: resortColors[index].border,
      borderWidth: resort.selected ? 4 : 2,
      pointBackgroundColor: resortColors[index].point,
      pointBorderColor: resortColors[index].border,
      pointBorderWidth: resort.selected ? 3 : 2,
      pointRadius: resort.selected ? 6 : 4,
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          color: 'rgb(100, 116, 139)',
          backdropColor: 'transparent',
        },
        grid: {
          color: 'rgba(100, 116, 139, 0.2)',
        },
        angleLines: {
          color: 'rgba(100, 116, 139, 0.2)',
        },
        pointLabels: {
          color: 'rgb(203, 213, 225)',
          font: {
            size: 11,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: 'rgb(226, 232, 240)',
          padding: 12,
          font: {
            size: 11,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        titleColor: 'rgb(248, 250, 252)',
        bodyColor: 'rgb(226, 232, 240)',
        borderColor: 'rgb(100, 116, 139)',
        borderWidth: 1,
      },
    },
  };

  return (
    <div style={{ height: '350px' }}>
      <Radar data={data} options={options} />
    </div>
  );
};
