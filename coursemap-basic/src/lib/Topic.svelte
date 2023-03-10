<script>
  import RingOfTopics from "./RingOfTopics.svelte";

  export let topicName;
</script>

<p>{topicName}</p>

<RingOfTopics {topicName} />
