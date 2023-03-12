<script>
  export let courseId = "";
  export let topicName = "";
  export let subTopicName = "";

  export let subTopicWhole = null;
  export let backLink = null;

  import { courses } from "./outlines";
  import Circle from "./Circle.svelte";

  $: subTopic =
    subTopicWhole ||
    courses
      .find((course) => course.id === courseId)
      .outline.find((topic) => topic.name === topicName)
      .childs.find((child) => child["name"] === subTopicName);
</script>

<div style="position:relative;">
  <a href={backLink || "/" + courseId + "/" + topicName}>
    <Circle radius={2} />
  </a>
  <p>{subTopic.name}</p>

  <iframe
    title="{courseId} coursebook"
    src="/example_pdfs/{courseId}/{subTopicWhole?.name ||
      topicName + '/' + subTopicName}/fragment.pdf#toolbar=0"
    width="100%"
    height="380px"
    style="opacity: 0.8;filter: invert(1);border:none; margin:0;width:100%;"
  />
  <pre>{subTopic.content}</pre>
</div>
