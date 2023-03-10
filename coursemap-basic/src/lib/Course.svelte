<script>
  export let courseId;

  import { courses } from "./outlines";

  $: selectedCourse = courses.find((course) => course.id === courseId);
</script>

<a href="/">{"🔙"}</a>
<p>{selectedCourse.id}</p>

{#each selectedCourse.outline as topic (topic.name)}
  <a href="/{courseId}/{topic.name}">
    <p>{topic.name}</p>
  </a>
{/each}
