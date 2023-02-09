<template>
  <div class="sticky top-0 max-w-full h-22 shadow z-20">
    <div class="flex items-center space-x-3 h-16 justify-around">
      <!-- <BaseIcon name="MenuIcon" class="mx-5 text-white h-5 w-5"></BaseIcon> -->
      <img src="/staticx/udemy/images/v7/logo-udemy.svg" class="bg-white" />

      <label>Categories</label>
      <div class="min-w-0 w-1/2">
        <label for="search" class="sr-only">Search</label>
        <div class="relative rounded-3xl shadow-sm">
          <div
            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
          >
            <!-- <MagnifyingGlassIcon
              class="h-5 w-5 text-gray-400"
              aria-hidden="true"
            /> -->
            <BaseIcon
              name="MagnifyingGlassIcon"
              class="h-5 w-5 text-gray-600"
            />
          </div>
          <input
            type="search"
            name="search"
            id="search"
            class="block w-full border border-black pl-10 focus:border-pink-500 focus:ring-pink-500 sm:text-sm rounded-full h-11"
            placeholder="Search for anything"
          />
        </div>
      </div>

      <label>Udemy Business</label>
      <label>Teach on Udemy</label>
      <label>My learning</label>
      <BaseIcon name="HeartIcon" class="h-8 w-8 border-black"></BaseIcon>
      <BaseIcon name="HeartIcon" class="h-8 w-8"></BaseIcon>
      <BaseIcon name="HeartIcon" class="h-8 w-8"></BaseIcon>
      <BaseIcon name="UserCircleIcon" class="h-10 w-10"></BaseIcon>
    </div>

    <!-- <BaseTabGroup :selected-index="selectedIndex" @change="changeTabStatus">
        <BaseTab :title="tabs[0].name"> </BaseTab>
        <BaseTab :title="tabs[1].name"></BaseTab>
        <BaseTab :title="tabs[2].name"></BaseTab>
      </BaseTabGroup> -->
  </div>
</template>
<script setup>
import BaseIcon from "./BaseIcon.vue";
</script>
