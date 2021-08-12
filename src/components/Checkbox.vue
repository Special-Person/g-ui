<template>
    <label :for="name" :class="['g-checkbox', getValue && 'is-checked']" @click="handleClick">
        <span class="g-checkbox__input">
            <input type="checkbox" :name="label" :checked="getValue" class="g-checkbox__origin" />
            <span class="g-checkbox__inner"></span>
        </span>
        <span class="g-checkbox__label">
            <slot>{{ label }}</slot>
        </span>
    </label>
</template>

<script>
export default {
    name: 'GCheckbox',
    props: {
        name: {
            type: String,
            default: ''
        },
        label: {
            type: [String, Number, Boolean],
            default: ''
        },
        value: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClick() {
            if (this.isGroup) {
                const index = this.isGroup.value.indexOf(this.label)
                let newArr = [...this.isGroup.value, this.label]
                if (index > -1) {
                    newArr = [...this.isGroup.value]
                    newArr.splice(index, 1)
                }
                this.isGroup.$emit('input', newArr)
            } else {
                this.$emit('input', !this.value)
            }
        }
    },
    computed: {
        getValue() {
            return this.isGroup ? this.isGroup.value.includes(this.label) : this.value
        }
    },
    inject: {
        isGroup: { default: '' }
    }
}
</script>

<style lang="scss">
.g-checkbox {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 20px;
    user-select: none;

    &__input {
        white-space: nowrap;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;

        .g-checkbox__inner {
            border: 1px solid #dcdfe6;
            border-radius: 2px;
            width: 14px;
            height: 14px;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
            display: inline-block;
            box-sizing: border-box;
            transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);

            &:after {
                content: '';
                border: 1px solid #fff;
                border-left: 0;
                border-top: 0;
                height: 8px;
                width: 4px;
                box-sizing: border-box;
                position: absolute;
                left: 4px;
                top: 1px;
                transform: rotate(45deg) scale(0);
                transition: transform 0.15s;
                transform-origin: center;
            }
        }

        .g-checkbox__origin {
            width: 0;
            height: 0;
            outline: none;
            margin: 0;
        }
    }

    &__label {
        display: inline-block;
        padding-left: 10px;
        line-height: 19px;
        font-size: 14px;
        transition: 0.25s;
    }

    &.is-checked {
        .g-checkbox__inner {
            border-color: #409eff;
            background-color: #409eff;
            &:after {
                transform: rotate(45deg) scale(1);
            }
        }

        .g-checkbox__label {
            color: #409eff;
        }
    }
}
</style>
