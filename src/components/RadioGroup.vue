<template>
    <div class="g-radioGroup">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'GRadioGroup',
    props: {
        value: null
    },
    provide() {
        return { isGroup: this }
    }
}
</script>

<style lang="scss"></style>
