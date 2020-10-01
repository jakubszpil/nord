<template>
  <keep-alive>
    <div>
      <header class="app-header header" :style="'height:' + height + 'px'">
        <div class="app-layout header__content">
          <div class="wrapper">
            <h1 class="wrapper-title">
              <span class="wrapper-title__line wrapper-title__line--quote"
                >Poczuj moc Skandynawii</span
              >
              <span class="wrapper-title__line wrapper-title__line--name">
                {{ this.$store.getters.getTitle }}
              </span>
            </h1>
            <button @click="scrollTo('offer')" class="app-btn wrapper__btn">
              Zobacz więcej
            </button>
          </div>
          <div id="slider" class="header-slider">
            <div class="slide" style="background-image: url(/img/bg.jpg)"></div>
          </div>
        </div>
      </header>
      <section id="offer" class="app-section">
        <div class="app-layout section__content">
          <h2 class="app-title">Najnowsza oferta</h2>
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
          <router-link to="/oferta" class="app-btn">Pełna oferta</router-link>
        </div>
      </section>
      <section class="app-section">
        <div class="app-layout section__content">
          <h2 class="app-title">Skontaktuj się z nami!</h2>
          <span class="app-bg-title">Kontakt</span>
          <router-link to="/kontakt" class="app-btn">Kontakt</router-link>
        </div>
      </section>
    </div>
  </keep-alive>
</template>

<script>
import Products from "../data/products.json";

const { products } = Products;

export default {
  name: "home",
  data() {
    return {
      products: products
        .filter((item) => {
          if (item.id > products.length - 4) return item;
        })
        .reverse(),
      height: window.innerHeight,
    };
  },
  methods: {
    scrollTo: (id) =>
      document.getElementById(id).scrollIntoView({ behavior: "smooth" }),
  },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 100%;
  max-height: 800px;
  position: relative;
  z-index: 5;
  padding-top: 70px;
  padding-bottom: 70px;

  &__content {
    height: 100%;
    position: relative;
  }
  &__content,
  .wrapper,
  .wrapper-title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .timer {
    position: absolute;
    bottom: 0;
    left: 36px;
    width: calc(100% - 72px);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    z-index: 8;
    opacity: 0.5;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #dfe4ea;
    &__time {
      font-weight: 700;
      padding-left: 10px;
    }
  }
  &-slider {
    position: absolute;
    top: 0;
    left: 36px;
    width: calc(100% - 72px);
    height: 100%;
    z-index: 4;
    &::before {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      display: block;
      background: rgba($color: #2f3542, $alpha: 0.5);
      z-index: 5;
    }
    .slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: center center;
      background-size: cover;
    }
  }
  .wrapper {
    z-index: 6;
    text-align: center;
    &-title {
      &__line {
        font-size: 24px;
        color: #dfe4ea;
        font-weight: 200;
        &--name {
          font-size: 48px;
          color: #fff;
        }
      }
    }
    &__btn {
      color: #fff;
      border-color: #fff;
    }
  }
}

#offer {
  background: #f1f2f6;
}
@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
