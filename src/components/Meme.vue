<template>
  <div>
    <p>{{ meme.name }}</p>
    <img :src="meme.url" :alt="meme.name" />
  </div>
</template>

<script>
export default {
  props: {
    meme: Object,
  },
};
</script>

<style lang="scss" scoped></style>
