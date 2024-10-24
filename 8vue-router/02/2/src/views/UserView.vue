<script setup>
   import { onBeforeMount } from 'vue';
   import { useRoute, useRouter } from 'vue-router';
   const route = useRouter();

   onBeforeMount(()=> {
    const name = route.query.name;
    const age = route.query.age;

    console.log(name);
    console.log(age);
   })
</script>

<!-- <script>
    export default{
        beforeMount() {
            const name = this.$route.query.name;
            const age = this.$route.query.age;
            console.log(this.name);
            console.log(this.age);
            
        }
    }
</script> -->