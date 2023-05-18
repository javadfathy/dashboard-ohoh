<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";

const series = [
  {
    name: 'Earning',
    data: [15, 10, 20, 8, 12, 18, 12, 5],
  },
  {
    name: 'Expense',
    data: [-7, -10, -7, -12, -6, -9, -5, -8],
  },
]

const chartOptions = {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
</script>

<template>
  <main>
    <h3 class="text-3xl">Dashboard</h3>
    <VueApexCharts width="500" type="bar" :options="chartOptions" :series="series"></VueApexCharts>
  </main>
</template>
