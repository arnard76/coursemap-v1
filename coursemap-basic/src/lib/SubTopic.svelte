<script>
  export let courseId = "";
  export let topicName = "";
  export let subTopicName = "";

  import { courses } from "./outlines";
  import Circle from "./Circle.svelte";

  $: subTopic = courses
    .find((course) => course.id === courseId)
    .outline.find((topic) => topic.name === topicName)
    .childs.find((child) => child["name"] === subTopicName);
</script>

<div style="position:relative;">
  <a href={"/" + courseId + "/" + topicName}>
    <Circle radius={2} />
  </a>
  <p>{subTopic.name}</p>
  <pre>{subTopic.content}</pre>
</div>
