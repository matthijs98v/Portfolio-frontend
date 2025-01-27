<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Add icons to the library to make them available globally
library.add(faLinkedin, faInstagram, faGithub, faEnvelope);
</script>

<template>
  <footer class="w-full py-5 text-center">
    <div class="mb-4 flex justify-center gap-5 text-3xl text-white">
      <a
        href="https://www.linkedin.com/in/matthijs-verheijen/"
        target="_blank"
        class="hover:text-primary-50"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>

      <a
        href="https://www.instagram.com/matthijsverheijen/"
        target="_blank"
        class="hover:text-primary-50"
      >
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>

      <a
        href="https://github.com/matthijs98v"
        target="_blank"
        class="hover:text-primary-50"
      >
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>

      <a
        href="mailto:info@matthijsverheijen.com"
        target="_blank"
        class="hover:text-primary-50"
      >
        <font-awesome-icon :icon="['fas', 'envelope']" />
      </a>
    </div>

    <span class="text-white">&copy; Matthijs Verheijen 2023 - 2025 </span>
  </footer>
</template>
