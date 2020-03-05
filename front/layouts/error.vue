<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">{{ pageNotFound }}</h1>
    <h1 v-else>{{ otherError }}</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  setup(props, context) {
    const pageNotFound: string = "404 Not Found";
    const otherError: string = "An error occurred";
    const title = props.error.statusCode === 404 ? pageNotFound : otherError;

    return { title, pageNotFound, otherError };
  }
});
</script>


<style lang="scss" scoped>
h1 {
  font-size: 20px;
}
</style>
