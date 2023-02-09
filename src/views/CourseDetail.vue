<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <TheSiteHeader />
    <div class="relative">
      <h1>main</h1>
      <div class="absolute w-4/12 right-4">
        <CourseInfo />
      </div>
    </div>
  </div>
</template>

<script setup>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import TheSiteHeader from "../components/TheSiteHeader.vue";
import CourseInfo from "@/components/CourseInfo.vue";
</script>
