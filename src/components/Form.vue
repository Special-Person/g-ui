<template>
  <div class="g-form">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: "GForm",
    props: {
        model: {
            type: Object,
            required: true,
        },
        labelWidth: {
            type: String,
            default: ""
        }
    },
    provide() {
        return { isForm: this }
    }
}
</script>

<style>

</style>
