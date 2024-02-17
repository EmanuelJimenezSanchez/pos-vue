<template>
  <div class="flex justify-between p-1">
    <dt>

      <slot name="label" />
    </dt>

    <dd class="text-gray-900 font-extrabold">

      <slot></slot>
    </dd>
  </div>
</template>