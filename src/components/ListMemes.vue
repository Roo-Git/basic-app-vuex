<template>
  <h1>{{ title }}</h1>
  <p>
    {{ memes }}
  </p>
</template>

<script>
/* Utilizamos la función computed para que nuestra variable "memes" sea reactiva, por lo tanto cada vez que recargamos la página la data seguirá renderizandose. */
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const memes = computed(() => store.state.memes);

    onMounted(() => {
      store.dispatch("getMemes");
    });

    return {
      title: store.state.titleApp,
      memes,
    };
  },
};
</script>

<style lang="scss" scoped></style>
