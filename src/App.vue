<template>
  <div id="app">
     <irrcalculator/>
  </div>
</template>

<script>
import irrcalculator from './components/IRRCalculator';

export default {
  name: 'App',
  components: {
    irrcalculator,
  }
}
</script>

<style lang="scss">
  #app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  body{
    margin: 0;
    padding: 0;
    background-color: #021916;
  }
  .copyright{
    padding: 20px 0;
    font-size: 16px;
    a{
      color: #fff;
      &:hover{
        color: #fff;
      }
    }
  }
</style>
