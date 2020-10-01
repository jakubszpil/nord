<template>
  <div id="app" class="app">
    <Navbar />
    <router-view class="app-view"/>
    <Bottombar />
  </div>
</template>

<script>
import {
  Navbar, Bottombar
} from './components'

export default {
  name: 'App',
  components: {
    Navbar,Bottombar
  },
  watch: {
    $route: (to, from) => {
      document.getElementById('app').scrollIntoView()
    }
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400&display=swap&subset=latin-ext');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Poppins', sans-serif;
    position: relative;
    font-weight: 200;
    text-align: center;
    font-size: 18px;
  }
  input,
  select,
  option,
  label,
  input::placeholder {
      font-family: 'Poppins', sans-serif;
    }

  .app-header {
    padding: 70px 0;
  }
  .app-section {
    padding: 106px 0;
    z-index: 2;
  }

  .app-layout {
    width: 100%;
    height: auto;
    position: relative;
    margin: 0 auto;
    padding: 0 36px;
    max-width: 1400px;
  }

  .app-btn {
    color: #2F3542;
    background: transparent;
    display: block;
    max-width: 200px;
    padding: 10px 36px;
    margin: 10px auto;
    border: 2px solid #2F3542;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 14px;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a,p,h1,h2,h3,h4,h5,h6 {
    font-weight: 300;
  }
  .section__content {
    min-height: 200px;
  }
  .app-offer {
    margin: 36px 0;
    width: 100%;
    height: auto;
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 36px;
    justify-items: center;
    &-item {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      max-width: 400px;
      padding: 10px;
      background: #ffffff;
      box-shadow: 0 5px 8px rgba(0,0,0,.15);
      &__img {
        width: 100%;
        height: auto;
      }
      &__name {
        font-weight: 300;
        margin: 5% 0;
      }
      &-price {
        position: relative;
        font-weight: 300;
        &__discount,&__value {
          margin: 0 5px;
        }
        &__value {
          font-size: 24px;
        }
        &__discount {
          font-size: 14px;
          color: #3742fa;
        }
      }
    }
  }

  .app-bg-title {
    font-size: 80px;
    position: absolute;
    top: 0;
    left:50%;
    z-index: 0;
    font-weight: bold;
    opacity: .075;
    text-align: center;
    color: rgba(0, 0, 0, 0.65);
    transform: translate(-50%, -50%);
  }
</style>