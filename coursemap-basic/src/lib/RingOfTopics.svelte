<script>
  import Circle from "./Circle.svelte";
  import { example as outline } from "./getOutline";
  export let topicName;
  import { onMount } from "svelte";
  import { Link } from "svelte-routing";

  let url = ``;

  onMount(() => (url = window.location.href));

  $: topic = outline.find((topic) => topic.name === topicName);
  let radius = 180;

  /**
   * @param {number} radius
   * @param {number} angle
   */
  function calcPos(radius, angle) {
    /**
     * @param {number} degrees
     */
    function degToRad(degrees) {
      return degrees * (Math.PI / 180);
    }

    let xPos = radius * Math.sin(degToRad(angle));
    let yPos = radius * Math.cos(degToRad(angle));

    let xElementShift = 120 * Math.sin(degToRad(angle));
    let yElementShift = 80 * Math.cos(degToRad(angle));

    return `transform: translate(calc(calc(-50% + ${xElementShift}%) + ${xPos}px), calc(calc(-50% + ${yElementShift}%) + ${yPos}px));`;
  }
</script>

<div style="position: relative;">
  <Circle {radius} colour="transparent" />
  <a href="/">
    <Circle radius={2} />
  </a>
  {#each topic.childs as childTopic, index (childTopic)}
    <Link to={topicName + "/" + childTopic}>
      <p
        class="sub-topic"
        style={calcPos(radius, (index * 360) / topic.childs.length)}
      >
        {childTopic}
      </p></Link
    >
  {/each}
</div>

<style>
  .sub-topic {
    display: inline-block;
    background: rgba(40, 40, 40, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    text-align: center;
    border-radius: 30%;
  }
</style>
