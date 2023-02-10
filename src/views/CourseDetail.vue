<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <TheSiteHeader />
    <div class="relative">
      <div class="w-full bg-black text-left px-12 py-9">
        <ol role="list" class="flex items-center space-x-2">
          <li>
            <div>
              <a href="#" class="text-white">
                <span class="sr-only">Design</span>
              </a>
            </div>
          </li>
          <li v-for="page in pages" :key="page.name">
            <div class="flex items-center">
              <BaseIcon
                name="ChevronRightIcon"
                class="h-5 w-5 text-white flex-shrink-0"
              />
              <a
                :href="page.href"
                class="ml-4 text-sm font-medium text-purple-200 hover:text-gray-700"
                :aria-current="page.current ? 'page' : undefined"
                >{{ page.name }}</a
              >
            </div>
          </li>
        </ol>

        <div class="space-y-4">
          <div class="space-y-4">
            <h1 class="text-white font-bold text-4xl mt-6">
              Adobe Photoshop CC: il corso essenziale
            </h1>
            <p class="text-white">
              Il corso essenziale per elaborare l'immagine digitale dalla A alla
              Z con Adobe Photoshop CC
            </p>
          </div>

          <div class="flex gap-2">
            <button class="bg-yellow-300 text-black p-1">Bestseller</button>
            <label for="rating" class="text-yellow-500"> 4.6</label>
            <label for="" class="text-white">(44 ratings)</label>
            <label for="" class="text-white"> 1700 students</label>
          </div>
          <div class="">
            <label for="" class="text-white">created by </label>
          </div>

          <div class="flex gap-3">
            <div class="flex items-center">
              <BaseIcon
                name="InformationCircleIcon"
                class="h-4 w-4 text-white"
              />

              <label for="" class="text-white ml-1">
                Last updated 1/2022
              </label>
            </div>
            <div class="flex items-center">
              <BaseIcon name="GlobeAltIcon" class="h-4 w-4 text-white" />
              <label for="" class="text-white ml-1"> Italian </label>
            </div>
            <div class="flex items-center">
              <BaseIcon name="NewspaperIcon" class="h-4 w-4 text-white" />
              <label for="" class="text-white ml-1"> Italian [Auto] </label>
            </div>
          </div>
        </div>
      </div>
      <div class="w-8/12"></div>
      <div class="absolute w-3/12 right-8 top-8 mr-16">
        <CourseInfo />
      </div>
    </div>
  </div>
</template>

<script setup>
// @ is an alias to /src
import TheSiteHeader from "../components/TheSiteHeader.vue";
import CourseInfo from "@/components/CourseInfo.vue";
import BaseIcon from "@/components/BaseIcon.vue";
const pages = [
  // { name: "Design", href: "#", current: false },
  { name: "Graphic design and illustration", href: "#", current: false },
  { name: "Photo shop", href: "#", current: true },
];
</script>
