<template>
    <label :for="name" :class="['g-radio', getValue && 'is-checked']" @click="handleClick">
        <span class="g-radio__input">
            <input type="radio" :name="label" :checked="getValue" class="g-radio__origin" />
            <span class="g-radio__inner"></span>
        </span>
        <span class="g-radio__label">
            <slot>{{ label }}</slot>
        </span>
    </label>
</template>

<script>
export default {
    name: 'GRadio',
    props: {
        name: {
            type: String,
            default: ''
        },
        label: {
            type: [String, Number, Boolean],
            default: ''
        },
        value: null
    },
    methods: {
        handleClick() {
            if (this.getValue) return
            if (this.isGroup) {
                this.isGroup.$emit('input', this.label)
            } else {
                this.$emit('input', this.label)
            }
        }
    },
    computed: {
        getValue() {
            const value = this.isGroup ? this.isGroup.value : this.value
            return value === this.label
        }
    },
    inject: {
        isGroup: { default: '' }
    }
}
</script>

<style lang="scss">
.g-radio {
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

        .g-radio__inner {
            border: 1px solid #dcdfe6;
            border-radius: 50%;
            width: 14px;
            height: 14px;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
            display: inline-block;
            box-sizing: border-box;

            &:after {
                content: '';
                width: 4px;
                height: 4px;
                border-radius: 50%;
                box-sizing: border-box;
                background-color: #fff;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(0);
                transition: 0.15s;
            }
        }

        .g-radio__origin {
            width: 0;
            height: 0;
            outline: none;
            margin: 0;
        }
    }

    &__label {
        font-size: 14px;
        padding-left: 5px;
    }

    &.is-checked {
        .g-radio__inner {
            border-color: #409eff;
            background-color: #409eff;
            &:after {
                transform: translate(-50%, -50%) scale(1);
            }
        }

        .g-radio__label {
            color: #409eff;
        }
    }
}
</style>
