<template>
	<div class="common-layout">
		<el-container>
			<el-aside width="200px">
				<h2>IHRM</h2>
				<el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
					<el-radio-button :label="false">expand</el-radio-button>
					<el-radio-button :label="true">collapse</el-radio-button>
				</el-radio-group>
				<el-menu
					router
					default-active="/home/absde"
					class="el-menu-vertical-demo"
					@open="handleOpen"
					@close="handleClose"
				>
					<el-menu-item index="/home/absde">
						<el-icon><Odometer /></el-icon>
						<template #title>首页</template>
					</el-menu-item>
					<el-menu-item index="/home/user">
						<el-icon><Avatar /></el-icon>
						<template #title>员工</template>
					</el-menu-item>
				</el-menu>
			</el-aside>
			<el-container>
				<el-header>Header</el-header>
				<el-main>
					<div>
						<router-view v-slot="{ Component }">
							<keep-alive>
								<component :is="Component" />
							</keep-alive>
						</router-view>
					</div>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	import { Odometer, Avatar } from '@element-plus/icons-vue';

	const isCollapse = ref(true);
	const handleOpen = (key: string, keyPath: string[]) => {
		console.log(key, keyPath);
	};
	const handleClose = (key: string, keyPath: string[]) => {
		console.log(key, keyPath);
	};
</script>
<style>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}
	.el-header,
	.el-footer {
		background-color: #b3c0d1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-aside {
		background-color: #d3dce6;
		color: #333;
		text-align: center;
		/* line-height: 200px; */
		height: 100vh;
	}

	.el-main {
		background-color: #e9eef3;
		color: #333;
		text-align: center;
		/* line-height: 160px; */
	}
</style>
