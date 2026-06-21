<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}>()
</script>

<template>
  <div
    class="mb-12 md:mb-16"
    :class="align === 'left' ? 'text-left' : 'text-center'"
  >
    <div
      class="inline-block h-1 w-12 rounded-full bg-gradient-to-r from-cyan-accent to-blue-500 mb-4"
    />
    <h2 class="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] tracking-tight">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-3 text-muted-foreground text-base md:text-lg max-w-2xl" :class="align === 'left' ? '' : 'mx-auto'">
      {{ subtitle }}
    </p>
  </div>
</template>
