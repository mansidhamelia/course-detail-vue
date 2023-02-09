<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <TheSiteHeader />

    <label>one</label>
    <div class="p-10 bg-white rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">courseTitle</h1>
      <!-- <img class="w-full h-64 object-cover rounded-lg mb-6" src=" courseImage " alt=" courseTitle " /> -->
      <p class="text-gray-700 mb-6">courseDescription</p>
      <div class="mb-6">
        <span class="text-gray-600">Instructor:</span>
        <span class="text-gray-800 font-medium"> instructorName </span>
      </div>
      <div>
        <span class="text-gray-600">Level:</span>
        <span class="text-gray-800 font-medium"> courseLevel </span>
      </div>
    </div>
  </div>
</template>

<script setup>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import TheSiteHeader from "../components/TheSiteHeader.vue";
</script>
