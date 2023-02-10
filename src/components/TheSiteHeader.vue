<template>
  <div class="sticky top-0 max-w-full h-22 shadow z-10">
    <div class="flex items-center space-x-3 h-16 justify-around">
      <!-- <img src="/staticx/udemy/images/v7/logo-udemy.svg" class="bg-white" /> -->
      <label class="text-black">Logo</label>
      <label class="text-black">Categories</label>
      <div class="min-w-0 w-1/2">
        <label for="search" class="sr-only">Search</label>
        <div class=" rounded-3xl shadow-sm">
          <div
            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
          >
            <BaseIcon
              name="MagnifyingGlassIcon"
              class="h-5 w-5 text-gray-600"
            />
          </div>
          <input
            type="search"
            name="search"
            id="search"
            class="w-full border border-black pl-10 sm:text-sm rounded-full h-11"
            placeholder="Search for anything"
          />
        </div>
      </div>

      <label class="text-black">Udemy Business</label>
      <label class="text-black">Teach on Udemy</label>
      <label class="text-black">My learning</label>
      <BaseIcon name="HeartIcon" class="h-8 w-8 text-black"></BaseIcon>
      <BaseIcon name="ShoppingCartIcon" class="h-8 w-8 text-black"></BaseIcon>
      <BaseIcon name="BellIcon" class="h-8 w-8 text-black"></BaseIcon>
      <BaseIcon name="UserCircleIcon" class="h-10 w-10 text-black"></BaseIcon>
    </div>
  </div>
</template>
<script setup>
import BaseIcon from "./BaseIcon.vue";
</script>
