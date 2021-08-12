<template>
    <div class="g-checkboxGroup">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'GCheckboxGroup',
    props: {
        value: {
            type: Array,
            default: []
        }
    },
    provide() {
        return { isGroup: this }
    }
}
</script>

<style lang="scss"></style>
