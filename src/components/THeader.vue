<script setup lang="ts">
import router from '@/router/index.ts';

const routes = router.getRoutes()
</script>

<template>
    <header class="sticky h-[--header-height] flex items-center shadow-header-bottom">
        <img src="@/assets/logo.svg" alt="Логотип" class="ml-[51px]">
        <nav class="absolute left-1/2 -translate-x-1/2 flex gap-6">
            <template v-for="(route, index) in routes" :key="index">
                <router-link :to="route.path" activeClass="!text-black-main" class="text-gray-main"
                    v-if="route.path !== '/'">
                    {{ route.name }}
                </router-link>
            </template>
        </nav>
    </header>
</template>