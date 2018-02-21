<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import IOTA from 'iota.lib.js';

export default {
  name: 'IOTA',
  data () {
    var iota = new IOTA({
        'provider': "http:///iotanode.host:14265"
    });
    
    // now you can start using all of the functions
    iota.api.getNodeInfo(function(error, success) {
        if (error) {
            console.error(error);
        } else {
            console.log(success);
        }
    });
    return {
      msg: {"tessts": "xx"}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
