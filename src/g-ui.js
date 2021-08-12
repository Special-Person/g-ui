import Vue from "vue";


let components = [
    require("cmp/Button").default,
    require("cmp/Dialog").default,
    require("cmp/Input").default,
    require("cmp/Switch").default,
    require("cmp/Radio").default,
    require("cmp/RadioGroup").default,
    require("cmp/Checkbox").default,
    require("cmp/CheckboxGroup").default,
    require("cmp/Form").default,
    require("cmp/FormItem").default,
]

components.forEach(it => Vue.component(it.name, it));
