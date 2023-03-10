<script>
  export let topicName = "";
  export let subTopicName = "";

  import { example as outline } from "./getOutline";
  import Circle from "./Circle.svelte";

  $: subTopic = outline
    .find((topic) => topic.name === topicName)
    .childs.find((child) => child === subTopicName);
</script>

<div style="position:relative;">
  <a href={"/" + topicName}>
    <Circle radius={2} />
  </a>
  <p>{subTopic}</p>
</div>
