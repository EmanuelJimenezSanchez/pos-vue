<script setup>
  import { ref } from 'vue'
  import VueTailwindDatepicker from 'vue-tailwind-datepicker'
  import { useSalesStore } from '@/stores/sales'
  import SaleDetails from '@/components/SaleDetails.vue'
  import { formatCurrency } from '@/helpers';

  const sales = useSalesStore()

  const formatter = ref({
    date: 'DD/MM/YYYY',
    month: 'MMMM'
  })

  console.log(sales.salesCollection)
</script>

<template>
  <h1 class="text-4xl font-black my-10">Resumen de Ventas</h1>
  
  <div class="md:flex md:items-start gap-5">
    <div class="md:w-1/2 lg:w-1/3 bg-white flex justify-center p-5">
      <VueTailwindDatepicker
        i18n="es"
        as-single
        no-input
        :formatter="formatter"
        v-model="sales.date"
      />
    </div>

    <div class="md:w-1/2 lg:w-2/3 space-y-5 lg:h-screen lg:overflow-y-scroll p-5 pt-0 pb-32">
      <p
        class="text-center text-lg"
        v-if="sales.isDateSelected"
      >
        Ventas de la fecha: <span class="font-black">{{ sales.date }}</span>
      </p>

      <p v-else class="text-center text-lg">Selecciona una fecha</p>

      <div v-if="sales.salesCollection.length" class="space-y-5">
        <p class="text-right text-2xl">Total del dia:

          <span class="font-black">
            {{ formatCurrency(sales.totalSalesOfDay) }}
          </span>
        </p>

        <SaleDetails
          v-for="sale in sales.salesCollection"
          :key="sale.id"
          :sale="sale"
        />

      </div>

      <p v-else-if="sales.noSales" class="flex text-lg h-32 items-end justify-center">No hay ventas en este dia</p>
    </div>
  </div>
</template>
