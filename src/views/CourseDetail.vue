<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <TheSiteHeader />
    <div class="relative">
      <div class="w-full bg-black text-left px-12 py-9">
        <ol role="list" class="flex items-center space-x-4">
          <li>
            <div>
              <a href="#" class="text-white hover:text-gray-500">
                <span class="sr-only">Design</span>
              </a>
            </div>
          </li>
          <li v-for="page in pages" :key="page.name">
            <div class="flex items-center">
              <ChevronRightIcon
                class="h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
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

        <label for="name">course name</label>
      </div>
      <div class="w-8/12"></div>
      <div class="absolute w-4/12 right-4 top-8">
        <CourseInfo />
      </div>
    </div>
  </div>
</template>

<script setup>
// @ is an alias to /src
import TheSiteHeader from "../components/TheSiteHeader.vue";
import CourseInfo from "@/components/CourseInfo.vue";

const pages = [
  { name: "Graphic design and illustration", href: "#", current: false },
  { name: "Photo shop", href: "#", current: true },
];
</script>
