<script lang="ts" setup>
import { ref } from 'vue'
import InputDropdown from '../Reusable/InputDropdown/InputDropdown.vue'
import RecentIcon from '../UI/Icon/RecentIcon.vue';
import HeartIcon from '../UI/Icon/HeartIcon.vue';
import UserIcon from '../UI/Icon/UserIcon.vue';

const items = [
  {
    title: "Recently viewed",
  },
  {
    title: "Favorite",
  },
  {
    title: "Language",
  },
  {
    title: "Login",
  },
];

const openedDropdownId = ref(-1)

function toggleIsOpen(id: number) {
  if (openedDropdownId.value === id) {
    openedDropdownId.value = -1
  } else {
    openedDropdownId.value = id
  }
}
</script>

<template>
  <header
    class="hidden lg:grid relative w-full grid-cols-[1fr] grid-row-[auto,auto] justify-items-center border-b border-black/5"
  >
    <div class="border-b-black/5 border-b h-14 w-full flex justify-center bg-white fixed top-0 z-10">
      <div class="w-full max-w-[1100px] h-full grid grid-cols-[auto,1fr,1fr] items-center">
        <div class="font-bold">Logo</div>

        <div></div>

        <div class="h-full">
          <nav class="h-full">
            <ul class="grid grid-flow-col gap-2 h-full">
              <li
                v-for="(item, i) in items"
                class="h-full"
              >
                <a
                  href="#"
                  class="h-full hover:bg-black/5 flex items-center justify-center font-semibold"
                >{{ item.title }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div class="hidden lg:block w-full max-w-[1100px] p-6 mt-14">
      <div class="shadow-lg rounded-lg h-16 bg-[white] w-full grid grid-cols-[30%,30%,1fr]">
        <div class="border-r border-r-black/5 "></div>

        <div class="border-r border-r-black/5 "></div>

        <div class=""></div>
      </div>

      <div class="mt-8 grid grid-cols-[repeat(4,1fr)] gap-4 items-center">
        <InputDropdown
          label="Price"
          input-value="Choose price"
          :is-open="openedDropdownId === 0"
          @toggleIsOpen="toggleIsOpen(0)"
        />

        <InputDropdown
          label="Filters"
          input-value="Choose one"
          :is-open="openedDropdownId === 1"
          @toggleIsOpen="toggleIsOpen(1)"
        />

        <InputDropdown
          label="Guest rating"
          input-value="Choose one"
          :is-open="openedDropdownId === 2"
          @toggleIsOpen="toggleIsOpen(2)"
        />

        <InputDropdown
          label="Property type"
          input-value="Choose one"
          :is-open="openedDropdownId === 3"
          @toggleIsOpen="toggleIsOpen(3)"
        />
      </div>
    </div>
  </header>

  <header class="lg:hidden fixed z-50 bottom-0 h-16 w-full border-t border-black/15 bg-white">
    <nav class="h-full">
      <ul class="h-full grid grid-flow-col grid-cols-[1fr,1fr,1fr] items-center justify-items-center gap-4">
        <li class="rounded h-10 w-10 grid place-items-center">
          <a href="#">
            <RecentIcon />
          </a>
        </li>

        <li class="rounded h-10 w-10 grid place-items-center">
          <a href="#">
            <HeartIcon />
          </a>
        </li>

        <li class="rounded h-10 w-10 grid place-items-center">
          <a href="#">
            <UserIcon />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
