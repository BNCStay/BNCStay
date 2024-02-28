<script lang="ts" setup>
import Sheet from "../../UI/Sheet/index.vue";
import StarIcon from '../../UI/Icon/StarIcon.vue'
import ShareIcon from '../../UI/Icon/ShareIcon.vue'
import HeartIcon from '../../UI/Icon/HeartIcon.vue'
import HeartOutlineIcon from '../../UI/Icon/HeartOutlineIcon.vue'
import CloseIcon from '../../UI/Icon/CloseIcon.vue'
import ChevronRightIcon from '../../UI/Icon/ChevronRightIcon.vue'
import ShowAllPhotos from './ShowAllPhotos.vue'
import Button from '../../Reusable/Button/Button.vue'

import { ref } from 'vue';

interface Props {
  src: string
}

defineProps<Props>()

const liked = ref(false)
const showAllPhotos = ref(false)
</script>

<template>
  <div>
    <div class="min-w-12 min-h-12 relative">

      <Sheet
        from="bottom"
        snap-mandatory
        @active:false="showAllPhotos = false"
      >
        <template #activator="{ toggle }">
          <img
            :src="src"
            :alt="''"
            class="h-[18rem] rounded-lg active:opacity-90 transition-all active:translate-y-[2px]"
            @click="toggle"
          />
        </template>

        <template #prepend="{ ratio, active, swipedOut }">
          <UiTransition :config="{ enter: 'fade(0, 1)', leave: `fade(0, ${ratio})`, }">
            <div
              v-if="active"
              style="
            background-color: rgb(0, 0, 0, 0.8);
            inset: 0;
            position: fixed;
            pointer-events: none;
          "
              :style="{ opacity: ratio, visibility: swipedOut ? 'hidden' : undefined }"
            >
            </div>
          </UiTransition>
        </template>

        <template #default="{ transitionEvents, active, close, swipedOut, ratio, rootScrolled }">
          <UiTransition
            v-on="transitionEvents"
            :config="['slideY(100)', 'fade']"
            spring="stiff"
            :duration="500"
          >
            <div
              v-if="active"
              style="background: white; height: 100vh"
              :style="{ opacity: swipedOut ? 0 : 1, borderRadius: rootScrolled ? `${20 - (ratio * 20)}px ${20 - (ratio * 20)}px 0 0` : undefined }"
              :inert="swipedOut"
            >
              <!-- header -->
              <div
                class="h-20 sticky lg:relative top-0 lg:top-auto z-10 bg-white border-b border-black/10 w-full grid lg:grid-flow-col grid-cols-[1fr] items-center px-4 lg:px-10 justify-end lg:justify-between"
              >
                <div class="grid lg:grid-flow-col items-center lg:grid-cols-[auto,auto,auto] justify-start gap-x-6">
                  <p class="font-medium lg:text-2xl opacity-90 w-full text-left">
                    Modern Room in a Flat with City View - Stratford
                  </p>

                  <div class="hidden lg:grid justify-items-center items-center px-4 border-x border-black/10">
                    <div class="font-semibold text-lg opacity-70">
                      4.98
                    </div>

                    <div class="grid grid-flow-col gap-[2px] -mt-1">
                      <StarIcon
                        v-for="i in 5"
                        :key="i"
                      />
                    </div>
                  </div>

                  <div class="cursor-pointer hidden lg:grid justify-items-center pr-6 border-r border-black/10">
                    <div class="font-semibold text-lg opacity-70">
                      44
                    </div>

                    <div class="underline -mt-1 text-sm">
                      Reviews
                    </div>
                  </div>
                </div>

                <div class="grid grid-flow-col items-center justify-end lg:justify-normal">
                  <div class="grid grid-flow-col gap-x-3 lg:me-12">
                    <Button
                      class="grid grid-flow-col gap-2 cursor-default items-center border border-black/10 rounded-sm px-4 h-8 bg-black bg-opacity-[0.03] transition-all active:opacity-70 active:scale-[0.99] text-sm"
                    >
                      <ShareIcon />

                      <span>
                        Share
                      </span>
                    </Button>

                    <Button
                      class="grid grid-flow-col gap-2 cursor-default items-center border-2 border-[#0072eb] rounded-sm px-4 h-8 bg-[#0578f3] text-white transition-all active:opacity-70 active:scale-[0.99] text-sm"
                      @click="liked = !liked"
                    >

                      <UiTransition
                        :config="liked ?
                          { enter: ['scale(0, 1)', 'fade'], leave: ['scale(0.8, 1)', 'fade'] }
                          : { enter: ['scale(0.8, 1)', 'fade'], leave: ['scale(0.7, 1)', 'fade'] }
                          "
                        :spring="liked ? { enter: 'wobbly', leave: 'stiff' } : 'default'"
                        mode="out-in"
                        :duration="liked ? 250 : 300"
                      >
                        <HeartIcon
                          v-if="liked"
                          width="1em"
                          height="1em˝"
                        />

                        <HeartOutlineIcon v-else />
                      </UiTransition>

                      <span>
                        Save
                      </span>
                    </Button>
                  </div>

                  <button
                    class="hidden lg:grid grid-flow-col gap-2 cursor-default items-center border border-black/10 rounded-full w-8 h-8 justify-center bg-black bg-opacity-[0.03] transition-all active:opacity-70 active:scale-[0.99]"
                    @click="close"
                  >
                    <CloseIcon />
                  </button>
                </div>
              </div>
              <!-- header ends -->

              <UiTransition
                :config="{
                  enter: showAllPhotos ?
                    [`slideX(8, 0, 'px')`, 'fade']
                    : [`slideX(-8, 0, 'px')`, 'fade'],
                  leave: false
                }"
                :duration="{
                  enter: 250,
                  leave: 0
                }"
                mode="out-in"
                spring="gentle"
              >
                <ShowAllPhotos
                  v-if="showAllPhotos"
                  @click="showAllPhotos = false"
                />

                <div
                  v-else
                  class="grid justify-center w-full overflow-y-auto h-[calc(100%-5rem)]"
                >
                  <div class="mt-8 lg:mt-14 max-w-[1100px] px-4 lg:px-0">
                    <div class="flex justify-between mb-4 items-end">
                      <h3 class="text-semibold text-2xl text-opacity-70 text-black">
                        Photos
                      </h3>

                      <Button
                        class="underline"
                        @click="showAllPhotos = true"
                      >
                        <span>
                          View all photos
                        </span>

                        <ChevronRightIcon />
                      </Button>
                    </div>

                    <div class="">
                      <ul
                        class="overflow-x-auto grid grid-flow-col gap-3 grid-cols-[repeat(4,calc(50%-24px))] lg:grid-cols-[repeat(4,1fr)] snap-x snap-mandatory scroll-pl-[1.15rem]"
                      >
                        <li
                          v-for="i in 4"
                          :key="i"
                          class="snap-start"
                        >
                          <img
                            :src="`https://picsum.photos/1000/700?random=${i}`"
                            :alt="''"
                            class="lg:h-[14rem] h-32 active:opacity-90 transition-all lg:rounded-r-0 rounded-md"
                            :class="{ 'lg:rounded-l-lg': i === 1, 'lg:rounded-r-lg': i === 4 }"
                            @click="showAllPhotos = true"
                          />
                        </li>
                      </ul>
                    </div>

                    <div class="mt-20 grid lg:grid-flow-col gap-12 justify-between relative lg:grid-cols-[1fr,35%]">
                      <div>
                        <div class="flex justify-between mb-4 items-end">
                          <h3 class="text-semibold text-2xl text-opacity-70 text-black">
                            Overview
                          </h3>
                        </div>

                        <div>
                          <p class="text-black/80 line-clamp-4 mb-4 leading-[2rem]">
                            Best luxury £5m+ penthouse Central London, stunning views of City. 4 floors, 4 terraces,
                            outdoor
                            kitchen, hot tub, Shisha, bar, seating. Property has gym, walkable to Vauxhall/Waterloo
                            stations(10 mins), West End, City, Southbank/Thames. Guests have bedroom with private terrace
                            &
                            private bathroom. Use of apartment, kitchen, lounge, dining, terraces. We can facilitate a
                            second
                            person for £25pn but note bed is standard 4' by 6'3" double. For 3/4 people message and book
                            2nd
                            bedroom
                          </p>

                          <button
                            class="cursor-default underline grid grid-flow-col gap-x-2 transition-all active:opacity-70 active:scale-[0.99] text-md font-medium items-center"
                          >
                            <span>
                              See more
                            </span>

                            <ChevronRightIcon />
                          </button>
                        </div>
                      </div>

                      <!-- booking panel -->
                      <div
                        class="hidden lg:block rounded-md h-[96rem] border-black/10 border shadow-xl shadow-black/5 p-8"
                      >
                        <div>
                          <span class="text-2xl font-medium">
                            $140
                          </span>

                          <span class="text-sm">per night</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </UiTransition>

            </div>
          </UiTransition>
        </template>
      </Sheet>

      <div
        class="rounded-full w-8 h-8 absolute top-2 right-2 grid place-items-center active:opacity-70 transition-all bg-black/5"
        :class="{ 'active:scale-[0.8]': !liked, 'active:scale-[0.9]': liked }"
        @click="liked = !liked"
      >
        <UiTransition
          :config="liked ?
            { enter: ['scale(0, 1)', 'fade'], leave: ['scale(0.8, 1)', 'fade'] }
            : { enter: ['scale(0.8, 1)', 'fade'], leave: ['scale(0.7, 1)', 'fade'] }
            "
          :spring="liked ? { enter: 'wobbly', leave: 'stiff' } : 'default'"
          mode="out-in"
          :duration="liked ? 250 : 300"
        >

          <HeartIcon v-if="liked" />

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000"
              d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5C5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1l.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5"
              opacity=".2"
            />
            <path
              fill="#fff"
              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3m-4.4 15.55l-.1.1l-.1-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05"
            />
          </svg>
        </UiTransition>
      </div>
    </div>

    <div class="pt-2">
      <div>
        <strong>
          Victoria island, Lagos
        </strong>
      </div>

      <div class="opacity-70">
        Individual host
      </div>

      <div class="opacity-70">2-7 Feb</div>

      <div><strong>$1,230</strong> total</div>
    </div>
  </div>
</template>