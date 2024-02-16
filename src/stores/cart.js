import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {

  const items = ref([])

  function addItem(item) {
    items.value.valur.push(item)
  }

  return {
    addItem
  }
})