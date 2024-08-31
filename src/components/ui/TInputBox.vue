<script setup lang="ts">
const { placeholder, type, required } = withDefaults(defineProps<{
    placeholder?: string,
    type?: string,
    required?: boolean,
    id?: string
}>(), {
    type: 'text',
    placeholder: '',
    required: true,
    id: 'name'
})

const model = defineModel();
</script>

<template>
    <div
        class="w-full flex flex-col-reverse pb-1.5 pt-2 px-4 gap-[2px] rounded-[4px] border-gray-l border-[1.5px] h-14">
        <input :type="type" :required="required" :id="id" class="text-main" v-model="model">
        <label :for="id" class="text-gray-main text-placeholder">
            {{ placeholder }}
        </label>
    </div>
</template>