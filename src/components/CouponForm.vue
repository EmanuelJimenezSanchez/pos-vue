<script setup>
  import { useCouponStore } from '@/stores/coupons'

  const coupon = useCouponStore()
</script>

<template>
  <p class="mt-8 font-bold ">Tienes un Cupón?</p>

  <div class="flex mt-2">
    <input 
      type="text"
      placeholder="Ingresa un cupón"
      class="p-2 bg-white border-gray-300 w-full rounded-l-md disabled:opacity-50"
      v-model="coupon.couponInput"
      :disabled="coupon.isValidCoupon"
    />

    <button
      type="button"
      class="p-3 bg-green-400 font-bold rounded-r-md disabled:opacity-50"
      @click="coupon.applyCoupon"
      :disabled="coupon.isValidCoupon"
    >
      Canjear
    </button>
  </div>

  <p class="mt-2 py-2 text-center text-sm font-extrabold">{{ coupon.couponValidationMessage }}</p>
</template>

