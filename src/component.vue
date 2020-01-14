<template lang="html">
    <input type="tel"
           v-model="formattedValue"
           v-money="{precision, decimal, thousands, prefix, suffix, allowBlank}"
           class="v-money"/>
</template>

<script>
    import money from './directive'
    import defaults from './options'
    import {onlyNumbers, unformat} from './utils'

    export default {
        name: 'Money',
        props: {
            value: {
                required: false,
                default: null
            },
            precision: {
                type: Number,
                default: () => defaults.precision
            },
            decimal: {
                type: String,
                default: () => defaults.decimal
            },
            thousands: {
                type: String,
                default: () => defaults.thousands
            },
            prefix: {
                type: String,
                default: () => defaults.prefix
            },
            suffix: {
                type: String,
                default: () => defaults.suffix
            },
            allowBlank: {
                type: Boolean,
                default: () => defaults.allowBlank
            }
        },
        directives: {money},
        data() {
            return {
                formattedValue: this.$props.value,
            }
        },
        watch: {
            formattedValue(newValue, oldValue) {
                if (oldValue !== newValue) {
                    this.$emit('input', onlyNumbers(newValue))
                }
            }
        },
    }
</script>
