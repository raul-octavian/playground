.<template>
  <div class="raul">
    <h1>This is Raul's playground</h1>
    <div class="clickContainer">
      <div class="clickArea" ref="moodArea" @click="this.clickRecorder">
        <div class="clickPoint" :style="positionElement"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Raul",
  data() {
    return {
      coordX: 0,
      coordY: 0,
      boxLocation: {
        left: 0,
        top: 0
      },
      positionOneElement: {
        date: 0,
        top: 0,
        left: 0
      },
      allPositions: [],
      positionElement: {
        top: 0,
        left: 0
      }
    };
  },
  methods: {
    populateArray() {
      this.allPositions.push(this.positionOneElement);
    },
    createPositionElement() {
      this.positionOneElement.date = new Date();
      this.positionOneElement.left = this.coordX - this.boxLocation.left;
      this.positionOneElement.top = this.coordY - this.boxLocation.top;
    },

    positionStyle() {
      this.positionElement.left = this.coordX - this.boxLocation.left;
      this.positionElement.top = this.coordY - this.boxLocation.top;
    },

    clickRecorder(event) {
      // clientX/Y gives the coordinates relative to the viewport in CSS pixels.
      this.coordX = event.clientX; // x coordinate
      this.coordY = event.clientY; // y coordinate
      this.createPositionElement();
      this.populateArray();
      this.positionStyle();
    }
  },
  mounted() {
    this.boxLocation.left = this.$refs.moodArea.getBoundingClientRect().left;
    this.boxLocation.top = this.$refs.moodArea.getBoundingClientRect().top;
  }
};
</script>

<style lang="scss" scoped>
h1 {
  color: #5082a4;
}
.clickContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 250px;
}
.clickArea {
  width: 400px;
  height: 250px;
  position: relative;
  border: 1px solid black;
}
.clickPoint {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #ff6532;
  position: absolute;
}
</style>