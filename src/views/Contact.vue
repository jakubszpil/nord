<template>
  <div>
    <section class="app-section" id="kontakt" :style="'min-height:' + height + 'px'">
      <div class="app-layout section__content">
        <h2 class="app-title">Kontakt</h2>
          <span class="app-bg-title">Kontakt</span>
        <form class="app-form" @submit="show">
          <label>
            <span>Podaj nazwisko</span>
            <input type="text" placeholder="Twoje nazwisko" v-model="msg.author" required>
          </label>
          <label>
            <span>Podaj adres e-mail</span>
            <input type="email" placeholder="Twój e-mail" v-model="msg.email" required>
          </label>
          <label>
            <span>Podaj numer telefonu</span>
            <input type="tel" placeholder="Twój telefon" v-model="msg.phone" required>
          </label>
          <label>
            <span>Wybierz interesującą Cię datę</span>
            <input type="date" placeholder="Wybierz datę" v-model="msg.date" required>
          </label>
          <label>
            <span>Wybierz wycieczkę z naszej oferty</span>
            <select v-model="msg.type" required>
              <option value="null" disabled selected>Wybierz wycieczkę</option>
              <option v-for="(item, key) in offer" :key="key" :value="item">{{item}}</option>
            </select>
          </label>
          <label>
            <span>Wybierz długość wycieczki {{ msg.range }}</span>
            <input type="range" v-model="msg.range" placeholder="Podaj ilośc dni" min="1" max="10" required>
          </label>
          
          <button type="submit" class="app-btn">Wyślij</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import Products from '../data/products.json'

const { products } = Products

export default {
  name: 'Contact',
  data() {
    return {
      offer: products.map(item => {
        return item.name
      }),
      msg: {
        author: null,
        email: null,
        phone: null,
        date: null,
        range: 1,
        type: null
      },
      height: window.innerHeight
    }
  },
  methods: {
    show: function (e) {
      e.preventDefault();
      console.log(this.msg)
    }
  }
}
</script>

<style lang="scss">
  #kontakt {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 90vh;

    .app-form {
      padding: 36px 0;
      label {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-weight: 300;
        span {
          margin: 10px;
        }
      }
      input,
      select {
        width: 100%;
        max-width: 300px;
        margin: 10px 0;
        padding: 10px;
        border: 2px solid #2f3542;
        background: transparent;
        color: #2f3542;
      }
      option {
        color: #2f3542;
      }

    }
  }


</style>