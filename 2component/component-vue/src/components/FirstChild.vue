<script>

import { message, reversedMessage } from '@/key.js';

export default {
    
    // inject:['message', 'reversedMessage'],
    inject: {
        customMessage : {
            from: message,
            default : 'default hello'
        },

        customReversedMessage : {
            from: reversedMessage,
            default: 'default hello'
        }
    }
}
</script>

<template>

    <p>{{ customMessage }}</p>
    <p>{{ customReversedMessage }}</p>
</template>

<style scoped>
h1{
    color: blue;
}
p{
    color: rgb(24, 46, 2);
}
</style>