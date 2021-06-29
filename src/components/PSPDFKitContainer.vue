<template>
  <div class="pdf-container"></div>
</template>

<script>
import PSPDFKit from "pspdfkit";

export default {
  data() {
    return {
      customFonts: [],
    };
  },
  props: {
    pdfFile: {
      type: String,
      required: true,
    },
  },
  watch: {
    pdfFile(val) {
      if (val) {
        this.loadPSPDFKit();
      }
    },
  },
  methods: {
    async loadPSPDFKit() {
      const customFont = ["SourceHanSerif"].map(
        (font) =>
          new PSPDFKit.Font({
            name: font,
            callback: (name) =>
              fetch(`/font/${name}.ttf`).then((resp) => resp.blob()),
          }),
      );
      console.log("customFonts", this.customFonts);
      PSPDFKit.unload(".pdf-container");
      return PSPDFKit.load({
        // import the PDF File from properties
        document: this.pdfFile,
        container: ".pdf-container",
        customFonts: customFont,
      });
    },
    async customFontsFetcher(fontName) {
      return fetch(`/font/${fontName}.ttf`).then((result) => {
        if (result.status === 200) {
          return result.blob();
        } else {
          throw new Error();
        }
      });
    },
  },
  beforeDestroy() {
    PSPDFKit.unload(".pdf-container");
  },
  mounted() {
    this.loadPSPDFKit().then((instance) => {
      this.$emit("loaded", instance);
      window.instance = instance;
      const annotation = new PSPDFKit.Annotations.TextAnnotation({
        pageIndex: 0,
        text: "Welcome to\nPSPDFKit 仕方がない",
        horizontalAlign: "center",
        font: "SourceHanSerif",
        boundingBox: new PSPDFKit.Geometry.Rect({
          left: 10,
          top: 20,
          width: 30,
          height: 40,
        }),
        fontColor: PSPDFKit.Color.RED,
      });
      instance.create(annotation);
    });
  },
};
</script>
<style scoped>
.pdf-container {
  height: 100vh;
}
</style>
