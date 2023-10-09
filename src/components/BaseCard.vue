<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<script setup>
const props = defineProps({
  Monster: {
    type: Object,
    default: () => ({
      id: -1,
      name: 'Unknown',
      description: 'https://via.placeholder.com/150',
    }),
  },
})
</script>

<template>
  <RouterLink
    v-if="props.Monster.id"
    :to="`${props.Monster.id}`"
    class="rounded-lg bg-white shadow-lg"
  >
    <div>
      {{ props.Monster.description }}
    </div>
    <div class="p-4">
      <h2 class="text-1xl font-semibold text-gray-800">
        {{ props.Monster.name }}
      </h2>
    </div>
  </RouterLink>
</template>
