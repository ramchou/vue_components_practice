<template>
  <div role="tabpanel" class="tab-pane active" id="Message">
    <ul class="list-group">
      <li class="list-group-item" v-for="message in messages" :key="message.id">
        <!-- <router-link :to="'/home/message/messagedetail'+message.id+'?msgContent='+message.content" >{{message.content}}</router-link> -->
        <router-link
          :to="{name:'msgInfo',params:{msgId:message.id},query:{msgContent:message.content,msgTitle:message.title}}"
        >{{message.content}}</router-link>
      </li>
    </ul>
    <div class="alert alert-success" role="alert">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      messages: [
        { id: 1, content: "msgOne", title: "hahaha" },
        { id: 2, content: "msgTwo", title: "yeahhhhh" },
        { id: 3, content: "msgThree", title: "emmmmm" }
      ]
    };
  }
};
</script>

<style scoped>
</style>
