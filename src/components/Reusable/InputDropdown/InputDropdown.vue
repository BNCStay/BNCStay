<script lang="ts" setup>
import type { VNode } from 'vue'

interface Props {
  label?: string
  inputValue?: string
  isOpen: boolean
}

const emit = defineEmits(['toggleIsOpen'])

const props = defineProps<Props>()
</script>

<template>
  <div class="relative">
    <div @click="emit('toggleIsOpen')">
      <div class="ml-4 pb-2 font-medium">
        <slot name="label">{{ label }}</slot>
      </div>

      <div
        class="h-12 rounded-full cursor-pointer border border-primary/30 px-4 grid grid-cols-[1fr,auto] justify-between items-center"
      >
        <div>
          <slot name="inputValue">{{ inputValue }}</slot>
        </div>

        <div :class="{ 'rotate-180': !isOpen }">
          ^
        </div>
      </div>

      <UiTransition
        :config="['slideY(-20, 0, `px`)', 'fade']"
        spring="gentle"
        :duration="250"
      >
        <div
          v-if="isOpen"
          class="bg-white z-10 h-56 min-w-full absolute top-[100%] mt-2 rounded-lg shadow-2xl border border-black/10"
        ></div>
      </UiTransition>
    </div>
  </div>
</template>