<script>
  import { courses } from "./lib/outlines";
  import Course from "./lib/Course.svelte";
  import Topic from "./lib/Topic.svelte";
  import SubTopic from "./lib/SubTopic.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import AddNewCourse from "./lib/AddNewCourse.svelte";
  let url = "";
</script>

<Router {url}>
  <Route path="/:courseId/:topicName/:subTopicName" component={SubTopic} />
  <Route path="/:courseId/:topicName" component={Topic} />
  <Route path="/:courseId/" let:params>
    <Course courseId={params.courseId} />
  </Route>
  <Route path="/">
    {#each courses as course (course.id)}
      <a href="/{course.id}"> <p>{course.id}</p></a>
    {/each}
    <a href="/add-course">➕</a>
  </Route>
  <Route path="/add-course">
    <AddNewCourse />
  </Route>
</Router>
