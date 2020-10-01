<template>
  <keep-alive>
    <div>
      <section class="app-section" :style="'min-height:' + height + 'px'">
        <div class="app-layout">
          <h2 class="app-title">Galeria</h2>
          <span class="app-bg-title">Galeria</span>
          <div class="gallery">
            <img
              v-for="(image, id) in images"
              :key="id"
              :src="'/img/' + image + '.jpg'"
              :alt="image"
              class="gallery__item"
            />
          </div>
        </div>
      </section>
    </div>
  </keep-alive>
</template>

<script>
import Products from "../data/products.json";
const { products } = Products;

export default {
  name: "Gallery",
  data() {
    return {
      images: products.map((item) => {
        return item.image;
      }),
      height: window.innerHeight,
    };
  },
  created() {
    console.log(this.images);
  },
};
</script>

<style lang="scss">
.gallery {
  padding: 36px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 10px;
  place-items: center;
  &__item {
    width: 100%;
    height: auto;
  }
}
</style>