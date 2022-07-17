<template>
  <div class="mj-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in props.formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    v-model="formData[`${item.field}`]"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
  <div class="footer">
    <slot name="footer"></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, ref, watch, defineEmits } from 'vue'
import { IFormItem } from '../types'

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '10px 40px' })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6, // >1920px 4δΈ
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
})

const formData = ref({ ...props.modelValue })
const emits = defineEmits(['update:modelValue'])
watch(
  formData,
  (newValue) => {
    console.log(newValue)
    emits('update:modelValue', newValue)
  },
  {
    deep: true
  }
)
</script>

<style scoped lang="less">
.mj-form {
  padding-top: 22px;
}
</style>
