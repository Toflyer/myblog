<template>
	<div id="footer">
		<div id="footer_">
			<p>@2017 作者：朱鹏钢</p>
			<p>本站采用MySQL Vue Node等制作，有问题请致邮：948588560@qq.com</p>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#footer #footer_ {
		padding: 20px 15% 20px 15%;
		height: 40px;
		border-top: 1px solid #eeeeee;
		background-color: #f8f8f8;
	}
	
	#footer #footer_ p {
		font-size: 12px;
		opacity: 0.6;
	}
	
	@media screen and (max-width: 768px) {
		#footer #footer_ {
			margin-top:50px;
			padding: 20px 15% 20px 15%;
			height: 40px;
			border-top: 1px solid #eeeeee;
			background-color: #f8f8f8;
		}
	}
</style>