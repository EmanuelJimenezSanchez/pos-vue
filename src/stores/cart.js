import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {

  const items = ref([])
  const subtotal = ref(0)

  const MaxProducts = 5

  watch(items, () => {
    subtotal.value = items.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  }, {
    deep: true
  })

  function addItem(item) {
    items.value.push({...item, quantity: 1, id: item.id})
  }

  function updateQuantity(id, quantity) {
    items.value = items.value.map( item => item.id === id ? {...item, quantity} : item)
  }

  const isEmpty = computed(() => items.value.length === 0)

  const checkProductAvailability = computed(() => {
    return (item) => item.availability < MaxProducts ? item.availability : MaxProducts
  })

  return {
    addItem,
    subtotal,
    isEmpty,
    items,
    checkProductAvailability,
    updateQuantity
  }
})