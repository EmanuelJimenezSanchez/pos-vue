import { ref, computed, watch, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { useCouponStore } from './coupons'

export const useCartStore = defineStore('cart', () => {

  const coupon = useCouponStore()
  const items = ref([])
  const subtotal = ref(0)
  const taxes = ref(0)
  const total = ref(0)

  const MAX_PRODUCTS = 5
  const TAX_RATE = 0.10

  // watch(items, () => {
  //   subtotal.value = items.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  //   taxes.value = subtotal.value * TAX_RATE
  //   total.value = subtotal.value + taxes.value
  // }, {
  //   deep: true
  // })

  watchEffect(() => {
    subtotal.value = items.value.reduce((total, item) => total + (item.price * item.quantity), 0)
    taxes.value = subtotal.value * TAX_RATE
    total.value = subtotal.value + taxes.value - coupon.discount
  })

  function addItem(item) {
    const index = isItemInCart(item.id)
    if (index >= 0) {
      if (isProductAvailable(items.value[index])) {
        alert('Has alcanzado el límite')
        return
      }
      items.value[index].quantity++
    } else {
      items.value.push({...item, quantity: 1, id: item.id})
    }
  }

  function updateQuantity(id, quantity) {
    items.value = items.value.map( item => item.id === id ? {...item, quantity} : item)
  }

  function removeItem(id) {
    if (confirm('¿Estás seguro de eliminar el producto?') === false) return
    items.value = items.value.filter(item => item.id !== id)
  }

  const isItemInCart = id => items.value.findIndex(item => item.id === id)
  const isProductAvailable = item => item.quantity >= item.availability || item.quantity >= MAX_PRODUCTS

  const isEmpty = computed(() => items.value.length === 0)

  const checkProductAvailability = computed(() => {
    return (item) => item.availability < MAX_PRODUCTS ? item.availability : MAX_PRODUCTS
  })

  return {
    addItem,
    removeItem,
    subtotal,
    taxes,
    total,
    isEmpty,
    items,
    checkProductAvailability,
    updateQuantity
  }
})