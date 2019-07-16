<template>
  <div id="app">
  	<!--<add-blog></add-blog>-->
  	<!--<show-blogs></show-blogs>-->
  	<head-blog></head-blog>
  	<router-view></router-view>
  </div>  
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import HeadBlog from './components/HeadBlog'

export default {
  name: 'app',
  components: {
    AddBlog,ShowBlogs,HeadBlog
  }
}
</script>

<style>
 
</style>
