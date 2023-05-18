<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheSidebar from './components/TheSidebar.vue'
</script>

<template>
  <section>
    <TheSidebar />
    <section>
      <RouterView />
    </section>
  </section>
</template>
