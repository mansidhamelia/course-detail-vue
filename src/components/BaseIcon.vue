<script setup>
import * as heroIconsOutline from "@heroicons/vue/outline";
import * as heroIconsSolid from "@heroicons/vue/solid";
import { ref, onMounted, computed } from "vue";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  isSolid: {
    type: Boolean,
    default: false,
  },
});

const isLoaded = ref(false);
onMounted(() => {
  isLoaded.value = true;
});
const icon = computed(() =>
  props.isSolid ? heroIconsSolid[props.name] : heroIconsOutline[props.name]
);
</script>

<template>
  <component :is="icon" v-if="isLoaded" />
</template>
