<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import IOTA from "iota.lib.js";
const seed = "RBKSJJDNJXUQZBHTCIUSJISRSFWBGQOMFWVWLECZBKMBAWOUZUQABCDZMXMEGFXQGVBBVSQUZQHWGLPEG";

export default {
  name: "IOTA",
  data() {
    var iota = new IOTA({
      provider: "http:///node.lukaseder.de:14265"
    });

    iota.api.sendTransfer(
      seed,
      2,
      18,
      [
        {
          address:
            "IJSFJTLSKI9FLKSQCJWCQIUMMAHTLMAUPF9IMRFWRKHNIDCWDIPWUGKMNLTMM9XHHV99HJKXJKVJTL9CCKKJWK9OOW",
          value: 0,
          message: iota.utils.toTrytes("I am buying ticket XYZ"),
          tag: iota.utils.toTrytes("some tag")
        }
      ],
      {},
      function(error, success) {
        if (error) {
          console.error(error);
        } else {
          console.log(success);
        }
      }
    );

    // now you can start using all of the functions
    iota.api.getNodeInfo(function(error, success) {
      if (error) {
        console.error(error);
      } else {
        console.log(success);
      }
    });
    return {
      msg: { tessts: "xx" }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
