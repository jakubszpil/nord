<template>
  <keep-alive>
    <div>
      <section class="app-section" :style="'min-height:' + height + 'px'">
        <div class="app-layout">
          <h2 class="app-title">Oferta</h2>
          <span class="app-bg-title">Oferta</span>
          <div class="app-offer">
            <router-link
              v-for="(product, key) in products"
              :key="key"
              :to="'/oferta/' + product.slug"
              class="app-offer-item"
            >
              <img
                :src="'/img/' + product.image + '.jpg'"
                :alt="product.image"
                class="app-offer-item__img"
              />
              <p class="app-offer-item__name">{{ product.name }}</p>
              <p class="app-offer-item-price">
                <span
                  class="app-offer-item-price__discount"
                  v-if="product.discount"
                >
                  <s>{{ product.discount }} zł</s>
                </span>
                <span class="app-offer-item-price__value"
                  >{{ product.price }} zł</span
                >
              </p>
            </router-link>
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
  name: "Offer",
  data() {
    return {
      products: products,
      height: window.innerHeight,
    };
  },
};
</script>

<style>
</style>