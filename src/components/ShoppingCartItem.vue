<script setup>
  import{ useCartStore } from '@/stores/cart';
  import { formatCurrency } from '@/helpers';

  const cart = useCartStore();

  defineProps({
    item: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <li class="flex space-x-6 items-center">
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
        @change="cart.updateQuantity(item.id, +$event.target.value)"
        :value="item.quantity"
      >
        <option 
          v-for="n in cart.checkProductAvailability(item)"
          :value="n"  
          :key="n"
        >
          {{ n }}
        </option>
      </select>
    </div>
  </li>
</template>

