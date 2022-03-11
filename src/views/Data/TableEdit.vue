<script lang="ts" setup>
import { onMounted, ref, reactive } from 'vue'

const userForm = reactive({
  index: 0,
  title: '',
  date: '',
  content: ''
})

interface User {
  date: string
  title: string
  content: string
}

const dialogVisible = ref(false)
const editMode = ref(false)
const formRef = ref()
const tableData: User[] = reactive(
  localStorage.getItem('TableData')
    ? JSON.parse(localStorage.getItem('TableData') || '[]')
    : []
)

onMounted(() => {
  console.log('onTableEditMounted')
})

const handleEdit = (index: number, row: User) => {
  editMode.value = true
  dialogVisible.value = true
  userForm.title = row.title
  userForm.date = row.date
  userForm.content = row.content
  userForm.index = index
}

const confirmEditData = () => {
  formRef.value.validate(async (valid: boolean) => {
    if (valid) {
      tableData.splice(userForm.index, 1, { ...userForm })
      localStorage.setItem('TableData', JSON.stringify(tableData))
      dialogVisible.value = false
    }
  })
}

const handleDelete = (index: number, row: User) => {
  tableData.splice(index, 1)
  localStorage.setItem('TableData', JSON.stringify(tableData))
  return true
}

const confirmAddData = () => {
  console.log('addData')
  formRef.value.validate(async (valid: boolean) => {
    if (valid) {
      tableData.push({ ...userForm })
      localStorage.setItem('TableData', JSON.stringify(tableData))
    }
  })
  dialogVisible.value = false
}
</script>

<template>
  <div>
    <el-button
      type="primary"
      @click="
        () => {
          dialogVisible = true
          editMode = false
          userForm.title = ''
          userForm.date = ''
          userForm.content = ''
        }
      "
    >
      Add
    </el-button>
    <el-table :data="tableData" stripe>
      <el-table-column label="Date" align="center">
        <template #default="scope">
          {{ scope.row.date }}
        </template>
      </el-table-column>
      <el-table-column label="Title" align="center">
        <template #default="scope">
          <el-popover placement="top">
            <template #default>
              <div style="color: brown">title: {{ scope.row.title }}</div>
              <div style="color: cornflowerblue">
                content: {{ scope.row.content }}
              </div>
            </template>
            <template #reference>
              <el-tag>{{ scope.row.title }}</el-tag>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="Operations" align="center">
        <template #default="scope">
          <el-button
            type="text"
            size="small"
            @click="handleEdit(scope.$index, scope.row)"
          >
            Edit
          </el-button>
          <el-popconfirm
            title="Are you sure to delete this?"
            @confirm="handleDelete(scope.$index, scope.row)"
          >
            <template #reference>
              <el-button type="text" size="small" style="color: red">
                Delete
              </el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      ref="formRef"
      v-model="dialogVisible"
      :title="editMode ? 'Edit' : 'Add'"
      width="32%"
    >
      <el-form
        ref="formRef"
        :model="userForm"
        label-width="4rem"
        label-position="top"
      >
        <el-form-item label="title" prop="title">
          <el-input v-model="userForm.title" />
        </el-form-item>
        <el-form-item label="date" prop="date">
          <el-date-picker
            style="width: 100%"
            v-model="userForm.date"
            value-format="YYYY-MM-DD"
            type="date"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="content" prop="content">
          <el-input type="textarea" :rows="4" v-model="userForm.content" />
        </el-form-item>
      </el-form>

      <template #footer>
        <span>
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button v-if="!editMode" type="primary" @click="confirmAddData">
            Confirm Add
          </el-button>
          <el-button v-else type="primary" @click="confirmEditData">
            Confirm Edit
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
