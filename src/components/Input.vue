<template>
    <div class="g-input">
        <input
            :name="name"
            :disabled="disable"
            :type="showPassword ? (isShowPassword ? 'text' : 'password') : type"
            :placeholder="placeholder"
            :value="value"
            @input="changeValue($event)"
            :class="['g-input__inner', disable && 'is-disable']"
        />
        <span>
            <i class="g-icon-close" @click="clearValue" v-if="value && clearable" />
            <i
                :class="['g-icon-view', isShowPassword && 'g-icon-view-active']"
                @click="isShowPassword = !isShowPassword"
                v-if="showPassword"
            />
        </span>
    </div>
</template>

<script>
export default {
    name: 'GInput',
    props: {
        placeholder: {
            type: String,
            default: '请输入内容...'
        },
        type: {
            type: String,
            default: 'text'
        },
        name: String,
        disable: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ''
        },
        clearable: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isShowPassword: false
        }
    },
    methods: {
        changeValue(e) {
            this.$emit('input', e.target.value)
        },
        clearValue() {
            this.$emit('input', '')
        }
    }
}
</script>

<style lang="scss">
.g-input {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;

    &__inner {
        display: inline-block;
        appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 5px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        width: 100%;
        transition: border-color 0.2s;

        &:focus {
            border-color: #409eff;
        }

        &.is-disable {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }

    span {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;


        i[class*='g-icon-'] {
            padding: 13px;
            transition: 0.3s;
        }

        &:hover i[class*='g-icon-'] {
            color: #409eff;
        }

        &:hover .g-icon-close {
            transform: rotate(90deg);
        }

        .g-icon-view-active{
            color: #409eff;
        }
    }
}
</style>
