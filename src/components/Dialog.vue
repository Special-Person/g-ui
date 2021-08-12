<template>
    <transition name="toggleDialog">
        <div class="g-dialog__wrapper" @click.self="close" v-if="visible">
            <div class="g-dialog translateDialog" :style="{ width, top, transform: top && 'translateX(-50%)' }">
                <div class="g-dialog__header">
                    <div class="g-dialog__title">{{ title }}</div>
                    <div class="g-dialog__close" @click="close">
                        <i class="g-icon-close" />
                    </div>
                </div>
                <div class="g-dialog__body">
                    <slot />
                </div>
                <div class="g-dialog__footer" v-if="$slots.footer">
                    <slot name="footer" />
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'GDialog',
    props: {
        title: {
            type: String,
            default: '提示'
        },
        width: {
            type: String,
            default: '50%'
        },
        top: {
            type: String,
            default: '15vh'
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        close() {
            this.$emit('update:visible')
        }
    }
}
</script>

<style lang="scss">
@import url('./transition/Dialog.scss');
.g-dialog__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2001;

    .g-dialog {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        min-width: 300px;
        min-height: 200px;

        &__header {
            padding: 20px 20px 10px;

            .g-dialog_title {
                line-height: 24px;
                font-size: 18px;
                color: #303133;
            }

            .g-dialog__close {
                position: absolute;
                top: 20px;
                right: 20px;
                cursor: pointer;
                -webkit-tap-highlight-color: transparent;
                font-size: 16px;

                i[class*='g-icon-'] {
                    color: #909399;
                    transition: 0.3s;
                }

                &:hover i[class*='g-icon-'] {
                    transform: rotate(90deg);
                    color: #000;
                }
            }
        }

        &__body {
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
        }

        &__footer {
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;

            ::v-deep .g-button {
                margin-right: 20px;
            }
        }
    }
}
</style>
