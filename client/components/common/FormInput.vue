<template>
        <div :class="error ? 'form-group has-error has-feedback' : 'form-group '">
            <label class="control-label" for="test">{{label}}</label></label>
            <input :type="type" :value="value" @input="$emit('input', $event.target.value)" class="form-control" id="test">
            <span class="help-block" v-if="error">{{error}}</span>
        </div>
</template>

<script>
    export default {
        props: ['label', 'error', 'type', 'value']
    }
</script>