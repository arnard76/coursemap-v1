<script>
  import RingOfTopics from "./RingOfTopics.svelte";
  import { courses } from "./outlines";
  import SubTopic from "./SubTopic.svelte";

  export let topicName;
  export let courseId;

  $: selectedTopic = courses
    .find((course) => course.id === courseId)
    .outline.find((topic) => topic.name === topicName);

  let hasSubTopics = false;
  $: if (selectedTopic.childs?.length > 0) {
    hasSubTopics = true;
  } else {
    hasSubTopics = false;
  }
</script>

<!-- <div style="position:relative;">
  <p>{topic.definition.simple}</p>
</div> -->
{#if hasSubTopics}
  <p>{topicName}</p>
  <RingOfTopics {topicName} {courseId} />
{:else}
  <SubTopic
    subTopicWhole={selectedTopic}
    backLink={"/" + courseId + "/"}
    {courseId}
  />
{/if}
