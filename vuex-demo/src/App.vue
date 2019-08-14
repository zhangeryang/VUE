<template>
  <div id="app">
     <!--<list-one v-bind:products='products'></list-one>
     <list-two v-bind:products='products'></list-two>-->
     <list-one></list-one>
     <list-two></list-two>
  </div>
</template>

<script>
import ListOne from './components/ListOne'
import ListTwo from './components/ListTwo'

export default {
  name: 'app',
//data () {
//  return {
//     products:[
//     	{name:'马云',prices:'2000'},
//     	{name:'马化腾',prices:'200'},
//     	{name:'马冬梅',prices:'20'},
//     	{name:'马蓉',prices:'2'}
//     ]
//  }
//},
  components: {
    ListOne,ListTwo 
  }
}
</script>

<style>
 
</style>
