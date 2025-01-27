<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <a
    :href="project.href"
    class="group relative rounded-lg bg-white shadow-md hover:bg-primary-50 hover:text-secondary-50"
  >
    <img
      class="h-[250px] rounded-lg object-cover object-top grayscale"
      :alt="project.title"
      :src="project.image"
      width="800"
      height="800"
    />

    <div
      class="absolute bottom-0 left-0 min-h-0 w-full overflow-hidden rounded-b-lg bg-primary-50 bg-opacity-70 p-3 text-white transition-[min-height] duration-150 group-hover:min-h-full group-hover:rounded-lg"
    >
      <div
        class="w-full group-hover:absolute group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:transform"
      >
        <h3 class="text-2xl font-semibold">{{ project.title }}</h3>
        <p v-html="project.body"></p>
      </div>
    </div>
  </a>
</template>
