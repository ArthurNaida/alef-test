<script setup lang="ts">
const { id } = withDefaults(defineProps<{
    id?: string,
    labelMessage?: string,
    value?: string
}>(), {
    id: 'name',
    labelMessage: '',
    value: 'Сохранить'
});
</script>

<template>
    <div class="flex flex-col gap-2">
        <input type="submit" :value="value" :id="id"
            class="cursor-pointer bg-primary text-white text-main rounded-full w-[118px] h-11">
        <label class="text-xs" :for="id">{{ labelMessage }}</label>
    </div>
</template>
