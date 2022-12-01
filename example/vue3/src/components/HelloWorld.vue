<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <g-markdown file="../markdown/simple.md" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
