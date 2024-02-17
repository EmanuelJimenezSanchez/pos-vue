<script setup>
  import ShoppingCartItem from '@/components/ShoppingCartItem.vue'
  import Amount from '@/components/Amount.vue'
  import { useCartStore } from '@/stores/cart'
import { formatCurrency } from '@/helpers';

  const cart = useCartStore()
</script>

<template>
  <p v-if="cart.isEmpty" class="text-xl text-center text-gray-900">El Carrito esta vacio</p>
  
  <div v-else class="">
    <p class="text-4xl font-bold text-gray-900">Resumen de Venta</p>
    
    <div class="bg-white rounded-md shadow p-6 mt-6">
      <ul
        role="list"
        class="flex flex-col space-y-6"
      >
        <ShoppingCartItem
          v-for="item in cart.items"
          :key="item.id"
          :item="item"
        />
      </ul>
  
      <dl class="mt-8 space-y-6 text-sm font-medium text-gray-500">
        <Amount>
          <template #label>Subtotal:</template>
          {{ formatCurrency(cart.subtotal) }}
        </Amount>
  
        <Amount>
          <template #label>Impuestos:</template>
          {{ formatCurrency(cart.taxes) }}
        </Amount>
  
        <Amount>
          <template #label>Total a Pagar:</template>
          {{ formatCurrency(cart.total) }}
        </Amount>
      </dl>
    </div>
  </div>
</template>
