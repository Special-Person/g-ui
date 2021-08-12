<template>
    <div id="app">
        <!-- <div>
            <g-button @click="visible = !visible">切换 显示/隐藏 蒙层</g-button>
            <g-dialog :visible.sync="visible">
                <span>这是一段信息</span>
                <template slot="footer">
                    <g-button type="text" @click="cancel">取消</g-button>
                    <g-button type="primary" @click="confirm">确定</g-button>
                </template>
            </g-dialog>
        </div>

        <div>
            <g-input v-model="username" @input="changeInput" type="text" clearable></g-input>
            <g-input v-model="password" @input="changeInput" type="password" show-password></g-input>
        </div>

        <g-switch v-model="activeSwitch" @input="changeSwitch" name="check"></g-switch>

        <g-radio-group v-model="gender" @input="handleRadio">
            <g-radio label="1">男</g-radio>
            <g-radio label="0">女</g-radio>
        </g-radio-group>

        <g-checkbox v-model="activeCheckbox" @input="handleCheckbox">是否选中</g-checkbox>

        <g-checkbox-group v-model="hobby" @input="handleCheckboxGroup">
            <g-checkbox label="抽烟"></g-checkbox>
            <g-checkbox label="喝酒"></g-checkbox>
            <g-checkbox label="烫头"></g-checkbox>
        </g-checkbox-group> -->

        <g-form :model="model">
            <g-form-item label="用户名">
                <g-input type="text" clearable placeholder="请输入用户名..." v-model="model.username" />
            </g-form-item>
            <g-form-item label="密码">
                <g-input type="password" show-password placeholder="请输入密码..." v-model="model.password" />
            </g-form-item>
            <g-form-item>
                <g-checkbox label="自动登录" v-model="model.autoLogin"></g-checkbox>
                <g-checkbox label="记住密码" v-model="model.savePwd"></g-checkbox>
            </g-form-item>
            <g-form-item>
                <g-button>重置</g-button>
                <g-button type="primary">登录</g-button>
            </g-form-item>
        </g-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // visible: false,
            // username: '',
            // password: '',
            // activeSwitch: false,
            // gender: '1',
            // gender1: '1',
            // activeCheckbox: false,
            // hobby: ['抽烟', "喝酒", "烫头"]
            model: {
                autoLogin: false,
                savePwd: false,
                username:'',
                password: ''
            }
        }
    },
    methods: {
        // cancel() {
        //     this.visible = false
        //     console.log('点击了取消')
        // },
        // confirm() {
        //     this.visible = false
        //     console.log('点击了确定')
        // },
        // changeInput(val) {
        //     console.log(val)
        // },
        // changeSwitch(bool) {
        //     console.log(bool)
        // },
        // handleRadio(val) {
        //     console.log(val)
        // },
        // handleCheckbox(val) {
        //     console.log(val)
        // },
        // handleCheckboxGroup(val) {
        //     console.log(val)
        // }
    }
}
</script>

<style lang="scss">
#app {
    .g-button {
        margin-right: 10px;
    }
}
</style>
