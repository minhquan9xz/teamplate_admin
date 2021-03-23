<template>
  <div class="c-app">
    <Sidebar />
    <div class="c-wrapper c-fixed-components">
      <Header />
      <div class="c-body">
        <router-view>
          <Main />
          <Product />
        </router-view>
        <Footer />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Main from "@/views/Main";
import Product from "@/views/Product";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Sidebar,
    Main,
    Product,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

