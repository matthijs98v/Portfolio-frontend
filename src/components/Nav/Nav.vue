<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isOpen = ref(false);

function toggleNavbar() {
  isOpen.value = !isOpen.value;
  console.log(isOpen.value);
}

function closeNavbar() {
  isOpen.value = false;
}
</script>

<template>
  <div class="bg-secondary-100">
    <nav class="container mx-auto px-6">
      <div class="mx-auto justify-between py-12 md:flex md:items-center">
        <div>
          <div class="flex items-center justify-between md:block">
            <RouterLink to="/">
              <img
                height="278"
                width="480"
                src="/images/logo.png"
                alt="Logo"
                class="h-24 w-auto"
              />
            </RouterLink>

            <!-- Mobile hamburger button -->
            <div class="md:hidden block">
              <button
                class="relative group focus:outline-none"
                @click="toggleNavbar"
                tabindex="0"
              >
                <div
                  class="space-y-2 flex flex-col justify-center items-center"
                >
                  <div
                    class="rounded-full w-8 h-1 bg-white transition-all duration-200 ease-in-out"
                    :class="{
                      'translate-y-[12px]': isOpen,
                      '-rotate-45': isOpen,
                    }"
                  ></div>
                  <div
                    class="rounded-full w-8 h-1 bg-white transition-all duration-200 ease-in-out"
                    :class="{ 'opacity-0': isOpen }"
                  ></div>
                  <div
                    class="rounded-full w-8 h-1 bg-white transition-all duration-200 ease-in-out"
                    :class="{
                      'translate-y-[-12px]': isOpen,
                      'rotate-45': isOpen,
                    }"
                  ></div>
                </div>
              </button>
            </div>
            <!-- End -->
          </div>
        </div>
        <!-- The Menu-->
        <div
          :class="[
            'md:h-auto md:overflow-visible overflow-hidden transition-all duration-200 ease-in-out md:max-h-none',
            isOpen ? 'max-h-screen' : 'max-h-0',
          ]"
        >
          <div
            :class="[
              'mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0',
            ]"
          >
            <ul
              @click="closeNavbar"
              :class="[
                'items-center justify-center space-y-8 text-lg md:flex md:space-x-6 md:space-y-0',
              ]"
            >
              <slot />
            </ul>
          </div>
        </div>
        <!-- End -->
      </div>
    </nav>
  </div>
</template>
