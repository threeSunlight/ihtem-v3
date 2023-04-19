<template>
	<div class="content_root">
		<div class="root">
			<h1>IHRM后台管理系统</h1>
			<el-form
				ref="ruleFormRef"
				:model="ruleForm"
				:rules="rules"
				class="demo-ruleForm"
				:size="formSize"
				status-icon
			>
				<el-form-item prop="mobile">
					<el-input
						v-model="ruleForm.mobile"
						:prefix-icon="User"
						placeholder="请输入手机号"
					/>
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="ruleForm.password" placeholder="请输入密码">
						<template #prefix>
							<el-icon><Lock /></el-icon>
						</template>
					</el-input>
				</el-form-item>
				<el-form-item>
					<el-button
						type="primary"
						@click="submitForm(ruleFormRef)"
						class="button_class"
					>
						登 录
					</el-button>
				</el-form-item>
			</el-form>
			<span class="span_bottom">还没有账号？立即注册</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { reactive, ref } from 'vue';
	import { FormInstance, FormRules,ElMessage } from 'element-plus';

	import { User, Lock } from '@element-plus/icons-vue';

	import { Login } from '@/api/api';
  import * as TS from '@/api/defind'
  import { setToken } from '../../utils/auth';
  import {useRouter} from 'vue-router'
	const formSize = ref('default');
	const ruleFormRef = ref<FormInstance>();
	const ruleForm: TS.LoginParams = reactive({
		mobile: '13800000002',
		password: '123456',
	});
  /**声明一个route */
   const router = useRouter()
	const rules = reactive<FormRules>({
		name: [
			{ required: true, message: '手机号不能为空', trigger: 'blur' },
			{ min: 6, max: 11, message: '请输入正确的手机号', trigger: 'blur' },
		],
		password: [
			{
				required: true,
				message: '密码不能为空',
				trigger: 'blur',
			},
			{ min: 6, message: '密码不能少6位', trigger: 'blur' },
		],
	});
	const submitForm = async (formEl: FormInstance | undefined) => {
		if (!formEl) return;
		await formEl.validate((valid, fields) => {
			if (valid) {
				Login(ruleForm).then(res => {
					console.log(res);
          if(res.code === TS.Code.SUCCESS) {
          
            // 储存token
            setToken(res.data)
            //登录成功
             ElMessage({
              message: '登录成功,即将跳转到首页',
              type: 'success',
            })
              // 跳转到别的路径
            router.push({
              path: "/home"
            })
          } else {
            //登录成功
             ElMessage({
              message: `登录失败, ${res.message}`,
              type: 'error',
            })
          }
				});
			} else {
				console.log('error submit!', fields);
			}
		});
	};
</script>
<style lang="scss">
	.content_root {
		width: 100vw;
		height: 100vh;
		background-color: skyblue;
		padding: 0;
		margin: 0;
		.root {
			height: 500px;
			width: 450px;
			position: absolute;
			margin: auto;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			.button_class {
				width: 100%;
				padding: 30px;
				font-size: 24px;
			}
			h1 {
				color: aliceblue;
				text-align: center;
				margin-bottom: 20px;
			}
			.span_bottom {
				display: block;
				text-align: center;
				color: aliceblue;
			}
		}
		.el-input {
			// border: 1px solid hsla(0, 0%, 100%, 0.1);
			background: hsla(0, 0%, 100%, 0.7);
			border-radius: 10px;
			color: #454545;
			height: 52px;
			line-height: 52px;
		}
	}
</style>
