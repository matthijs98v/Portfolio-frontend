<script setup>
import { RouterView } from "vue-router";
import Nav from "@/components/Nav/Nav.vue";
import NavItem from "@/components/Nav/NavItem.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Nav class="z-[999]">
    <NavItem href="/">Home</NavItem>
    <NavItem href="/projects">Projects</NavItem>
    <NavItem href="/about">About</NavItem>
    <!-- <NavItem href="/contact">Contact</NavItem> -->
  </Nav>

  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <KeepAlive>
        <main :key="$route.path">
          <component :is="Component" />
        </main>
      </KeepAlive>
    </Transition>
  </RouterView>

  <Footer />
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(200px);
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s ease-in-out;
}
</style>
