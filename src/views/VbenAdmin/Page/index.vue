<script setup lang="ts">
const isCollapsible = ref(true);
</script>

<template>
  <div class="box">
    <el-splitter>
      <el-splitter-panel size="30%" :collapsible="isCollapsible">
        <div class="demo-panel"></div>
      </el-splitter-panel>
      <el-splitter-panel :min="200">
        <div class="demo-panel">2</div>
      </el-splitter-panel>
    </el-splitter>
    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">
          <span>功能介绍</span>
        </div>
      </template>
      <pre>
            <code>
              Props
              属性名	            描述	                    类型	         默认值	   说明
              title	              页面标题	                string|slot	   -	      -
              description	        页面描述（标题下的内容）	  string|slot	   -	     -
              contentClass	      内容区域的class	           string	       -	      -
              headerClass	        头部区域的class	           string	       -	      -
              footerClass	        底部区域的class	           string	       -	      -
              autoContentHeight   自动调整内容区域的高度	    boolean	      false	   -


              Slots
              插槽名称	    描述
              default	     页面内容
              title	       页面标题
              description	 页面描述
              extra	       页面头部右侧
              footer	     页面底部
            </code>
          </pre>
    </el-card>

    <!-- <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">
          <span>功能介绍</span>
        </div>
      </template>
      <ul class="radius line">
        <li>提供一个常规页面布局的组件，包括头部、内容区域、底部三个部分</li>
        <li>
          本组件是一个基本布局组件。如果有更多的通用页面布局需求（比如双列布局等），可以根据实际需求自行封装
        </li>
      </ul>

      <p>基础用法：将Page作为你的业务页面的根组件即可</p>

      <div></div>
    </el-card> -->
  </div>
</template>

<style scoped></style>
