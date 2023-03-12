<script>
  import { writable } from "svelte/store";
  import Circle from "./Circle.svelte";

  const newCourse = writable({ id: "", name: "", pdfFile: undefined });

  function addTheCourse(event) {
    event.preventDefault();
    console.log($newCourse);
  }
</script>

<form on:submit={addTheCourse}>
  <a href="/">
    <Circle radius={2} />
  </a>
  <label for="new-course-id"
    ><p>Course ID</p>
    <input
      required
      type="text"
      name="new-course-id"
      id="new-course-id"
      bind:value={$newCourse.id}
    />
  </label>

  <label for="new-course-name"
    ><p>Course Name</p>
    <input
      type="text"
      name="new-course-name"
      id="new-course-name"
      bind:value={$newCourse.name}
    />
  </label>

  <label for="new-course-coursebook-pdf"
    ><p>Coursebook as a pdf</p>
    <input
      bind:files={$newCourse.pdfFile}
      accept=".pdf"
      required
      type="file"
      name="new-course-coursebook-pdf"
      id="new-course-coursebook-pdf"
    />
  </label>

  <button type="submit">Add course</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  }

  label {
    display: flex;
    margin-bottom: 0.8rem;
  }

  label > p {
    width: 10rem;
    text-align: left;
  }
</style>
