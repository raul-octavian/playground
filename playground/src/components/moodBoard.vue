<template>
  <section id="canvas-container">
    <div onclick="showCoords(event)" id="canvas">
      <div id="click-show"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      coordX: 0,
      coordY: 0,
      one: 0,
      allPositions: [],
      canvas: document.querySelector("#canvas"),
      positionCanvas: getPosition(),
      elementWidth: this.canvas.offsetWidth,
      elementHeight: this.canvas.offsetHeight,
      clickPosition: document.querySelector("#click-show")
    };
  },
  mounted() {
    positionCanvas: this.canvas.getBoundingClientRect();
  },

  methods: {
    //? oject constructor
    position(x, y) {
      this.date = new Date();
      this.x = x;
      this.y = y;
    },

    getPosition() {
      return this.canvas.getBoundingClientRect();
    },

    //?populate the array
    addPosition(one) {
      this.allPositions.push(one);
    },
    // ?get the click location
    //! store the click location

    showCoords(event) {
      this.coordX = event.clientX - this.positionCanvas.left;
      this.coordY = event.clientY - this.positionCanvas.top;
      this.one = this.position(this.coordX, this.coordY);
      this.addPosition(this.one);
      this.clickPosition.style.left = this.coordX + "px";
      this.clickPosition.style.top = this.coordY + "px";
      if (this.allPositions.length > 1) {
        this.checkValues();
      }

      console.log(this.coordX);
      console.log(this.coordY);
      console.log(this.one);
      console.log(this.allPositions);
    },

    checkValues() {
      if (
        this.allPositions[this.allPositions.length - 2].x -
          this.allPositions[this.allPositions.length - 1].x >
          150 ||
        this.allPositions[this.allPositions.lenght - 1] < 200
      ) {
        alert("How are you feeling today?");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
