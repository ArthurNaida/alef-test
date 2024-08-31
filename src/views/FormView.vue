<script setup lang="ts">
import TInputBox from '@/components/ui/TInputBox.vue';
import TSubmit from '@/components/ui/TSubmit.vue';
import TButtonAdd from '@/components/ui/TButtonAdd.vue';
import { useChildrenStore } from '@/stores/children';
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';
import { Person } from '@/types/person';

const userStore = useUserStore();
const childrenStore = useChildrenStore();

const user = ref<Person>(new Person);
const children = ref<Person[]>([]);

const isEmptyField = (person: Person) => {
  return !person.age || !person.name
}

const addChildTemplate = () => {
  children.value.push(new Person);
}
const removeChildTemplate = (index: number) => {
  children.value.splice(index, 1);
}
const updateChildren = () => {
  childrenStore.clear();
  children.value.forEach((newChild) => {
    if (!isEmptyField(newChild)) {
      childrenStore.add(newChild);
    }
  });
}

const submitForm = () => {
  if (!isEmptyField(user.value)) {
    updateChildren();
    userStore.updateData(user.value);
  }
}
</script>

<template>
  <main class="my-[30px]">
    <form action="#" class="w-[300px] sm:w-[440px] md:w-[616px] mx-auto flex flex-col">
      <div class="flex flex-col gap-5">
        <h1 class="text-base font-medium">Персональные данные</h1>
        <ul class="flex flex-col gap-2.5">
          <li>
            <TInputBox v-model="user.name" :placeholder="'Имя'" />
          </li>
          <li>
            <TInputBox v-model="user.age" :type="'number'" :placeholder="'Возраст'" />
          </li>
        </ul>
      </div>
      <div class="mt-11 flex flex-col gap-5">
        <div class="flex flex-col md:flex-row gap-5 justify-between md:items-center">
          <h2 class="text-base font-medium">Дети (макс. 5)</h2>
          <TButtonAdd v-if="children.length < 5" @click.prevent="addChildTemplate">
            Добавить ребенка
          </TButtonAdd>
        </div>
        <ul class="flex flex-col md:gap-2.5 gap-10">
          <li v-for="(child, index) in children" :key="index">
            <div class="flex flex-col md:flex-row gap-[18px]">
              <TInputBox v-model="child.name" :placeholder="'Имя'" />
              <TInputBox v-model="child.age" :placeholder="'Возраст'" />
              <div class="md:my-auto">
                <button class="text-primary text-main h-6" @click.prevent="removeChildTemplate(index)">
                  Удалить
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <TSubmit class="mt-[30px]" @click.prevent="submitForm" />
    </form>
  </main>
</template>
