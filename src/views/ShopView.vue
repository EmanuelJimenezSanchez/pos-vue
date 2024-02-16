<script setup>
  import { storeToRefs } from 'pinia'
  import MainNav from '@/components/MainNav.vue'
  import ProductCard from '@/components/ProductCard.vue';
  import ShoppingCart from '@/components/ShoppingCart.vue';
  import { useProductsStore } from '@/stores/products'

  const products = useProductsStore()
  const { filteredProducts, noResults } = storeToRefs(products)
</script>

<template>
  <div>
    <MainNav />

    <main class="pt-10 xl:flex xl:h-screen xl:overflow-y-hidden">
      <div class="xl:w-2/3 xl:screen xl:overflow-y-scroll py-32 lg:py-24 px-10">
        <p v-if="noResults" class="text-center text-4xl">No hay Producctos</p>

        <div
          v-else
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>

      <aside class="xl:w-1/3 xl:screen xl:overflow-y-scroll py-24 px-10">
        <ShoppingCart />
      </aside>
    </main>
  </div>
</template>

