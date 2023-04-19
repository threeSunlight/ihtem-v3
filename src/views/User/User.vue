<template>
<div>
<div class="content_header">
		<el-button type="primary">导入</el-button>
		<el-button type="success">新增员工</el-button>
	</div>

		<el-table :data="tableData.data" style="width: 100%">
			<el-table-column prop="date" label="序号"  width="80"/>
			<el-table-column prop="username" label="姓名"  />
			<el-table-column prop="mobile" label="手机号" />
			<el-table-column prop="workNumber" label="员工号"  />
			<el-table-column prop="formOfEmployment" label="聘用形式"  />
			<el-table-column prop="departmentName" label="部门" />
			<el-table-column prop="correctionTime" label="入职时间" width="120"/>
			<el-table-column prop="inServiceStatus" label="是否在职" />
			<el-table-column prop="enableState" label="状态"  />
			<el-table-column fixed="right" label="操作" width="400">
				<template #default>
					<el-button link type="primary" size="small" @click="handleClick">
						查看
					</el-button>
					<el-button link type="primary" size="small">转正</el-button>
					<el-button link type="primary" size="small">调岗</el-button>
					<el-button link type="primary" size="small">角色</el-button>
					<el-button link type="primary" size="small">删除</el-button>
					<el-button link type="primary" size="small">离职</el-button>
				</template>
			</el-table-column>
		</el-table>

</div>
	
</template>
<script lang="ts">

    import {UserTableList} from '@/api/api';
    import * as TS from '@/api/defind'
    import { reactive, onMounted } from 'vue';
    import { Plus } from '@element-plus/icons-vue';
	export default {
		name: 'HomeView',
		setup() {
			const handleClick = () => {
				console.log('click');
			};
            /**分页 */
            const page = reactive({
                page: 1,
                size: 10
            })
            /**table列表数据 */
            const tableData: {data: TS.useTableList[]} = reactive({
                data: []
            })
			/**获取列表数据 */
            const getTableList = () => {
                UserTableList(page).then(res => {
                    if(res.code ===TS.Code.SUCCESS ) {
						const {rows} =  res.data
						console.log(res,'res');
						// 给table赋值
						tableData.data = rows
						console.log(tableData,'tableData');
					}
                    console.log(res);
                })
            }

            onMounted(() => {
                getTableList()
            })
            return {
                tableData,
                handleClick
            }
		},
	};
</script>
<style lang="scss">
	.content_header {
		height: 80px;
		box-shadow: 0px 0px 5px 5px #ccc;
		text-align: right;
		line-height: 80px;
		padding-right: 80px;
        margin-bottom: 40px
	}
</style>
