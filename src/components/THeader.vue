<script setup lang="ts">
import router from '@/router/index.ts';
import { onBeforeUnmount, ref } from 'vue';
import TLayoutMask from './TLayoutMask.vue';

const routes = router.getRoutes()

const isSidebarVisible = ref<boolean>(false);
const toggleSidebar = () => (isSidebarVisible.value = !isSidebarVisible.value);
</script>

<template>
    <header class="sticky h-[--header-height] flex items-center shadow-header-bottom">
        <img src="@/assets/logo.svg" alt="Логотип" class="ml-[51px]">
        <nav class="hidden absolute left-1/2 -translate-x-1/2 md:flex gap-6">
            <template v-for="(route, index) in routes" :key="index">
                <router-link :to="route.path" activeClass="!text-black-main" class="text-gray-main"
                    v-if="route.path !== '/'">
                    {{ route.name }}
                </router-link>
            </template>
        </nav>
        <button class="z-20 absolute right-0 h-full w-[var(--header-height)] md:hidden" @click="toggleSidebar">
            <img src="@/assets/burger.svg" alt="Меню" class="mx-auto">
        </button>

        <TLayoutMask class="md:hidden" v-if="isSidebarVisible" @click="toggleSidebar" />
        <Transition name="slide">
            <div class="block md:hidden z-40 fixed top-0 bottom-0 md:left-0 p-2 w-[var(--sidebar-width)] overflow-y-auto text-center bg-gray-900"
                v-if="isSidebarVisible">
                <div class="flex flex-row-reverse">
                    <button class="pointer p-3.5 hide-button" @click="toggleSidebar">
                        <img src="@/assets/close.svg">
                    </button>
                </div>
                <nav class="flex gap-3 flex-col z-30">
                    <template v-for="(route, index) in routes" :key="index">
                        <router-link :to="route.path" @click="toggleSidebar" activeClass="!text-gray-l"
                            class=" text-gray-400" v-if="route.path !== '/'">
                            {{ route.name }}
                        </router-link>
                    </template>
                </nav>
            </div>
        </Transition>
    </header>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: margin-left 0.3s ease;

}

.slide-enter-from,
.slide-leave-to {
    margin-left: -260px;
}
</style>