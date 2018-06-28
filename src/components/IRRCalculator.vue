<template>
  <div>
    <div class="irrCalculator">
      <div class="irrCalculator-container">
        <div class="irrCalculator-header">
          <h4>IRR 年化報酬率</h4>
        </div>
        <div class="irrCalculator-main">
          <div class="irrCalculator-section">
            <p class="irrCalculator-section__value irrCalculator-section__value--large">
              {{irrDisplay}}<span>%</span>
            </p>
          </div>
          <div class="irrCalculator-item">
            <div>繳<span class="irrCalculator-section__value">{{duration}}</span> 年</div>
            <input v-model.number="duration" type="range" min="1" max="10" placeholder="年期">
          </div>
          <div class="irrCalculator-item">
            <label for="">每年年繳</label>
            <input class="irrCalculator-inputbox irrCalculator-section__value"
              v-model.number="parmary" type="number" placeholder="年繳保費"> $
          </div>
          <br>
          <div class="irrCalculator-item">
            <div>第<span class="irrCalculator-section__value">{{terminationYear}}</span>年領回</div>
            <input v-model.number="terminationYear"
              type="range" min="1" max="10" placeholder="領回時間">
          </div>
          <div class="irrCalculator-item">
            <label for="">期滿領回</label>
            <input class="irrCalculator-inputbox irrCalculator-section__value"
              v-model.number="surrender" type="number" placeholder="總額含紅利"> $
          </div>
          <div class="copyright">
            <p>覺得有幫助？分享更多人</p>
            copyright 2018 <a href="mailto:museseeu@gmail.com">musecloak</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { IRRVal } from '../lib/irr';

export default {
  name: 'IRRCalculator',
  data() {
    return {
      irr: 0,
      duration: 3,
      parmary: 334862,
      terminationYear: 5,
      surrender: 1054806,
      defaultValue: 10000,
    };
  },
  watch: {
    duration() {
    },
    parmary() {
    },
    terminationYear() {
    },
    surrender() {
    },
  },
  computed: {
    irrDisplay() {
      return IRRVal(this.duration, this.parmary, this.terminationYear, this.surrender);
    },
  },
  filters: {
    dollarStyle(val) {
      return String('$') + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
};
</script>

<style lang="scss">

  .irrCalculator{
    margin: 0 auto;
    max-width: 360px;
    height: auto;
    font-size: 22px;
    color: #fff;
    background: radial-gradient(circle farthest-corner at right bottom, #021916 0, #091d0e 100%);
    &-container{
      padding: 20px 10px;
    }
    &-main{
      text-align: center;
      margin: 0 auto;
    }
    &-item{
      padding: 0 15px 5px;
      margin-bottom: 30px;
      text-align: left;

      &--baseline{
        border-bottom: 1px solid #2F7472;
      }
    }
    &-inputbox{
      text-align: center;
      width: 160px;
      color: #fff;
      font-size: 22px;
      border: 0;
      background-image: linear-gradient(#009688,#009688),linear-gradient(#d2d2d2,#d2d2d2);
      background-size: 0 2px,100% 1px;
      background-repeat: no-repeat;
      background-position: bottom,50% calc(100% - 1px);
      background-color: transparent;
      transition: background 0s ease-out;
      float: none;
      box-shadow: none;
      border-radius: 0;
      outline : none;
    }
    &-section{

      &__value{
          padding: 0;
          font-family: HelveticaNeue-Bold;
          font-size: 24px;
          color: #C4E61B;
          margin: 0 10px;
          letter-spacing: 0;
          &--large{
            margin: 30px 0;
            font-size: 90px;
          }
      }
      span{
        margin: 0 10px;
        font-family: HelveticaNeue-Bold;
        font-size: 48px;
        color: #FFFFFF;
        letter-spacing: 0;
      }
    }
  }

  input[type="range"]{
    margin: 15px 30px 0;
    -webkit-appearance: none;
    border-radius:3px;
    width:226px;
    height:3px;
    outline : none;
    background: #fff;
  }
  input[type="range"]::-webkit-slider-thumb{
    -webkit-appearance: none;
    position: relative;
    width:18px;
    height:18px;
    background:#C4E61B;
    border-radius:50%;
    transition:.2s;
  }
  input[type="range"]::-webkit-slider-thumb:before,
  input[type="range"]::-webkit-slider-thumb:after
  {
    position: absolute;
    top: 3px;
    width: 2000px;
    height: 4px;
    content:"";
    pointer-events: none;
    transition:.2s;
  }
  input[type="range"]::-webkit-slider-thumb:before{
    left: -1997px;
    background: #C4E61B;
  }
  input[type="range"]::-webkit-slider-thumb:after {
    left: 10px;
    background: #edc;
  }
  input[type="range"]:active::-webkit-slider-thumb:before,
  input[type="range"]:active::-webkit-slider-thumb:after
  {
    top: 6px;
  }
  input[type="range"]:active::-webkit-slider-thumb{
    width:24px;
    height:24px;
  }
  input[type="range"]:active::-webkit-slider-thumb:after {
    left: 24px;
  }
</style>
