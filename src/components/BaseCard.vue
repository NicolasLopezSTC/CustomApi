<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<script setup>
const props = defineProps({
  monster: {
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
    v-if="$attrs.character.id"
    :to="`/monsters/${$attrs.character.id}`"
    class="rounded-lg bg-white shadow-lg"
  >
    <div>
      {{ $attrs.character.name }}
    </div>
    <div class="p-4">
      <h2 class="text-1xl font-semibold text-gray-800">
        {{ $attrs.character.description }}
      </h2>
    </div>
  </RouterLink>
</template>
