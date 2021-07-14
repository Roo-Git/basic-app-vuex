<template>
  <h1>{{ $store.state.titleApp }}</h1>
  <h2>{{ titleApp }}</h2>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "App",
  setup() {
    const store = useStore();
    console.log(store.state.titleApp);

    return {
      ...store.state,
    };
  },
};
</script>

<style lang="scss" scoped></style>
