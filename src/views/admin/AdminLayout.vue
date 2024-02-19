<script setup>
  import AdminNav from '@/components/AdminNav.vue'
  import { RouterView } from 'vue-router';
  
</script>

<template>
  <AdminNav />
  
  <div class="pt-20 px-10 container mx-auto lg:h-screen">
    <RouterView />
  </div>
</template>


