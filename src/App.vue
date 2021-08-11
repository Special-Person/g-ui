<template>
  <div id="app">
    <div>
      <g-button>好</g-button>
      <g-button type="primary">好</g-button>
      <g-button type="success">好</g-button>
      <g-button type="info">好</g-button>
      <g-button type="warning">好</g-button>
      <g-button type="danger">好</g-button>
    </div>
    <div>
      <g-button plain>好</g-button>
      <g-button plain type="primary">好</g-button>
      <g-button plain type="success">好</g-button>
      <g-button plain type="info">好</g-button>
      <g-button plain type="warning">好</g-button>
      <g-button plain type="danger">好</g-button>
    </div>
    <div>
      <g-button round>好</g-button>
      <g-button round type="primary">好</g-button>
      <g-button round type="success">好</g-button>
      <g-button round type="info">好</g-button>
      <g-button round type="warning">好</g-button>
      <g-button round type="danger">好</g-button>
    </div>
    <div>
      <g-button icon="g-icon-eleme" @click="handleClick">真不错</g-button>
      <g-button icon="g-icon-edit"></g-button>
      <g-button icon="g-icon-check">真不错</g-button>
      <g-button icon="g-icon-message">真不错</g-button>
      <g-button icon="g-icon-star-off">真不错</g-button>
      <g-button icon="g-icon-delete">真不错</g-button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick(val){
        console.log("点击了")
      }
    }
  }
</script>

<style lang="scss">
#app > div > .g-button {
  margin-right: 10px;
}
</style>
