<script setup>
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";

const props = defineProps({
  href: String,
});

const route = useRoute();
const isActive = computed(() => route.path === props.href);
</script>

<template>
  <li class="text-md">
    <RouterLink
      :to="href"
      :class="{ 'text-primary-50': isActive, 'text-white': !isActive }"
    >
      <slot />
    </RouterLink>
  </li>
</template>
