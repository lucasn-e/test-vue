<template>
  <div class="pdf-container"></div>
</template>

<script>
import PSPDFKit from "pspdfkit";
const licenseKey = "YOUR_LICENSE_KEY_GOES_HERE";

export default {
  props: {
    pdfFile: {
      type: String,
      required: true,
    },
  },
  methods: {
    async loadPSPDFKit() {
      return PSPDFKit.load({
        // import the PDF File from properties
        document: this.pdfFile,
        container: ".pdf-container",
        licenseKey,
      });
    },
  },
  beforeDestroy() {
    PSPDFKit.unload(".pdf-container");
  },
  mounted() {
    this.loadPSPDFKit().then((instance) => {
      this.$emit("loaded", instance);
    });
  },
};
</script>
<style scoped>
.pdf-container {
  height: 100vh;
}
</style>
