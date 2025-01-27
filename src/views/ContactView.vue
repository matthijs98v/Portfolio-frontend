<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";

const isOpen = ref(false);

function setIsOpen(value) {
  isOpen.value = value;
}
</script>

<template>
  <!--Tests-->
  <div class="container mx-auto px-4 py-2">
    <h2>Tests</h2>

    <Dialog :open="isOpen" @close="setIsOpen">
      <DialogPanel>
        <DialogTitle>Deactivate account</DialogTitle>
        <DialogDescription>
          This will permanently deactivate your account
        </DialogDescription>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button @click="setIsOpen(false)">Deactivate</button>
        <button @click="setIsOpen(false)">Cancel</button>
      </DialogPanel>
    </Dialog>
  </div>
</template>
