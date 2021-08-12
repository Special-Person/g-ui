<template>
  <div class="g-form-item">
      <label class="g-form-item__label" :style="{width: getLabelWidth}">{{label}}</label>
      <div class="g-form-item__content">
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    name: "GFormItem",
    props: {
        label: {
            type: [String, Number, Boolean],
            default: ''
        },
        labelWidth: {
            type: String,
            default: ""
        }
    },
    computed:{
        getLabelWidth(){
            if(this.labelWidth){
                return this.labelWidth
            }
            return this.isForm.labelWidth
        }
    },
    inject: {
        isForm: { default: '' }
    }
}
</script>

<style lang="scss">
.g-form-item{
    margin-bottom: 25px;

    &__label{
        vertical-align: middle;
        float: left;
        text-align: right;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding-right: 12px;
        box-sizing: border-box;
        width: 20%;
    }

    &__content{
        line-height: 40px;
        position: relative;
        font-size: 14px;
        overflow: hidden;
    }
}
</style>
