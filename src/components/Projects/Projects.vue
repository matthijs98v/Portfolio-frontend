<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";
import Spinner from "../Utils/Spinner.vue";

const projects = ref([]);
const loaded = ref(false);

const apiUrl = ref(import.meta.env.VITE_API_URL || "http://localhost:8080");

onMounted(async () => {
  console.log(apiUrl.value);
  await axios
    .get(`${apiUrl.value}/api/projects`)
    .then(function (res) {
      projects.value = res.data.projects;
    })
    .catch(function (error) {
      projects.value = [];
      console.log(error);
    })
    .finally(function () {
      loaded.value = true;
    });
});
</script>

<template>
  <div class="container mx-auto px-4 py-24">
    <h2>Projects</h2>
    <div
      v-if="loaded"
      class="grid gap-6 text-center md:grid-cols-2 lg:grid-cols-3"
    >
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>
