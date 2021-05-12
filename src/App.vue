<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="pdf-container"></div>
  </div>
</template>

<script>
import PSPDFKit from "pspdfkit";
const dummy = require("./assets/dummy.pdf");

export default {
  name: "App",
  data() {
    return {
      instance: null,
      PSPDFKit,
    };
  },
  methods: {
    async loadPSPDFKit() {
      return PSPDFKit.load({
        document: dummy.default,
        container: ".pdf-container",
        licenseKey:
          "pzlXZGR34hqAUgQdbGBSdC-vpMT4i1vLuMtabZqcYrjJB7xOJa5tJqO8-XG1rJ9cfXCPQH1TL-En6mOnURfwIi8-K91-Ght_PguaaOzqSBWWnI-q5yiAjDIUZLZzXB7HzKhUP6MaXVvE5S8jRmuNDdxMK-VNSdc9EGq6hCQOKwxpTvZ7MnxSWJoZP7u7YfI2nM3CGMKwdDCPE32fW7nbNFZq859p6eUi7sTKzEcTiljgjoYUUT3lotYDszgIujEDXFf_A8CgMBOeC7v0d2wObyd5AM2gU8v1HaA5RmZBQzu8jTae1702-DQ7K1kgByKX3wO3A77a-Y593LcrY-KVz8Bs10dBm2hh-y7SyZdHtfIr98ohW-d66rwIz1IfSxlrasWg3VPjhs6gx7ErWjkMdvoBDIM-_jI97GRoQ4KGLJBaTTZTx0pEzctHudWDcCFrdLWXOF9k6zMnAXYYHUcubCzEgMZirHquYlwoPrb3IDpeq3UMNaTBI3hC2OzNTNAQd_qWxVlQq_vny339AbfWqctIEFJz6nc8igdkDu4Ubvj7faFl6LxqZxe32zs_S6mkx4yMi4t-2D-PFw5W6tTnjy2RC6JwunH1Z6WfppoGFbomUVL_-_FhzU8QhTxZtVDe15sWPsFCGixuBXJqiAYUUe3NQMYZiQXN_QR9OOO5QYQpTk5mHS0-dPWRt1Geja4wyEYizwukJJh12FakZnLFTd96UD9HeLWcQ30I2JLc7p8=",
      });
    },
  },
  beforeDestroy() {
    PSPDFKit.unload(".pdf-container");
  },
  mounted() {
    this.loadPSPDFKit().then((instance) => {
      this.instance = instance;
      console.log(instance);
    });
    console.log(PSPDFKit);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
