<template>
  <div>
    <section class="app-section" :style="'min-height:' + height + 'px'">
      <section class="app-layout">
        <div class="app-detail">
          <img
            :src="'/img/' + product.image + '.jpg'"
            :alt="product.image"
            class="app-detail__img"
          />
          <div class="app-detail-info">
            <h2 class="app-detail-info__name">{{ product.name }}</h2>
            <p class="app-detail-info__line" v-if="product.description">
              {{ product.description }}
            </p>
            <p class="app-detail-info__line">
              Czas trwania: {{ product.duration }} dni
            </p>
            <p class="app-detail-info__line">W cenę wliczono:</p>
            <ul class="app-detail-info-list">
              <li
                v-for="(item, key) in product.includes"
                :key="key"
                class="app-detail-info-list__item"
              >
                --> {{ item }}
              </li>
            </ul>
            <p class="app-detail-info-price">
              <span
                class="app-detail-info-price__discount"
                v-if="product.discount"
              >
                <s>{{ product.discount }} zł</s>
              </span>
              <span class="app-detail-info-price__value"
                >{{ product.price }} zł</span
              >
            </p>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import Products from "../../data/products.json";

const { products } = Products;

export default {
  name: "Offer__Details",
  data() {
    return {
      product: products.find((item) => item.slug === this.$route.params.slug),
      height: window.innerHeight,
    };
  },
};
</script>

<style lang="scss">
.app-detail {
  text-align: left;
  width: 100%;
  height: auto;
  &__img {
    width: 100%;
    max-height: 240px;
    object-position: 100% 75%;
    object-fit: cover;
  }
  &-info {
    &__name {
      font-size: 32px;
      font-weight: 300;
    }
    &__line {
      font-size: 24px;
      font-weight: 300;
    }
    &-list {
      &__item {
        font-size: 24px;
        display: block;
      }
    }

    &-price {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      &__value {
        font-size: 48px;
      }
      &__discount {
        font-size: 18px;
      }
    }
  }
}
</style>