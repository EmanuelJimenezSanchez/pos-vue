<script setup>
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import Link from '@/components/Link.vue'
  import useImage from '@/composables/useImage'
  import { useProductsStore } from '@/stores/products'

  const { onFileChange, url, isImageUploaded } = useImage()
  const products = useProductsStore()
  const router = useRouter()

  const formData = reactive({
    name: '',
    image: '',
    category: '',
    price: '',
    availability: ''
  })

  const submitHandler = async data => {
    const { image, ...values } = data

    try {
      await products.createProduct({
        ...values,
        image: url.value
      })
      router.push({name: 'products'})

    } catch (error) {
      console.error(error)
    }
    
  }

</script>

<template>
  <div>
    <Link
      to="products"
    >
      Volver
    </Link>

    <h1 class="text-4xl font-black my-10">Nuevo Producto</h1>

    <div class="flex justify-center bg-white shadow">
      <div class="mt-10 p-10 w-full 2xl:w-2/4">
        <FormKit
          type="form"
          submit-label="Agregar Producto"
          incomplete-message="No se pudo enviar, revisa los mensajes"
          @submit="submitHandler"
          :value="formData"
        >
          <FormKit
            type="text"
            label="Nombre"
            name="name"
            placeholder="Nombre del producto"
            validation="required"
            :validation-messages="{
              required: 'El nombre del producto es obligatorio'
            }"
            v-model.trim="formData.name"
          />

          <FormKit
            type="file"
            label="Imagen Producto"
            name="image"
            validation="required"
            :validation-messages="{
              required: 'La imagen es obligatoria'
            }"
            accept=".jpg"
            @change="onFileChange"
            v-model.trim="formData.image"
          />

          <div v-if="isImageUploaded">
            <p class="font-black mt-4">Imagen Producto:</p>
            <img
              :src="url"
              alt="Nueva Imagen Producto"
              class="w-40 h-40 object-cover rounded-lg my-3"
            />
          </div>

          <FormKit
            type="select"
            label="Categoria"
            name="category"
            validation="required"
            :validation-messages="{
              required: 'La categoria es obligatoria'
            }"
            :options="products.categoryOptions"
            v-model.number="formData.category"
          />

          <FormKit
            type="number"
            label="Precio"
            name="price"
            placeholder="Precio del producto"
            validation="required"
            :validation-messages="{
              required: 'El precio del producto es obligatorio'
            }"
            min="1"
            v-model.number="formData.price"
          />

          <FormKit
            type="number"
            label="Disponibles"
            name="availability"
            placeholder="Cantidad disponible"
            validation="required"
            :validation-messages="{
              required: 'La cantidad disponible es obligatoria'
            }"
            min="1"
            v-model.number="formData.availability"
          />
    
        </FormKit>

      </div>

    </div>

  </div>
</template>
