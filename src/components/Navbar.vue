<template>
  <nav class="app-nav nav" :class="[ (isOpened && isMobile) ? 'nav--opened' : null, isMobile ? 'nav--mobile' : 'nav--desktop', (!isOpened && scrolled && isMobile) ? 'nav--scrolled' : null, (addShadow && !scrolled) ? 'nav--shadow-toggled' : null]" ref="nav">
    <div class="app-layout nav__content">
      <router-link to="/" class="nav__logo logo" @click.native="close">
        <img src="../assets/logo.svg" alt="logo" class="logo__img">
        <h1 class="logo__name">{{ this.$store.getters.getTitle }}</h1>
      </router-link>
      <div class="menu">
        <router-link v-for="({ name, path }, key) in routes" :key="key" :to="path" @click.native="close" class="menu__item">{{ name }}</router-link>
      </div>
      <button class="nav-btn" @click="toggle" v-if="isMobile">
        <div class="nav-btn__inner">
          <div class="nav-btn__bar"></div>
        </div>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      mobilityChecked: false,
      lastScrollTop: 0,
      scrolled: false,
      addShadow: false
    }
  },
  methods: {
    open: function () {
      this.$store.dispatch('openNavigation')
    },
    toggle: function () {
      this.$store.dispatch('toggleNavigation')
    },
    close: function () {
      this.$store.dispatch('closeNavigation')
    },
    checkMobility: function () {
      this.$store.dispatch('checkMobility')
    },
    transformOnScroll: function() {
      var st = window.pageYOffset || document.documentElement.scrollTop
      if (st > this.lastScrollTop) {this.scrolled = true, this.addShadow = true}
      else this.scrolled = false
      if(st < 70) this.addShadow = false
      this.lastScrollTop = st <= 0 ? 0 : st
    },
  },
  computed: {
    routes: function () {
      const routes = []
      this.$router.options.routes.map(route => {
        if (route.name) routes.push({
          name: route.name,
          path: route.path
        })
      })
      return routes
    },
    isOpened: function () {
      return this.$store.getters.isNavOpened
    },
    isMobile: function () {
      return this.$store.getters.getIsMobile
    }
  },
  mounted() {
    this.lastScrollTop = window.pageYOffset || document.documentElement.scrollTop
    if(this.isMobile) window.addEventListener('scroll', this.transformOnScroll)
    
  },
  created() {
    this.checkMobility()
    window.addEventListener('resize', this.checkMobility)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobility)
    window.removeEventListener('scroll', this.transformOnScroll)
  }
}
</script>

<style lang="scss">
$time: .15s;
  .nav {
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    padding: 10px 0;
    background: #ffffff;
    transition: transform $time * 3;
    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &::before {
      position: absolute;
      display: block;
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: #ffffff;
      z-index: -1;
      opacity: 0;
      transition: opacity $time;
      box-shadow: 0 5px 8px rgba(0,0,0,.15);
    }
    .logo {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      position: relative;
      text-decoration: none;
      color: #2f3542;
      &__name {
        line-height: 50px;
      }
      &__img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
    }

    .menu {
      display: flex;
      position: relative;
      &__item {
        color: #2f3542;
      }
    }
    .nav-btn {
      z-index: 999;
      width: 50px;
      height: 50px;
      &,
      &__inner {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }
      background: transparent;
      border: 0;

      &__bar {
        & {
          transition:transform $time 0s;
        }
        &,
        &::before,
        &::after {
          width: 30px;
          height: 2px;
          display: block;
          border-radius: 2px;
          background-color: #2f3542;
          position: relative;
        }
        &::before,
        &::after {
          content: '';
          position: absolute;
          right: 0;
        }
        &::before {
          top: -10px;
          transition: top $time $time;
        }
        &::after {
          top: 10px;
          transition:transform $time 0s, top $time $time;
        }
      }
    }
    &--mobile {
      .menu {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: #ffffff;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transform: translateX(100%);
        font-size: 24px;
        opacity: 0;
        transition: transform $time * 2,opacity 0s $time * 2;
        &__item {
          transform: translateY(100%);
          opacity: 0;
        }
      }
      
    }
    &--opened {
      .menu {
        transform: translateX(0);
        transition: transform $time * 2,opacity $time * 2;
        opacity: 1;
        &__item {
          transform: translateY(0);
          opacity: 1;
          transition: transform $time * 4 $time * 2, opacity $time * 4 $time * 2;
        }
      }
      .nav-btn {
        &__bar {
          & {
            transform: rotate(-45deg);
            transition: transform $time $time;
          }
          &::before {
            top: 0;
            transition:top $time 0s;
          }
          &::after {
            top: 0;
            transform: rotate(90deg);
            transition:top $time 0s, transform $time $time;
          }
        }
      }
    }

    &--desktop {
      .menu {
        justify-content: center;
        align-items: center;
        &__item {
          font-size: 16px;
          padding: 0 10px;
        }
      }
    }

    &--scrolled {
      transform: translateY(-100%);
    }

    &--shadow-toggled {
      &::before {
        opacity: 1;
      }
    }
  }
</style>