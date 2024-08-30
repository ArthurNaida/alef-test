<script setup lang="ts">
import { useChildrenStore } from '@/stores/children';
import { useUserStore } from '@/stores/user';
import TPill from '@/components/ui/TPill.vue';
import { ageLabel } from '@/hooks';

const { user } = useUserStore();
const { children } = useChildrenStore();
</script>

<template>
  <div class="text-main-large pl-[375px] py-[30px] flex flex-col gap-[60px]">
    <div class="flex flex-col gap-5" v-if="user.name && user.age">
      <h1 class="font-medium">Персональные данные</h1>
      <h2 class="font-bold">{{ user.name }}, {{ user.age }} {{ ageLabel(user.age) }}</h2>
    </div>
    <h1 class="font-medium" v-else>Нет данных о пользователе</h1>
    <div class="flex flex-col gap-5" v-if="children.length">
      <h1 class="font-medium">Дети</h1>
      <ul class="flex flex-col gap-5">
        <li v-for="(child, index) in children" :key="index">
          <TPill>{{ child.name }}, {{ child.age }} {{ ageLabel(child.age) }}</TPill>
        </li>
      </ul>
    </div>
  </div>
</template>
