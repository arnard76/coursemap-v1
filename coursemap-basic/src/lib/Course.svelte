<script>
  export let courseId;

  import Circle from "./Circle.svelte";
  import { courses } from "./outlines";

  $: selectedCourse = courses.find((course) => course.id === courseId);
</script>

<a href="/" style="position:relative; bottom: 10px;"> <Circle radius={2} /></a>
<p>{selectedCourse.id}</p>

{#each selectedCourse.outline as topic (topic.name)}
  <a href="/{courseId}/{topic.name}">
    <p>{topic.name}</p>
  </a>
{/each}
