import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import SimpleBlog from './components/SimpleBlog.vue'
import EditBlog from './components/EditBlog.vue'

export default
[
	{path:'/',component:ShowBlogs},
	{path:'/add',component:AddBlog},
	{path:'/blog/:id',component:SimpleBlog},
	{path:'/edit/:id',component:EditBlog}
	
]
