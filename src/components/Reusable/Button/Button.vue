<script lang="ts" setup>
import { PropType } from 'vue';

defineProps({
  type: {
    type: String as PropType<'submit' | 'reset' | 'button'>,
    default: 'button'
  }
})
</script>

<template>
  <button
    :type="type"
    class="cursor-default grid grid-flow-col gap-x-2 transition-all active:opacity-70 active:scale-[0.9875] text-sm items-center relative before:absolute before:size-[100%] before:inset-0 before:bg-[currentcolor] before:opacity-0 before:transition-opacity can-hover:hover:before:opacity-[0.03] before:rounded-[inherit]"
  >
    <slot />
  </button>
</template>