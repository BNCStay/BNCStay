<script setup lang="ts">
import Header from '../components/Header/Header.vue'
import Listing from '../components/Reusable/Listing/Listing.vue'
</script>

<template>
  <Header />

  <main>
    <div class="lg:mt-8 p-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <UiTransition
        group
        appear
        :config="[`slideY(-20, 0, 'px')`, 'fade']"
      >
        <Listing
          v-for="i in 40"
          :key="i"
          :src="`https://picsum.photos/1000/700?random=${i}`"
          style="transition-delay: 100ms;"
        />
      </UiTransition>
    </div>
  </main>
</template>
