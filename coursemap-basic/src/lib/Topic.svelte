<script>
  import RingOfTopics from "./RingOfTopics.svelte";
  import { example as outline } from "./outlines";
  export let topicName;
  export let courseId;
</script>

<p>{topicName}</p>
<!-- <div style="position:relative;">
  <p>{topic.definition.simple}</p>
</div> -->
<RingOfTopics {topicName} {courseId} />
