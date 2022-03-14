<script lang="ts" setup>
import { ElInput } from 'element-plus'
import { ref, reactive, nextTick } from 'vue'

interface User {
  date: string
  title: string
  content: string
  tags: string[]
}

const todoForm = reactive({
  title: '',
  date: '',
  content: '',
  tags: ['']
})

const currentIndex = ref(0)

const dialogVisible = ref(false)
const editMode = ref(false)
const tagValue = ref('')
const tagInputVisible = ref(false)

// const formRef = ref<InstanceType<typeof ElForm>>()
const formRef = ref()
const InputRef = ref<InstanceType<typeof ElInput>>()

const todoList: User[] = reactive(
  localStorage.getItem('todoList')
    ? JSON.parse(localStorage.getItem('todoList') || '[]')
    : []
)

const handleEdit = (index: number, row: User) => {
  editMode.value = true
  dialogVisible.value = true
  todoForm.title = row.title
  todoForm.date = row.date
  todoForm.content = row.content
  todoForm.tags = [...row.tags]
  currentIndex.value = index
}

const confirmEditData = () => {
  formRef.value.validate(async (valid: boolean) => {
    if (valid) {
      todoList.splice(currentIndex.value, 1, { ...todoForm })
      localStorage.setItem('todoList', JSON.stringify(todoList))
      dialogVisible.value = false
    }
  })
}

const handleDelete = (index: number, row: User) => {
  todoList.splice(index, 1)
  localStorage.setItem('todoList', JSON.stringify(todoList))
  return true
}

const confirmAddData = () => {
  formRef.value.validate(async (valid: boolean) => {
    if (valid) {
      todoList.push({ ...todoForm })
      localStorage.setItem('todoList', JSON.stringify(todoList))
    }
  })
  dialogVisible.value = false
}

const closeTag = (tag: string) => {
  todoForm.tags.splice(todoForm.tags.indexOf(tag), 1)
}

const handleInputConfirm = () => {
  if (tagValue.value) {
    todoForm.tags.push(tagValue.value)
  }
  tagInputVisible.value = false
  tagValue.value = ''
}

const showInput = () => {
  tagInputVisible.value = true
  nextTick(() => {
    InputRef.value!.input!.focus()
  })
}

const clearList = () => {
  // todoList.splice(0, todoList.length)
  // localStorage.setItem('todoList', JSON.stringify(todoList))
  todoList.splice(0, todoList.length)
  localStorage.clear()
  return true
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
          todoForm.title = ''
          todoForm.date = ''
          todoForm.content = ''
          todoForm.tags = []
        }
      "
    >
      添加
    </el-button>
    <el-popconfirm title="确定清空？此操作不可撤销！" @confirm="clearList">
      <template #reference>
        <el-button> 清空 </el-button>
      </template>
    </el-popconfirm>
    <el-table :data="todoList" stripe>
      <el-table-column label="日期" align="center">
        <template #default="scope">
          {{ scope.row.date }}
        </template>
      </el-table-column>
      <el-table-column label="标题" align="center">
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
      <el-table-column label="标签" align="center">
        <template #default="scope">
          <el-tag style="margin: 2px" v-for="tag in scope.row.tags">
            {{ tag }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button
            type="text"
            size="small"
            @click="handleEdit(scope.$index, scope.row)"
          >
            编辑
          </el-button>
          <el-popconfirm
            title="确定删除?"
            @confirm="handleDelete(scope.$index, scope.row)"
          >
            <template #reference>
              <el-button type="text" size="small" style="color: red">
                删除
              </el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      v-model="dialogVisible"
      :title="editMode ? '编辑' : '添加'"
      width="32%"
    >
      <el-form
        ref="formRef"
        :model="todoForm"
        label-width="4rem"
        label-position="top"
      >
        <el-form-item label="标题" prop="title">
          <el-input v-model="todoForm.title" />
        </el-form-item>
        <el-form-item label="日期" prop="date">
          <el-date-picker
            style="width: 100%"
            v-model="todoForm.date"
            value-format="YYYY-MM-DD"
            type="date"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input type="textarea" :rows="4" v-model="todoForm.content" />
        </el-form-item>
        <el-form-item label="标签" prop="tags">
          <el-tag
            style="margin: 2px"
            v-for="tag in todoForm.tags"
            :key="tag"
            closable
            @close="closeTag(tag)"
          >
            {{ tag }}
          </el-tag>
          <el-input
            v-if="tagInputVisible"
            ref="InputRef"
            class="tag-input"
            v-model="tagValue"
            size="small"
            @keyup.enter="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button class="tag-input" v-else size="small" @click="showInput">
            + 新 标签
          </el-button>
        </el-form-item>
      </el-form>

      <template #footer>
        <span>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button v-if="!editMode" type="primary" @click="confirmAddData">
            添加
          </el-button>
          <el-button v-else type="primary" @click="confirmEditData">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="less" scoped>
.tag-input {
  width: 8rem;
}
</style>
