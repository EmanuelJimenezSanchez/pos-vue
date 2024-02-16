<script setup>
  import { formatCurrency } from '@/helpers';

  defineProps({
    item: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <li class="flex space-x-6 p-6 items-center">
    <img 
      :src="item.image" 
      :alt="'Imagen de ' + item.name"
      class="size-24 flex-none rounded-md"
    />

    <div class="flex-auto space-y-2">
      <h3 class="text-gray-900 font-extrabold">{{ item.name }}</h3>

      <p>{{ formatCurrency(item.price) }}</p>

      <select
        class="w-32 text-center p-2 rounded-lg bg-white"
      >
        <option 
          v-for="n in 5"
          :value="n"  
        >
          {{ n }}
        </option>
      </select>
    </div>
  </li>
</template>

