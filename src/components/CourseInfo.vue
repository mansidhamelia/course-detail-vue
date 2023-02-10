<template>
  <div class="sticky z-20">
    <aside
      class="hidden w-50 overflow-y-auto border-l border-gray-200 bg-white p-8 lg:block shadow-lg"
    >
      <div class="space-y-3 pb-16">
        <div>
          <div
            class="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg h-52"
          >
            <img :src="currentFile.source" alt="" class="object-cover" />
          </div>
          <div class="mt-4 flex items-start">
            <h2 class="text-2xl font-bold text-black">
              <span class="sr-only">Details for </span>$69
            </h2>
          </div>
        </div>
        <div class="flex">
          <button
            type="button"
            class="ml-3 flex-1 border border-black bg-purple-600 pt-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            ADD TO CART 11
          </button>
          <button
            type="button"
            class="ml-3 flex border border-black h-10 w-10 items-center justify-center bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <BaseIcon name="HeartIcon" class="h-6 w-6 text-black"></BaseIcon>
            <span class="sr-only">Favorite</span>
          </button>
        </div>
        <div class="flex">
          <button
            type="button"
            class="ml-3 flex-1 border border-black bg-white py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            BUY NOW
          </button>
        </div>
        <h3 class="text-sm text-gray-500">30-Day Money-Back Guarantee</h3>
        <div>
          <h3 class="text-base font-bold text-black text-left">
            This Course includes:
          </h3>
          <dl class="mt-2 border-gray-200">
            <div
              v-for="key in Object.keys(currentFile.information)"
              :key="key"
              class="flex py-1 text-sm font-medium"
            >
              <!-- <dt class="text-gray-500">{{ key }}</dt> -->
              <BaseIcon name="PlayIcon" class="h-5 w-5" />
              <dd class="whitespace-nowrap text-gray-900 ml-4">
                {{ currentFile.information[key] }}
              </dd>
            </div>
          </dl>

          <div class=""></div>
        </div>
        <div
          class="mt-2 divide-y divide-gray-200 border-t border-gray-200"
        ></div>
        <div>
          <h3 class="font-bold text-gray-900 text-left">
            Training 5 or more people?
          </h3>
          <!-- <div class="mt-2 flex items-start justify-between"> -->
          <p class="mt-2 text-sm italic text-gray-500 text-left">
            Get your team access to 19,000+ top Udemy courses anytime, anywhere.
          </p>
          <!-- </div> -->
        </div>

        <div class="flex">
          <button
            type="button"
            class="ml-3 flex-1 border border-black bg-white py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Try Udemy business
          </button>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import BaseIcon from "./BaseIcon.vue";

const currentFile = {
  name: "IMG_4985.HEIC",
  size: "3.9 MB",
  source:
    "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  information: {
    HeartIcon: "19 hours on-demand video",
    Created: "Full lifetime access",
    "Last modified": "Access on mobile and TV",
    Dimensions: "Certificate of completion",
  },
};
</script>
