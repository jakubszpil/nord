<template>
  <div>
    <section class="app-section" :style="'min-height:' + height + 'px'">
      <div class="app-layout">
        <h2 class="app-title">Promocje</h2>
        <span class="app-bg-title">Promocje</span>
        <div>
          <h3 class="app-title">Najgorętsza promocja</h3>
          <div class="app-offer">
            <router-link
              :to="'/oferta/' + selected.slug"
              class="app-offer-item"
            >
              <img
                :src="'/img/' + selected.image + '.jpg'"
                :alt="selected.image"
                class="app-offer-item__img"
              />
              <p class="app-offer-item__name">{{ selected.name }}</p>
              <p class="app-offer-item-price">
                <span
                  class="app-offer-item-price__discount"
                  v-if="selected.discount"
                >
                  <s>{{ selected.discount }} zł</s>
                </span>
                <span class="app-offer-item-price__value"
                  >{{ selected.price }} zł</span
                >
              </p>
            </router-link>
          </div>
        </div>
        <div>
          <h3 class="app-title">Pozostałe promocje</h3>
          <div class="app-offer">
            <router-link
              v-for="(product, key) in filtered"
              :key="key"
              :to="'/oferta/' + product.slug"
              class="app-offer-item"
            >
              <img
                :src="'/img/' + product.image + '.jpg'"
                :alt="product.image"
                width="200"
                class="app-offer-item__img"
              />
              <p class="app-offer-item__name">{{ product.name }}</p>
              <p class="app-offer-item-price">
                <span
                  v-if="product.discount"
                  class="app-offer-item-price__discount"
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
      </div>
    </section>
  </div>
</template>

<script>
import Products from "../data/products.json";

const { products } = Products;

export default {
  name: "Discounts",
  data() {
    return {
      discounts: products.filter((item) => {
        if (item.discount) return item;
      }),
      selected: 0,
      filtered: [],
      height: window.innerHeight,
    };
  },
  methods: {
    selectItem: function () {
      const index = Math.floor(Math.random() * this.discounts.length);
      this.filtered = this.discounts.filter((item, key) => {
        if (key != index) return item;
      });
      this.selected = this.discounts[index];
    },
  },
  mounted() {
    this.selectItem();
  },
};
</script>

<style>
</style>