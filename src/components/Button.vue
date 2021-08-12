<template>
    <button
        class="g-button"
        :class="[
            type || 'default',
            {
                'is-plain': plain,
                'is-round': round,
                'is-circle': circle,
                'is-disable': disable
            }
        ]"
        @click="handleClick"
    >
        <i v-if="icon" :class="icon" />
        <span v-if="$slots.default">
            <slot />
        </span>
    </button>
</template>

<script>
export default {
    name: 'GButton',
    props: {
        size: {
            type: String,
            validator: val => ['medium', 'small', 'mini'].includes(val)
        },
        type: {
            type: String,
            validator: val => ['primary', 'success', 'warning', 'danger', 'info', 'text'].includes(val)
        },
        disable: { type: Boolean },
        plain: { type: Boolean },
        round: { type: Boolean },
        circle: { type: Boolean },
        icon: { type: String }
    },
    methods: {
        handleClick(e) {
            !this.disable && this.$emit('click', e)
        }
    }
}
</script>

<style lang="scss">
.g-button {
    display: inline-block;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    appearance: none;
    box-sizing: border-box;
    user-select: none;

    margin: 0;
    padding: 12px 20px;
    font-size: 14px;
    text-align: center;
    line-height: 1;
    font-weight: 500;

    color: #222;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 5px;
    transition: 0.1s;

    i[class*='g-icon-'] + span {
        margin-left: 5px;
    }

    &.default {
        color: #222;
        background: #fff;
        border-color: #dcdfe6;

        &:hover {
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
        }

        &:active {
            color: #3a8ee6;
            border-color: #3a8ee6;
        }

        &.is-disable,
        &.is-disable:hover,
        &.is-disable:active {
            color: #c0c4cc;
            background-color: #fff;
            border-color: #ebeef5;
        }

        &.is-plain {
            &:hover {
                background: #fff;
                border-color: #409eff;
                color: #409eff;
            }

            &:active {
                border-color: #3a8ee6;
                color: #3a8ee6;
            }
        }
    }

    &.primary {
        color: #fff;
        border-color: #409eff;
        background-color: #409eff;

        &:hover {
            color: #fff;
            border-color: #66b1ff;
            background-color: #66b1ff;
        }

        &:active {
            background: #3a8ee6;
            border-color: #3a8ee6;
            color: #fff;
        }

        &.is-disable,
        &.is-disable:hover,
        &.is-disable:active {
            color: #fff;
            background-color: #a0cfff;
            border-color: #a0cfff;
        }

        &.is-plain {
            color: #409eff;
            background: #ecf5ff;
            border-color: #b3d8ff;

            &:hover {
                background: #409eff;
                border-color: #409eff;
                color: #fff;
            }

            &:active {
                background: #3a8ee6;
                border-color: #3a8ee6;
                color: #fff;
            }
        }
    }

    &.success {
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;

        &:hover {
            background: #85ce61;
            border-color: #85ce61;
            color: #fff;
        }

        &:active {
            background: #5daf34;
            border-color: #5daf34;
            color: #fff;
        }

        &.is-disable,
        &.is-disable:hover,
        &.is-disable:active {
            color: #fff;
            background-color: #b3e19d;
            border-color: #b3e19d;
        }

        &.is-plain {
            color: #67c23a;
            background: #f0f9eb;
            border-color: #c2e7b0;

            &:hover {
                background: #67c23a;
                border-color: #67c23a;
                color: #fff;
            }

            &:active {
                background: #5daf34;
                border-color: #5daf34;
                color: #fff;
            }
        }
    }

    &.info {
        color: #fff;
        background-color: #909399;
        border-color: #909399;

        &:hover {
            background: #a6a9ad;
            border-color: #a6a9ad;
            color: #fff;
        }

        &:active {
            background: #82848a;
            border-color: #82848a;
            color: #fff;
        }

        &.is-disable,
        &.is-disable:hover,
        &.is-disable:active {
            color: #fff;
            background-color: #c8c9cc;
            border-color: #c8c9cc;
        }

        &.is-plain {
            color: #909399;
            background: #f4f4f5;
            border-color: #d3d4d6;

            &:hover {
                background: #909399;
                border-color: #909399;
                color: #fff;
            }

            &:active {
                background: #82848a;
                border-color: #82848a;
                color: #fff;
            }
        }
    }

    &.warning {
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;

        &:hover {
            background: #ebb563;
            border-color: #ebb563;
            color: #fff;
        }

        &:active {
            background: #cf9236;
            border-color: #cf9236;
            color: #fff;
        }

        &.is-disable,
        &.is-disable:hover,
        &.is-disable:active {
            color: #fff;
            background-color: #f3d19e;
            border-color: #f3d19e;
        }

        &.is-plain {
            color: #e6a23c;
            background: #fdf6ec;
            border-color: #f5dab1;

            &:hover {
                background: #e6a23c;
                border-color: #e6a23c;
                color: #fff;
            }

            &:active {
                background: #cf9236;
                border-color: #cf9236;
                color: #fff;
            }
        }
    }

    &.danger {
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;

        &:hover {
            background: #f78989;
            border-color: #f78989;
            color: #fff;
        }

        &:active {
            background: #dd6161;
            border-color: #dd6161;
            color: #fff;
        }

        &.is-disable,
        &.is-disable:hover,
        &.is-disable:active {
            color: #fff;
            background-color: #fab6b6;
            border-color: #fab6b6;
        }

        &.is-plain {
            color: #f56c6c;
            background: #fef0f0;
            border-color: #fbc4c4;

            &:hover {
                background: #f56c6c;
                border-color: #f56c6c;
                color: #fff;
            }

            &:active {
                background: #dd6161;
                border-color: #dd6161;
                color: #fff;
            }
        }
    }

    &.text {
        color: #409eff;
        border-color: transparent;
        background-color: transparent;

        &:hover {
            color: #66b1ff;
            border-color: transparent;
            background-color: transparent;
        }

        &:active {
            color: #3a8ee6;
            border-color: transparent;
            background-color: transparent;
        }

        &.is-disable,
        &.is-disable:hover,
        &.is-disable:active {
            color: #c0c4cc;
            background-color: #fff;
            border-color: #ebeef5;
        }
    }

    &.is-disable,
    &.is-disable:hover,
    &.is-disable:active {
        cursor: not-allowed;
        background-image: none;
    }

    &.is-round {
        border-radius: 20px;
        padding: 12px 23px;
    }

    &.is-circle {
        border-radius: 50%;
        padding: 12px;
    }
}
</style>
