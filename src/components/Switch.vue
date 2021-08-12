<template>
    <label class="g-switch" :for="name" :class="{ 'is-checked': value }" @click="toggleSwitch">
        <span class="g-switch__core" :style="{ backgroundColor: value ? activeColor : inActiveColor }">
            <span class="g-switch__button"></span>
        </span>
        <input type="checkbox" :name="name" :checked="value">
    </label>
</template>

<script>
export default {
    name: 'GSwitch',
    props: {
        value: {
            type: Boolean,
            dafaule: false
        },
        activeColor: {
            type: String,
            default: ""
        },
        inActiveColor: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: ""
        }
    },
    methods: {
        toggleSwitch() {
            this.$emit('input', !this.value)
        }
    }
}
</script>

<style lang="scss">
.g-switch {
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;

    &__core {
        margin: 0;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 20px;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background-color: #dcdfe6;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: 0.3s;
    }

    &__button {
        position: absolute;
        left: 2px;
        top: 2px;
        border-radius: 50%;
        transition: 0.3s;
        width: 16px;
        height: 16px;
        background-color: #fff;
    }

    &.is-checked {
        .g-switch__core {
            background-color: #409eff;
            .g-switch__button {
                transform: translateX(20px);
            }
        }
    }

    [type="checkbox"]{
        width:0;
        height:0;
        outline:none;
        margin: 0;
    }
}
</style>
