<script setup lang="ts">
import { type Player, check } from "./utils";
import type { FormInstance } from "element-plus";

const ruleFormRef = ref<FormInstance>();

const ruleForm: Player = reactive({
  name: "",
  xp: 0,
});
const rules = {
  name: [
    { required: true, message: "Please fill in the activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
};

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<template>
  <div>
    form 表单

    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="auto">
      <el-form-item label="Activity name" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>

      <el-form-item label="Activity name" prop="xp">
        <el-input-number v-model="ruleForm.xp" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"> Create </el-button>
        <!-- <el-button @click="resetForm(ruleFormRef)">Reset</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped></style>
