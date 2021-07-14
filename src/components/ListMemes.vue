<template>
  <h1>{{ title }}</h1>
  <div class="row">
    <template v-for="meme in memes" :key="meme.id">
      <Meme :meme="meme" />
    </template>
  </div>
</template>

<script>
/* Utilizamos la función computed para que nuestra variable "memes" sea reactiva, por lo tanto cada vez que recargamos la página la data seguirá renderizandose. */
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import Meme from "./Meme.vue";

export default {
  components: {
    Meme,
  },
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

<style lang="scss">
h1 {
  text-align: center;
}
</style>
