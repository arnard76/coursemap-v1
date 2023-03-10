<script>
  export let radius = 100; // px
  export let colour = "blue";
</script>

<div class="circle" style="--radius: {radius}px; --colour: {colour};" />

<style>
  .circle {
    height: calc(var(--radius) * 2);
    width: calc(var(--radius) * 2);
    position: absolute;
    top: 0;
    left: 0;

    transform: translate(-50%, -50%);

    background-color: transparent;
    border-radius: 50%;
    border-color: var(--colour);
    border-width: 10px;
    border-style: solid;
  }
</style>
