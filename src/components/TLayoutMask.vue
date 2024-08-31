<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

const stubBodyOverflow = () => (document.body.style.overflow = "hidden");
const enableBodyOverflow = () => (document.body.style.overflow = "auto");

onMounted(() => stubBodyOverflow());
onUnmounted(() => enableBodyOverflow());
</script>

<template>
    <div class="fixed w-screen top-0 bottom-0 bg-black bg-opacity-30 -z-10"></div>
</template>